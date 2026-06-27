export function validateContactForm(form) {
  const errors = []
  
  if (!form.name || !form.name.trim()) {
    errors.push('Name is required')
  }
  
  const phoneRegex = /^[+]?[0-9]{10,15}$/
  if (!form.phone || !form.phone.trim()) {
    errors.push('Phone is required')
  } else if (!phoneRegex.test(form.phone.replace(/\s/g, ''))) {
    errors.push('Please enter a valid phone number')
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email || !form.email.trim()) {
    errors.push('Email is required')
  } else if (!emailRegex.test(form.email)) {
    errors.push('Please enter a valid email address')
  }

  return errors
}
