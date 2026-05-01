import { useState } from 'react'
import { submitRegistration } from '../services/api'
import Toast from '../components/Toast'
import './Register.css'

const initialForm = {
  studentName: '', parentName: '', phone: '', email: '',
  studentClass: '', board: '', course: '', batchTime: ''
}

const classes   = ['Class 8','Class 9','Class 10','Class 11','Class 12']
const boards    = ['CBSE','SSC (Maharashtra)','ICSE','Other']
const courseOpts = [
  'Class 8–10 School Tuition','Class 11–12 PCM','Class 11–12 PCB',
  'JEE Mains Prep','JEE Advanced (IIT)','NEET UG Prep','Maths Mastery'
]
const batches = [
  'Morning 6am–8am','Morning 8am–10am','Afternoon 12pm–2pm',
  'Evening 4pm–6pm','Evening 6pm–8pm','Weekend Batch'
]

const benefits = [
  { icon: '👥', title: 'Small Batches Only',      desc: 'Max 15 students — every student gets noticed and guided.' },
  { icon: '👩‍🏫', title: 'Expert Faculty',          desc: 'IIT/AIIMS graduates with 10+ years of teaching excellence.' },
  { icon: '📝', title: 'Weekly Tests',             desc: 'Structured tests with detailed performance analysis.' },
  { icon: '🎯', title: 'Personalized Mentoring',  desc: 'One-on-one sessions to tackle weak areas and build confidence.' },
  { icon: '📱', title: 'Parent Progress Updates',  desc: 'Weekly reports and direct teacher communication.' },
]

export default function Register() {
  const [form, setForm]       = useState(initialForm)
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast]     = useState({ visible: false, msg: '', type: 'success' })

  const change = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.studentName.trim()) e.studentName = 'Student name is required'
    if (!form.parentName.trim())  e.parentName  = 'Parent name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter valid 10-digit Indian phone number'
    if (!form.studentClass) e.studentClass = 'Please select class'
    if (!form.course)       e.course       = 'Please select a course'
    if (!form.batchTime)    e.batchTime    = 'Please select a batch time'
    return e
  }

  const submit = async () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    setLoading(true)
    try {
      const res = await submitRegistration(form)
      setToast({ visible: true, msg: res.message, type: 'success' })
      setForm(initialForm)
      setErrors({})
    } catch (err) {
      const msg = err.response?.data?.message || 'Submission failed. Please try again.'
      setToast({ visible: true, msg, type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const Field = ({ name, label, placeholder, type = 'text', required }) => (
    <div className={`form-group ${errors[name] ? 'error' : ''}`}>
      <label>{label}{required && ' *'}</label>
      <input name={name} type={type} placeholder={placeholder}
        value={form[name]} onChange={change} />
      {errors[name] && <div className="error-msg">{errors[name]}</div>}
    </div>
  )

  const Select = ({ name, label, options, placeholder, required }) => (
    <div className={`form-group ${errors[name] ? 'error' : ''}`}>
      <label>{label}{required && ' *'}</label>
      <select name={name} value={form[name]} onChange={change}>
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {errors[name] && <div className="error-msg">{errors[name]}</div>}
    </div>
  )

  return (
    <>
      <Toast message={toast.msg} type={toast.type} visible={toast.visible}
        onHide={() => setToast(t => ({ ...t, visible: false }))} />

      <div className="page-hero">
        <h1>📝 Student Registration</h1>
        <p>Join BrightMinds — Free demo class for every new registration!</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="reg-grid">

            {/* Form */}
            <div className="form-card card">
              <h2>Register Now</h2>
              <p className="form-subtitle">Fill in your details and we'll call you within 24 hours.</p>

              <div className="form-row">
                <Field name="studentName" label="Student Name" placeholder="Enter full name" required />
                <Field name="parentName"  label="Parent Name"  placeholder="Father / Mother name" required />
              </div>
              <div className="form-row">
                <Field name="phone" label="Phone Number" placeholder="10-digit mobile number" required />
                <Field name="email" label="Email Address" placeholder="email@example.com" type="email" />
              </div>
              <div className="form-row">
                <Select name="studentClass" label="Current Class" options={classes}  placeholder="Select Class"  required />
                <Select name="board"        label="School Board"  options={boards}   placeholder="Select Board" />
              </div>
              <Select name="course"    label="Course Interested In" options={courseOpts} placeholder="Select Course"    required />
              <Select name="batchTime" label="Preferred Batch Time" options={batches}    placeholder="Select Batch Slot" required />

              <button className="form-submit" onClick={submit} disabled={loading}>
                {loading ? '⏳ Submitting...' : '✨ Register Now — Get Free Demo Class'}
              </button>
            </div>

            {/* Benefits sidebar */}
            <div className="benefits-card">
              <h3>Why Register With Us?</h3>
              <p className="benefits-sub">Join over 2,500 successful students</p>

              {benefits.map(b => (
                <div className="benefit-item" key={b.title}>
                  <div className="benefit-icon">{b.icon}</div>
                  <div>
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}

              <div className="contact-info-box">
                <p>📞 Call us: <strong>+91 98765 43210</strong></p>
                <p>💬 WhatsApp: <strong>+91 98765 43210</strong></p>
                <p>⏰ Mon–Sat, 9am–7pm</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
