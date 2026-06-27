const handleChat = async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // BUG-002: Slice history to prevent token exhaustion and server payload bloat
  const messageHistory = (history || []).slice(-10);

  // Fallback indicator if key is missing so frontend knows to use local QA backup
  if (!process.env.GEMINI_API_KEY) {
    console.warn('GEMINI_API_KEY is not set. Chat widget will use local backup engine.');
    return res.status(200).json({ 
      text: 'GEMINI_API_KEY_MISSING',
      isFallback: true
    });
  }

  try {
    // Construct system prompt with rules and details about Shivani Digital Hub
    const systemPrompt = `You are the AI Assistant for "Shivani Digital Hub" (also known as Shivani Digital Hub), a professional legal consulting agency in India.
Your tone should be helpful, expert, friendly, and conversational, like a human customer support agent.
Keep responses concise, clear, and action-oriented.
Formatting guidelines:
- Use bold text (**bold**) for key terms.
- Use bullet points (•) for lists.
- Do NOT output HTML or raw Markdown headings (like # or ##).

Important constraints:
- Do NOT mention exact pricing or service rates (e.g. state "We offer competitive rates and custom pricing; request a free callback for a quote").
- If the user asks about price, fee, cost, or charges, explain that pricing is customized based on state fees/business scale, and politely ask them to request a callback.
- Do NOT make up any services. We provide: Company Registration (Pvt Ltd, LLP, OPC, Section 8, Nidhi, Public Ltd), GST Registration & Return Filing, Income Tax Return (ITR) Filing, Trademark Registration & Renewal, FSSAI Food License, ISO Certification, Import Export Code (IEC) Registration/Modification, EPF & ESIC Registration, MSME/Udyam Registration, PAN & TAN Registration, Consumer Court Complaint Drafting, and Right to Information (RTI) filing.
- Our phone number is +91 7990187675, email is info@shivanidigitalhub.com, and office address is: 5th Avenue, GF-12, Alwa Naka, GIDC Road, Manjalapur, Vadodara - 390 011.

Conversation history:
${messageHistory.map(h => `${h.sender === 'user' ? 'Client' : 'Assistant'}: ${h.text}`).join('\n')}
Client: ${message}
Assistant:`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: systemPrompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 350
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error Response:', errorText);
      return res.status(500).json({ error: 'Gemini API failed' });
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    // Clean up any generated prefix
    const cleanReply = replyText.replace(/^Assistant:\s*/i, '').trim();

    return res.status(200).json({ text: cleanReply });
  } catch (err) {
    console.error('Chat controller error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { handleChat };
