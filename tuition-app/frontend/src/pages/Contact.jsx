import { useState } from 'react'
import Toast from '../components/Toast'
import './Contact.css'

const contactInfo = [
  { icon: '📍', title: 'Address',      text: '123 Education Street, Near MG Road,\nPune, Maharashtra 411001' },
  { icon: '📞', title: 'Phone',        text: '+91 98765 43210\n+91 87654 32109' },
  { icon: '✉️', title: 'Email',        text: 'hello@brightminds.in\nadmissions@brightminds.in' },
  { icon: '⏰', title: 'Office Hours', text: 'Mon – Sat: 7:00 AM – 9:00 PM\nSunday: Closed' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast]   = useState({ visible: false, msg: '', type: 'success' })

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setToast({ visible: true, msg: 'Please fill in Name and Phone.', type: 'error' })
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setToast({ visible: true, msg: '✅ Message sent! We\'ll reply within 2 hours.', type: 'success' })
      setForm({ name: '', phone: '', message: '' })
    }, 900)
  }

  return (
    <>
      <Toast message={toast.msg} type={toast.type} visible={toast.visible}
        onHide={() => setToast(t => ({ ...t, visible: false }))} />

      <div className="page-hero">
        <h1>📞 Get In Touch</h1>
        <p>We'd love to hear from you. Reach out any time!</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Form */}
            <div className="form-card card">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">We'll get back to you within 2 hours</p>

              <div className="form-group">
                <label>Your Name *</label>
                <input name="name" value={form.name} onChange={change} placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input name="phone" value={form.phone} onChange={change} placeholder="+91 00000 00000" />
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea name="message" value={form.message} onChange={change}
                  placeholder="How can we help you?" rows={4} />
              </div>
              <button className="form-submit" onClick={submit} disabled={loading}>
                {loading ? '⏳ Sending...' : 'Send Message →'}
              </button>
            </div>

            {/* Info */}
            <div className="contact-right">
              <div className="map-box">
                <span className="map-pin">📍</span>
                <p><strong>BrightMinds Tuition</strong></p>
                <p>123 Education Street, Pune, MH 411001</p>
                <p className="map-note">
                  <a href="https://maps.google.com/?q=Pune+Maharashtra" target="_blank" rel="noreferrer">
                    Open in Google Maps →
                  </a>
                </p>
              </div>

              <div className="contact-info-list">
                {contactInfo.map(c => (
                  <div key={c.title} className="ci-item">
                    <div className="ci-icon">{c.icon}</div>
                    <div>
                      <h4>{c.title}</h4>
                      <p style={{ whiteSpace: 'pre-line' }}>{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/919876543210" className="whatsapp-btn" target="_blank" rel="noreferrer">
                💬 Chat on WhatsApp Now
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
