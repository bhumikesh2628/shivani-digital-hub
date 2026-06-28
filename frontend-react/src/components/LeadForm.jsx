import { useState, useEffect } from 'react'
import { validateContactForm } from '../utils/validation'
import { useLanguage } from '../context/LanguageContext'

const statesList = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 
  'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
]

const initForm = { name: '', email: '', phone: '', state: '' }

export default function LeadForm({ serviceName, title, buttonLabel, plans }) {
  const { t } = useLanguage()
  const [form, setForm] = useState(() => {
    const base = { name: '', email: '', phone: '', state: '' }
    if (plans && plans.length > 0) {
      base.plan = typeof plans[0] === 'string' ? plans[0] : plans[0].name
    }
    return base
  })
  const [msg, setMsg] = useState({ text: '', ok: false })
  const [loading, setLoading] = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  // Pre-fill parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlName = params.get('name') || ''
    const urlEmail = params.get('email') || ''
    const urlPhone = params.get('phone') || ''
    const urlState = params.get('state') || ''
    if (urlName || urlEmail || urlPhone || urlState) {
      setForm(prev => ({
        ...prev,
        name: urlName || prev.name,
        email: urlEmail || prev.email,
        phone: urlPhone || prev.phone,
        state: urlState || prev.state
      }))
    }
  }, [])

  const onSubmit = async e => {
    e.preventDefault()
    const errors = validateContactForm(form)
    if (errors.length > 0) {
      setMsg({ text: t(errors[0]), ok: false })
      return
    }
    setLoading(true)
    setMsg({ text: '', ok: false })
    
    const planSuffix = form.plan ? ` - ${form.plan}` : ''
    const logServiceName = `${serviceName}${planSuffix}`
    const planText = form.plan ? `\nPlan: ${form.plan}` : ''
    
    const phoneNumber = '917990187675'
    const message = `${serviceName} Inquiry:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nState: ${form.state}${planText}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setMsg({ text: t('✓ Opening WhatsApp to send your message...'), ok: true })
    
    // Reset form fields but keep selected plan if applicable
    setForm(() => {
      const base = { name: '', email: '', phone: '', state: '' }
      if (plans && plans.length > 0) {
        base.plan = typeof plans[0] === 'string' ? plans[0] : plans[0].name
      }
      return base
    })
    setLoading(false)
  }

  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-slate-100 w-full relative">
      <div className="text-center mb-4">
        <h3 className="font-poppins font-black text-lg sm:text-[20px] text-[#991b1b] mb-1.5">
          {title || t("Register Company Now")}
        </h3>
        <div className="w-12 h-0.5 bg-[#f0c040] mx-auto rounded-full mt-1.5"></div>
      </div>

      <form onSubmit={onSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="first_name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('First Name')}</label>
            <input 
              id="first_name" 
              name="name" 
              value={form.name.split(' ')[0] || ''} 
              onChange={e => {
                const val = e.target.value
                setForm(f => {
                  const parts = f.name.split(' ')
                  const last = parts.slice(1).join(' ')
                  return { ...f, name: last ? `${val} ${last}` : val }
                })
              }} 
              placeholder={t('First Name')} 
              required 
              className="w-full px-4 py-3 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Last Name')}</label>
            <input 
              id="last_name" 
              name="lastname" 
              value={form.lastname !== undefined ? form.lastname : (form.name.split(' ').slice(1).join(' ') || '')} 
              placeholder={t('Last Name')} 
              required 
              onChange={e => { 
                const val = e.target.value; 
                setForm(f => { 
                  const first = f.name.split(' ')[0] || ''; 
                  return { ...f, name: first ? `${first} ${val}` : val, lastname: val }; 
                }); 
              }} 
              className="w-full px-4 py-3 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
            />
          </div>
        </div>

        <div>
          <label htmlFor="mobile_number" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Mobile Number')}</label>
          <div className="flex gap-2">
            <div className="px-3 py-3 sm:px-2.5 sm:py-2 border border-slate-200 rounded-lg bg-slate-50 flex items-center gap-1 text-slate-500 text-sm font-semibold select-none">
              <span className="text-[10px] font-bold">IN</span> <span>+91</span>
            </div>
            <input 
              id="mobile_number" 
              name="phone" 
              value={form.phone} 
              onChange={onChange} 
              placeholder={t('Enter Phone')} 
              required 
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
            />
          </div>
        </div>

        <div>
          <label htmlFor="email_address" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Email Address')}</label>
          <input 
            id="email_address" 
            name="email" 
            type="email" 
            value={form.email} 
            onChange={onChange} 
            placeholder={t('Email Address')} 
            required 
            className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs sm:text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
          />
        </div>

        {plans && plans.length > 0 && (
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Select Plan')}</label>
            <select 
              name="plan" 
              value={form.plan} 
              onChange={onChange} 
              required 
              className="w-full px-4 py-3 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] transition-all font-medium"
            >
              {plans.map(p => {
                const name = typeof p === 'string' ? p : p.name
                return <option key={name} value={name}>{name}</option>
              })}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="state_select" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Select State')}</label>
          <select 
            id="state_select" 
            name="state" 
            value={form.state} 
            onChange={onChange} 
            required 
            className="w-full px-4 py-3 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] transition-all font-medium"
          >
            <option value="">{t("Choose State")}</option>
            {statesList.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="pt-1.5">
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-3 sm:py-2.5 rounded-lg bg-[#00509d] hover:bg-[#003f7a] text-white font-extrabold text-sm tracking-wide transition-all shadow-md active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? <><i className="fas fa-spinner fa-spin mr-2"></i> {t('Processing...')}</> : (buttonLabel || t('Get Started'))}
          </button>
        </div>

        {msg.text && (
          <p 
            className={`text-center font-bold text-[12.5px] mt-1.5 ${msg.ok && msg.text.includes('WhatsApp') ? 'hidden md:block' : ''}`} 
            style={{ color: msg.ok ? '#1a7a8a' : '#e53935' }}
          >
            {msg.text}
          </p>
        )}
      </form>
    </div>
  )
}
