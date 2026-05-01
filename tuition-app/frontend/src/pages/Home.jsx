import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCourses, getTestimonials } from '../services/api'
import CourseCard from '../components/CourseCard'
import './Home.css'

const highlights = [
  { icon: '👩‍🏫', color: 'indigo', title: 'Experienced Faculty', desc: 'IIT/AIIMS graduates with 10+ years of teaching experience in their subjects.' },
  { icon: '📈', color: 'green', title: 'High Success Rate', desc: '98% of our students score above 85% in board exams. Results speak for themselves.' },
  { icon: '👥', color: 'amber', title: 'Small Batch Size', desc: 'Maximum 15 students per batch to ensure every student gets quality teacher time.' },
  { icon: '💡', color: 'rose', title: 'Personal Attention', desc: 'Regular doubt sessions, weekly tests, and one-on-one mentoring for every student.' },
]

export default function Home() {
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    getCourses().then(data => setCourses(data.slice(0, 6))).catch(() => {})
    getTestimonials().then(setTestimonials).catch(() => {})
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-content">
            <div className="hero-badge">🏆 Trusted by 2,500+ Students</div>
            <h1>Build Your Future with <span>Expert Coaching</span></h1>
            <p>Join top-rated tuition classes for school and competitive exams. Small batches, personalized attention, exceptional results.</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => navigate('/register')}>✨ Enroll Now</button>
              <button className="btn-outline" onClick={() => navigate('/courses')}>View Courses →</button>
            </div>
            <div className="hero-stats">
              {[['98%','Success Rate'],['2500+','Students'],['15+','Expert Faculty'],['12','Yrs Experience']].map(([n,l]) => (
                <div className="stat" key={l}>
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card fc-top">🏅 Top JEE Result 2024</div>
            <div className="hero-illustration">🎓</div>
            <div className="floating-card fc-bottom">🎓 NEET AIR 23 — 2024</div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-sub">We combine expert teaching with personalized attention to help every student reach their potential.</p>
          </div>
          <div className="highlights-grid">
            {highlights.map(h => (
              <div className="highlight-card card" key={h.title}>
                <div className={`hc-icon ${h.color}`}>{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="section courses-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Our Programs</div>
            <h2 className="section-title">Popular Courses</h2>
            <p className="section-sub">Comprehensive programs for school students and competitive exam aspirants.</p>
          </div>
          {courses.length === 0 ? (
            <div className="spinner" />
          ) : (
            <div className="courses-grid">
              {courses.map(c => <CourseCard key={c.id} course={c} />)}
            </div>
          )}
          <div className="view-all-wrap">
            <button className="btn-outline" onClick={() => navigate('/courses')}>View All Courses →</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Success Stories</div>
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-sub">Real experiences from students and parents who trusted BrightMinds.</p>
          </div>
          {testimonials.length === 0 ? <div className="spinner" /> : (
            <div className="testimonials-grid">
              {testimonials.map(t => (
                <div className="testimonial-card card" key={t.id}>
                  <div className="stars">{'★'.repeat(t.rating)}</div>
                  <p>"{t.review}"</p>
                  <div className="tc-author">
                    <div className="tc-avatar" style={{ background: t.avatarColor }}>{t.initials}</div>
                    <div>
                      <div className="tc-name">{t.name}</div>
                      <div className="tc-detail">{t.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Start Your Learning Journey Today</h2>
            <p>Join hundreds of students already excelling with BrightMinds expert coaching</p>
            <button className="btn-white" onClick={() => navigate('/register')}>
              ✨ Register Now — Free Demo Class
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
