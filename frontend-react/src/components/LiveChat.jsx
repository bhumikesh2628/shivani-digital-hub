import { useState, useEffect, useRef } from 'react'

const qaPairs = [
  {
    keywords: ['company', 'incorporat', 'private limited', 'pvt', 'llp', 'opc', 'incorporation', 'start business', 'nidhi', 'section 8', 'public limited'],
    text: `🏢 **Company Incorporation (Pvt Ltd, LLP, OPC)**
• **Timeline:** 7 to 10 working days
• **Documents Required:** PAN & Aadhaar of directors, and office address proof (utility bill or NOC)
• **How we help:** We handle name approval, DSC, DIN, MOA/AOA, and certificate of incorporation.

Would you like our legal specialist to call you to discuss setting up your business?`
  },
  {
    keywords: ['gst', 'tax', 'gstin', 'registration', 'filing', 'gst returns', 'monthly return', 'quarterly return'],
    text: `📝 **GST Registration & Return Filing**
• **Timeline:** 3 to 7 working days
• **Documents Required:** Owner's PAN & Aadhaar, photo, business address proof, and a cancelled cheque
• **Our Services:** New GST registration, monthly/quarterly GSTR filing, and tax consultations.

Would you like to request a callback from our GST expert?`
  },
  {
    keywords: ['trademark', 'brand', 'logo', 'copyright', 'ipr', 'patent', 'objection', 'protect brand'],
    text: `🛡️ **Trademark & Brand Protection**
• **Filing Timeline:** 1 to 2 working days (use the TM symbol immediately)
• **Documents Required:** Logo file, brand details, applicant identity proof, and authorization letter
• **Our Services:** Trademark search, registration, response to objections, and renewals.

Would you like our IPR specialist to check your trademark availability?`
  },
  {
    keywords: ['food', 'fssai', 'license', 'restaurant', 'cafe', 'catering', 'bakery', 'kitchen'],
    text: `🍲 **FSSAI Food License**
• **Timeline:** 7 to 15 working days
• **Required for:** Restaurants, cafes, food manufacturers, caterers, and grocery shops
• **Documents Required:** Proprietor's PAN & Aadhaar, photo, and business address proof.

Would you like to connect with our food compliance consultant?`
  },
  {
    keywords: ['iso', 'certification', 'quality', 'standards', '9001', '14001', '27001'],
    text: `📜 **ISO Certification (9001, 14001, 27001)**
• **Timeline:** 15 to 25 working days
• **Benefit:** Boosts customer trust, compliance, and international brand credibility
• **Documents Required:** Business registration proof and address details.

Shall we arrange a call with our ISO compliance team?`
  },
  {
    keywords: ['export', 'import', 'iec', 'dgft', 'code', 'customs', 'trade'],
    text: `✈️ **Import Export Code (IEC)**
• **Timeline:** 1 to 3 working days
• **Validity:** Lifetime validity (no renewal required)
• **Documents Required:** PAN card, Aadhaar card, address proof, and a cancelled cheque.

Would you like us to submit your IEC application today?`
  },
  {
    keywords: ['itr', 'income tax', 'tax return', 'file itr', 'assessment', 'ca', 'chartered accountant', 'refund', 'tax filing'],
    text: `💵 **Income Tax Return (ITR) Filing**
• **Timeline:** Same-day filing once documents are ready
• **Required Documents:** Form 16, bank statements, and investment proofs
• **Process:** Direct filing by qualified Chartered Accountants (CAs).

Would you like to speak to our tax advisor about your ITR filing?`
  },
  {
    keywords: ['pf', 'provident fund', 'epf', 'esi', 'esic', 'labour', 'employee', 'payroll', 'salary registration'],
    text: `👥 **EPF & ESIC Compliances**
• **Timeline:** 3 to 5 working days
• **Required for:** Businesses with 10/20+ employees (varies by scheme)
• **Our Services:** EPF/ESI registration, monthly challan submission, and employee benefit advisory.

Would you like our compliance officer to call you and guide you?`
  },
  {
    keywords: ['consumer', 'complaint', 'court', 'fraud', 'scam', 'defect', 'sue', 'service issue', 'forum'],
    text: `⚖️ **Consumer Complaint Filing**
• **Timeline:** Application drafted and filed in 3 to 5 days
• **Scope:** Protection against defective goods, deficient service, or fraudulent charges
• **Required:** Purchase bills, invoice copies, service proof, and communication logs.

Shall we arrange a call with our legal advisor to review your case?`
  },
  {
    keywords: ['rti', 'right to info', 'government', 'information', 'file rti', 'reply'],
    text: `🏛️ **Right to Information (RTI) Filing**
• **Timeline:** RTI drafted and filed online within 2 days
• **Scope:** Query government bodies for official information, project status, or updates
• **Response:** Government departments must reply within 30 days under RTI Act.

Would you like our RTI consultant to help you file your query today?`
  },
  {
    keywords: ['trademark renewal', 'renew tm', 'tm expiry'],
    text: `🔄 **Trademark Renewal**
• **Timeline:** Processed in 1 to 3 working days
• **Required:** Every 10 years to maintain your brand trademark ownership rights
• **Documents:** TM application number, authorization document.

Would you like our IPR renewal desk to give you a call?`
  },
  {
    keywords: ['food renewal', 'fssai renewal', 'renew license'],
    text: `🔄 **FSSAI Food License Renewal**
• **Timeline:** 5 to 10 working days
• **Validity:** Can be renewed for 1 to 5 years prior to current license expiration
• **Documents:** Current FSSAI license copy, business details.

Would you like us to submit your food license renewal application?`
  },
  {
    keywords: ['modify iec', 'change iec', 'iec edit'],
    text: `✏️ **Import Export Code (IEC) Modification**
• **Timeline:** 2 to 4 working days
• **Scope:** Update address, partner/director list, phone/email, or business name on the DGFT portal
• **Required:** Original IEC copy and proof of changes.

Would you like to speak to our trade specialist to update your IEC?`
  },
  {
    keywords: ['udyam', 'msme', 'small business', 'government benefits', 'loans', 'subsidies'],
    text: `🏷️ **MSME / Udyam Registration**
• **Timeline:** 1 to 2 working days
• **Benefits:** Subsidies, priority credit, government tender privileges, and collateral-free loans
• **Documents Required:** PAN Card, Aadhaar Card, bank details, and business name.

Would you like us to generate your MSME certificate today?`
  },
  {
    keywords: ['pan', 'tan', 'tax number', 'tin', 'permanent account'],
    text: `💳 **PAN & TAN Card Registration**
• **Timeline:** 3 to 7 working days
• **PAN:** Mandatory for financial operations, filings, and banking
• **TAN:** Mandatory for businesses deducting tax at source (TDS).

Shall I coordinate a callback to assist you with PAN/TAN setup?`
  },
  {
    keywords: ['price', 'cost', 'fee', 'charges', 'expense', 'rate', 'how much', 'payment'],
    text: `💰 **Pricing & Estimates**
• **Government Fees:** Vary based on state rules, share capital size, or food capacity
• **Shivani Digital Hub Fees:** We offer the lowest professional service rates with no hidden costs
• **Custom Quotes:** We tailor pricing to fit your startup or business scale.

Shall I arrange a callback from our team to give you a customized cost breakup?`
  },
  {
    keywords: ['duration', 'time', 'how long', 'days', 'weeks', 'period', 'fast', 'speed'],
    text: `⏱️ **Processing Timelines**
• **1-2 Days:** IEC, Trademark filing, MSME, PAN/TAN
• **3-7 Days:** GST Registration, ITR filing, PF/ESIC
• **7-15 Days:** Company Incorporation, FSSAI License, ISO Certification

We fast-track all documentation. Shall we start on your application today?`
  },
  {
    keywords: ['document', 'paperwork', 'proof', 'requirements', 'checklist'],
    text: `📂 **Documents Requirement Checklist**
• **ID Proof:** PAN Card & Aadhaar Card of owners/directors
• **Address Proof:** Electricity/water bill or rent agreement of business office
• **Additional:** Passport photo, cancelled bank cheque, authorization letter.

Would you like a specific checklist sent to your phone or email?`
  },
  {
    keywords: ['contact', 'address', 'phone', 'location', 'office', 'email', 'number', 'whatsapp', 'call', 'where', 'visit', 'map'],
    text: `📞 **Contact Shivani Digital Hub**
• **Phone:** +91 7990187675
• **WhatsApp:** +91 7990187675
• **Email:** info@shivanidigitalhub.com
• **Address:** 5th Avenue, GF-12, Alwa Naka, GIDC Road, Manjalapur, Vadodara - 390 011.

Feel free to ask any other questions, or request an instant callback below!`
  }
]

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasNotification, setHasNotification] = useState(true)
  
  // Custom chat states
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', type: 'text', text: "👋 **Welcome to Shivani Digital Hub!**\n\nI am your legal assistant. How can I help you today?\n\n• **Company Setup** (Pvt Ltd, LLP)\n• **GST Registration & Returns**\n• **Trademark & FSSAI License**\n• **ITR & Tax Compliances**\n\nAsk a question or select a quick option below!", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ])
  const [inputText, setInputText] = useState('')
  const [leadName, setLeadName] = useState('')
  const [leadPhone, setLeadPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedMessageId, setSubmittedMessageId] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  
  const chatEndRef = useRef(null)

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping, isOpen])

  const handleOpenChat = () => {
    setIsOpen(!isOpen)
    setHasNotification(false)
  }

  const parseMessageText = (text) => {
    if (!text) return null
    return text.split('\n').map((line, index) => {
      const trimmed = line.trim()
      // Detect bullet points
      const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-')
      const cleanLine = isBullet ? trimmed.replace(/^[•-]\s*/, '') : line

      // Simple markdown bold formatting parser
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g)
      const renderedParts = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-extrabold text-black">{part.slice(2, -2)}</strong>
        }
        return part
      })

      if (isBullet) {
        return (
          <div key={index} className="flex items-start gap-1.5 ml-1 my-0.5">
            <span className="text-[12.5px] text-black shrink-0">•</span>
            <span className="m-0 leading-relaxed text-[12.5px] font-semibold text-black flex-1">
              {renderedParts}
            </span>
          </div>
        )
      }

      return (
        <p 
          key={index} 
          className="m-0 leading-relaxed min-h-[0.5em] text-[12.5px] font-semibold text-black"
        >
          {renderedParts}
        </p>
      )
    })
  }

  const processResponse = (userInput) => {
    const normalized = userInput.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, " ")
    const userWords = normalized.split(/\s+/).filter(w => w.length > 1)
    
    if (userWords.length === 0) {
      return `ℹ️ **How can I help you today?**\n\nFeel free to ask about company setup, GST, ITR, Trademark, or FSSAI, or request a call back to speak with an expert.`
    }
    
    // Check greetings first
    const greetings = ['hi', 'hello', 'hey', 'greetings', 'hola', 'morning', 'afternoon', 'goodday']
    const hasGreeting = userWords.some(w => greetings.includes(w))
    if (hasGreeting && userWords.length <= 2) {
      return `👋 **Hello! Welcome to Shivani Digital Hub**\n\nHow can I assist you today? You can ask me about:\n• **Company Registration** (Pvt Ltd, LLP, OPC)\n• **GST & Tax Filing** (ITR, GST Registration)\n• **Trademark & FSSAI** (Brand safety, food license)\n\nOr simply choose one of the quick options below!`
    }

    let bestMatch = null
    let highestScore = 0

    for (const pair of qaPairs) {
      let score = 0
      
      // Look at keywords
      for (const kw of pair.keywords) {
        // Multi-word keyword phrase match
        if (kw.includes(' ')) {
          if (normalized.includes(kw)) {
            score += 6 // Higher weight for exact phrase match
          }
        } else {
          // Single word matches
          for (const word of userWords) {
            if (word === kw) {
              score += 4 // Exact word match
            } else if (word.startsWith(kw) || kw.startsWith(word)) {
              score += 2 // Partial/stem match
            }
          }
        }
      }

      if (score > highestScore) {
        highestScore = score
        bestMatch = pair
      }
    }

    // Threshold score of 2 to avoid false positives
    if (highestScore >= 2 && bestMatch) {
      return bestMatch.text
    }
    
    // Fallback response with search keyword suggestions
    return `ℹ️ **I'm here to help!**\n\nI couldn't find a direct answer to your specific query. Can you try asking with keywords like **Company Setup**, **GST**, **Trademark**, **FSSAI**, or **ITR**?\n\nAlternatively, you can request an expert callback below, and our legal advisor will call you directly to answer your questions!`
  }

  const handleSendCustomMessage = async (textToSend) => {
    if (!textToSend.trim()) return

    // Add user message
    const newMsg = {
      id: Date.now(),
      sender: 'user',
      type: 'text',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    
    const updatedMessages = [...messages, newMsg]
    setMessages(updatedMessages)
    setInputText('')
    
    setIsTyping(true)

    let botReply
    try {
      // Get the last 6 messages for context (excluding lead forms)
      const textHistory = updatedMessages
        .filter(m => m.type === 'text')
        .slice(-6)
        .map(m => ({ sender: m.sender, text: m.text }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend, history: textHistory })
      })

      if (res.ok) {
        const data = await res.json()
        if (data.isFallback || data.text === 'GEMINI_API_KEY_MISSING') {
          botReply = processResponse(textToSend)
        } else {
          botReply = data.text
        }
      } else {
        botReply = processResponse(textToSend)
      }
    } catch (err) {
      console.warn('Chat API failed, falling back to local engine:', err)
      botReply = processResponse(textToSend)
    }

    setIsTyping(false)

    const newBotMsgId = Date.now() + 1
    const newBotMsg = {
      id: newBotMsgId,
      sender: 'bot',
      type: 'text',
      text: botReply,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, newBotMsg])

    // Trigger inline lead form card if reply requests a callback
    const lowerReply = botReply.toLowerCase()
    if (
      lowerReply.includes('call-back') || 
      lowerReply.includes('callback') || 
      lowerReply.includes('expert to call') || 
      lowerReply.includes('advisor to call') || 
      lowerReply.includes('consultant call') ||
      lowerReply.includes('specialist to call') ||
      lowerReply.includes('team to call')
    ) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: 'lead-form-' + Date.now(),
          sender: 'bot',
          type: 'lead-form',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }])
      }, 300)
    }
  }

  const handleQuickOption = (optionTitle) => {
    handleSendCustomMessage(optionTitle)
  }

  const handleRequestCallback = () => {
    // Manually push lead form card to messages stream
    setMessages(prev => [...prev, {
      id: 'lead-form-' + Date.now(),
      sender: 'bot',
      type: 'lead-form',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }])
  }

  const handleLeadSubmit = async (e, formId) => {
    e.preventDefault()
    if (!leadName.trim() || !leadPhone.trim()) return

    setIsSubmitting(true)
    
    // Get last user message for context
    const userMsgs = messages.filter(m => m.sender === 'user')
    const lastUserMsg = userMsgs.length > 0 ? userMsgs[userMsgs.length - 1].text : 'General Inquiry'

    const formData = {
      name: leadName,
      phone: leadPhone,
      email: '',
      service: 'Other',
      message: `[Live Chat Callback Request]: ${lastUserMsg}`
    }

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch (err) {
      console.log('Live chat lead sync error:', err)
    }

    setIsSubmitting(false)
    setSubmittedMessageId(formId)
    
    // Append success message in thread
    setMessages(prev => [...prev, {
      id: Date.now() + 5,
      sender: 'bot',
      type: 'text',
      text: `Thanks, ${leadName}! I have registered your callback request. Opening WhatsApp to connect you with our legal advisor directly...`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }])

    // Open WhatsApp
    const phoneNumber = '917990187675'
    const whatsappMsg = `Hi Shivani Digital Hub! My name is ${leadName} and I have a query about ${lastUserMsg} (Phone: ${leadPhone})`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setLeadName('')
      setLeadPhone('')
    }, 1200)
  }

  return (
    <div className="fixed bottom-6 right-4 sm:right-7 z-[9999] font-sans">
      {/* Floating Chat Trigger Button - SOLID BLACK */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          aria-label="Open Chat"
          className="w-[54px] sm:w-[62px] h-[54px] sm:h-[62px] rounded-full bg-black text-white hover:bg-white hover:text-black flex items-center justify-center shadow-2xl hover:scale-105 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer relative border border-black group"
        >
          <i className="fas fa-comments text-2xl group-hover:rotate-12 transition-transform"></i>
          {hasNotification && (
            <span className="absolute -top-1.5 -right-1.5 bg-black text-white font-black text-[11px] w-6 h-6 rounded-full flex items-center justify-center animate-bounce shadow-lg border-2 border-white">
              1
            </span>
          )}
          {/* Subtle Outer Glow pulse */}
          <span className="absolute -inset-1.5 rounded-full border-2 border-black/45 animate-ping opacity-45 pointer-events-none -z-10"></span>
        </button>
      )}

      {/* Chat Window Box - MONOCHROME THEME */}
      {isOpen && (
        <div className="w-[330px] sm:w-[370px] h-[480px] sm:h-[530px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-300 flex flex-col overflow-hidden animate-fade-scale text-left">
          {/* Black & White Header */}
          <div className="bg-white p-4.5 text-black flex items-center justify-between border-b border-slate-200 shadow-sm relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative border border-black/10 overflow-hidden shrink-0">
                <img src="/favicon.png" alt="SLH Logo" className="w-full h-full object-contain p-1.5" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-3 border-white"></span>
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-[14.5px] m-0 text-black font-poppins leading-none flex items-center gap-1.5">
                  Shivani Digital Hub Legal Assistant
                </h4>
                <span className="text-[10px] text-slate-500 font-bold tracking-wider mt-1.5 block uppercase">Online Support • Response Time: Instant</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black/70 hover:text-black bg-transparent border-none cursor-pointer text-lg p-1.5 hover:scale-115 transition-transform"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white flex flex-col">
            {messages.map(m => {
              // Render callback inline form card - Grayscale styling
              if (m.type === 'lead-form') {
                const isFormSubmitted = submittedMessageId === m.id
                return (
                  <div key={m.id} className="bg-white border border-black rounded-2xl p-4.5 shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-left space-y-3.5 animate-fade-in self-start max-w-[85%] w-full">
                    <h5 className="font-extrabold text-[11px] text-black m-0 uppercase tracking-widest flex items-center gap-1.5">
                      <i className="fas fa-headset text-xs"></i> Request Expert Call
                    </h5>
                    {isFormSubmitted ? (
                      <p className="text-xs text-black font-semibold m-0 flex items-center gap-1.5">
                        <i className="fas fa-check-circle"></i> Callback Registered!
                      </p>
                    ) : (
                      <form onSubmit={(e) => handleLeadSubmit(e, m.id)} className="space-y-2.5">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={leadName}
                            onChange={e => setLeadName(e.target.value)}
                            required
                            className="w-full bg-white border border-black rounded-xl px-3.5 py-2 text-xs focus:ring-1 focus:ring-black focus:outline-none text-black placeholder-slate-400 font-medium transition-colors"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            value={leadPhone}
                            onChange={e => setLeadPhone(e.target.value)}
                            required
                            className="w-full bg-white border border-black rounded-xl px-3.5 py-2 text-xs focus:ring-1 focus:ring-black focus:outline-none text-black placeholder-slate-400 font-medium transition-colors"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-2.5 bg-black hover:bg-white hover:text-black border border-black text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-sm transition-all cursor-pointer disabled:opacity-75"
                        >
                          {isSubmitting ? 'Syncing...' : 'Request Call & Chat'}
                        </button>
                      </form>
                    )}
                  </div>
                )
              }

              // Render text message bubble
              return (
                <div
                  key={m.id}
                  className={`max-w-[80%] rounded-[1.25rem] p-4 text-xs leading-relaxed shadow-[0_2px_8px_rgba(0,0,0,0.01)] border ${
                    m.sender === 'bot'
                      ? 'bg-slate-100 text-black self-start text-left rounded-tl-none border-slate-200'
                      : 'bg-white text-black self-end text-left rounded-tr-none border-black border-2'
                  }`}
                >
                  <div className="space-y-1.5">{parseMessageText(m.text)}</div>
                  <span className={`text-[8.5px] block text-right mt-2 font-bold ${
                    m.sender === 'bot' ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    {m.time}
                  </span>
                </div>
              )
            })}

            {/* Typing Indicator - Grayscale */}
            {isTyping && (
              <div className="bg-slate-100 text-black self-start p-4 rounded-[1.25rem] rounded-tl-none border border-slate-200 shadow-sm flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2.5 h-2.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2.5 h-2.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Reply Chips Area - Grayscale theme */}
          <div className="px-4 py-2.5 bg-white border-t border-slate-200 flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto shrink-0">
            <button onClick={() => handleQuickOption('Company Registration')} className="px-3 py-1.5 bg-white border border-black rounded-full text-[10.5px] font-bold text-black hover:bg-black hover:text-white transition-all cursor-pointer">
              🏢 Company Registration
            </button>
            <button onClick={() => handleQuickOption('GST Registration')} className="px-3 py-1.5 bg-white border border-black rounded-full text-[10.5px] font-bold text-black hover:bg-black hover:text-white transition-all cursor-pointer">
              📝 GST Registration
            </button>
            <button onClick={() => handleQuickOption('Trademark Services')} className="px-3 py-1.5 bg-white border border-black rounded-full text-[10.5px] font-bold text-black hover:bg-black hover:text-white transition-all cursor-pointer">
              🛡️ Trademark
            </button>
            <button onClick={() => handleQuickOption('Food License')} className="px-3 py-1.5 bg-white border border-black rounded-full text-[10.5px] font-bold text-black hover:bg-black hover:text-white transition-all cursor-pointer">
              🍲 Food License
            </button>
            <button onClick={() => handleQuickOption('ITR Filing')} className="px-3 py-1.5 bg-white border border-black rounded-full text-[10.5px] font-bold text-black hover:bg-black hover:text-white transition-all cursor-pointer">
              💵 File ITR
            </button>
            <button onClick={() => handleQuickOption('Contact Details')} className="px-3 py-1.5 bg-white border border-black rounded-full text-[10.5px] font-bold text-black hover:bg-black hover:text-white transition-all cursor-pointer">
              📞 Contact Us
            </button>
            <button onClick={handleRequestCallback} className="px-3 py-1.5 bg-black border border-black rounded-full text-[10.5px] font-bold text-white hover:bg-white hover:text-black transition-all cursor-pointer">
              📞 Request Callback
            </button>
          </div>

          {/* Footer Input Form - Black Send Button */}
          <form onSubmit={(e) => { e.preventDefault(); handleSendCustomMessage(inputText); }} className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-white border border-black rounded-full px-4.5 py-3 text-xs text-black placeholder-slate-400 focus:outline-none focus:border-black focus:bg-white transition-all font-medium"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-full bg-black text-white hover:bg-white hover:text-black border border-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 shrink-0"
            >
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
