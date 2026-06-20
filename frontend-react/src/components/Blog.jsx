import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Register Your Private Limited Company in India',
    excerpt: 'A complete guide to registering your private limited company, including documents required, process, and benefits.',
    date: 'May 15, 2024',
    category: 'Company Registration',
    image: 'https://www.legalhubindia.com/wp-content/uploads/2022/11/company-registration.webp',
    content: [
      "Registering a Private Limited Company is the most popular corporate legal entity choice in India. It is highly preferred by startups, venture capitalists, and commercial banks due to its independent juristic identity, credibility, and limited liability protection.",
      "To begin the registration process, you must obtain a Digital Signature Certificate (DSC) for all directors, apply for name approval through the RUN (Reserve Unique Name) service, and file the SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) incorporation form on the Ministry of Corporate Affairs (MCA) portal.",
      "Key documents required include identity proof (PAN card, Aadhaar card), address proof (passport, voter ID, bank statement), and registered office proof (rent agreement, utility bill, NOC from the owner). Incorporation typically takes 7-10 working days, after which you receive a Certificate of Incorporation (CoI), PAN, and TAN."
    ]
  },
  {
    id: 2,
    title: 'GST Registration: Everything You Need to Know',
    excerpt: 'Understand GST registration requirements, process, and compliance for your business in India.',
    date: 'May 10, 2024',
    category: 'GST Services',
    image: 'https://www.legalhubindia.com/wp-content/uploads/2022/11/gst-tax.webp',
    content: [
      "Goods and Services Tax (GST) is a unified tax structure that replaces multiple indirect taxes in India. GST registration is mandatory for businesses whose aggregate annual turnover exceeds ₹40 Lakhs (₹20 Lakhs for services and special category states).",
      "Getting registered under GST provides legal recognition as a supplier, enables seamless claiming of Input Tax Credit (ITC), and allows you to trade across state borders legally. To register, you need business registration documents, PAN, Aadhaar, bank details, and proof of address.",
      "Once registered, a unique 15-digit GST Identification Number (GSTIN) is allocated. Businesses are then required to file regular tax returns (typically GSTR-1 and GSTR-3B) monthly or quarterly depending on the scheme chosen."
    ]
  },
  {
    id: 3,
    title: 'Trademark Registration Process in India',
    excerpt: 'Learn how to protect your brand with trademark registration, including steps, timeline, and costs.',
    date: 'May 5, 2024',
    category: 'Trademark',
    image: 'https://www.legalhubindia.com/wp-content/uploads/2022/11/trademark-1.webp',
    content: [
      "A trademark is a valuable intellectual property asset consisting of a logo, wordmark, slogan, or brand name that uniquely distinguishes your products or services from competitors.",
      "The trademark registration process begins with a comprehensive trademark search in the IP India public database to ensure no similar marks exist. Next, the application (Form TM-A) is filed online. Immediately after filing, you can legally use the 'TM' symbol next to your brand.",
      "The registry examines the application and publishes it in the Trademark Journal. If no opposition is received within 4 months, the mark is registered, allowing the use of the registered registration symbol '®' for a period of 10 years."
    ]
  },
  {
    id: 4,
    title: 'FSSAI License Guide for Food Businesses',
    excerpt: 'Complete guide to obtaining FSSAI license for your food business, including types and application process.',
    date: 'April 28, 2024',
    category: 'FSSAI',
    image: 'https://www.legalhubindia.com/wp-content/uploads/2022/11/Fssai-1.webp',
    content: [
      "The Food Safety and Standards Authority of India (FSSAI) license is a mandatory compliance requirement for all food business operators (FBOs) in India, including manufacturers, traders, restaurants, and online aggregators.",
      "Depending on the scale of operation and annual turnover, there are three types of FSSAI registrations: Basic Registration (turnover below ₹12 Lakhs), State License (turnover between ₹12 Lakhs and ₹20 Crores), and Central License (turnover exceeding ₹20 Crores).",
      "Operating a food business without a valid FSSAI license is a punishable offense carrying severe financial penalties. The FSSAI registration ensures that consumers receive high-quality, hygiene-compliant food and builds brand trust."
    ]
  },
  {
    id: 5,
    title: 'Import Export Code (IEC) Registration',
    excerpt: 'Step-by-step guide to obtaining IEC registration for starting your import-export business.',
    date: 'April 20, 2024',
    category: 'IEC',
    image: 'https://www.legalhubindia.com/wp-content/uploads/2022/11/iec.webp',
    content: [
      "The Import Export Code (IEC) is a primary 10-digit registration code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce, which is mandatory for any business importing or exporting goods or services from India.",
      "The application process is fully digitalized. You can register online through the DGFT portal by uploading your PAN, bank details, and business proof. Once approved, the IEC is valid for the lifetime of the business and does not require renewals.",
      "Without an IEC, customs clearance cannot be obtained for import/export shipments, and bank remittances from international business transactions cannot be legally processed."
    ]
  },
  {
    id: 6,
    title: 'Income Tax Return Filing: A Complete Guide',
    excerpt: 'Everything you need to know about filing income tax returns in India, including deadlines and documents.',
    date: 'April 15, 2024',
    category: 'Income Tax',
    image: 'https://www.legalhubindia.com/wp-content/uploads/2022/11/rti-new.webp',
    content: [
      "Filing an Income Tax Return (ITR) is the process of declaring your annual income, expenses, and taxes paid to the Income Tax Department. It is mandatory for individuals, partnerships, and corporate bodies earning above taxable thresholds.",
      "Filing your ITR on time is vital for securing bank loan approvals, processing visa applications, claiming tax refunds, and carrying forward business losses to offset future tax liabilities.",
      "Depending on your source of income (salary, capital gains, business profits, professional fees), you must select the appropriate ITR form (ITR-1 through ITR-7). The standard filing deadline for non-audit individuals is July 31st of the assessment year."
    ]
  }
]

export default function Blog() {
  const [activePost, setActivePost] = useState(null)

  const handleReadMore = (e, post) => {
    e.preventDefault()
    setActivePost(post)
    document.body.style.overflow = 'hidden' // prevent body scroll
  }

  const handleCloseModal = () => {
    setActivePost(null)
    document.body.style.overflow = 'unset' // restore body scroll
  }

  const handleInquire = () => {
    handleCloseModal()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      })
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <section className="py-12 bg-white" id="blog">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0f4c5c] mb-4">Our Blog</h2>
          <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with the latest news, tips, and insights about business registration, legal compliance, and taxation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 flex flex-col h-full group">
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-[#f0c040] text-[#0f4c5c] text-xs font-bold uppercase px-3 py-1.5 rounded-full z-[1]">{post.category}</div>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <div className="text-sm text-gray-400 mb-3 font-medium">{post.date}</div>
                <h3 className="text-xl font-bold text-[#0f4c5c] mb-4 leading-[1.4]">{post.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                <button 
                  onClick={(e) => handleReadMore(e, post)} 
                  className="inline-flex items-center gap-2 text-[#1a7a8a] bg-transparent border-none outline-none font-bold text-sm uppercase tracking-wide no-underline transition-colors mt-auto hover:text-[#f0c040] cursor-pointer"
                >
                  Read More <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Overlay Modal */}
      {activePost && (
        <div className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative p-6 sm:p-8 animate-fade-in-up border border-slate-100 text-left">
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 border-none outline-none rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-base"></i>
            </button>

            {/* Category & Date */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#f0c040]/10 text-[#0f4c5c] border border-[#f0c040]/30 text-xs font-bold uppercase px-3 py-1 rounded-full">{activePost.category}</span>
              <span className="text-sm text-slate-400 font-medium">{activePost.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-6 font-poppins">{activePost.title}</h3>

            {/* Image */}
            <div className="w-full h-64 overflow-hidden rounded-xl bg-slate-100 mb-6">
              <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-slate-600 leading-relaxed font-medium mb-8">
              {activePost.content.map((p, idx) => (
                <p key={idx} className="text-[14.5px] sm:text-base">{p}</p>
              ))}
            </div>

            {/* Action Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6">
              <button 
                onClick={handleInquire}
                className="w-full sm:w-auto px-6 py-3 bg-slate-950 hover:bg-black text-white font-extrabold text-xs tracking-wider uppercase rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Inquire About This Service <i className="fas fa-arrow-right text-[10px] ml-1"></i>
              </button>
              <button 
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
