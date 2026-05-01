import './About.css'

const faculty = [
  { initials:'RS', name:'Dr. Rakesh Sharma', subject:'Mathematics & Founder', exp:'IIT Bombay • 15 yrs', bg:'linear-gradient(135deg,#4F46E5,#818CF8)' },
  { initials:'PD', name:'Prof. Priya Desai',  subject:'Physics & JEE Expert', exp:'IIT Delhi • 12 yrs',   bg:'linear-gradient(135deg,#22C55E,#86EFAC)' },
  { initials:'AK', name:'Dr. Arjun Kumar',   subject:'Chemistry & NEET',      exp:'AIIMS Delhi • 10 yrs', bg:'linear-gradient(135deg,#F59E0B,#FDE68A)', color:'#92400E' },
  { initials:'SM', name:'Ms. Sneha More',    subject:'Biology & NEET',         exp:'AIIMS Pune • 8 yrs',  bg:'linear-gradient(135deg,#E11D48,#FB7185)' },
]

const achievements = [
  { num:'2,500+', label:'Students Coached',    bg:'linear-gradient(135deg,#4F46E5,#3730A3)' },
  { num:'98%',   label:'Board Success Rate',   bg:'linear-gradient(135deg,#22C55E,#16A34A)' },
  { num:'145',   label:'JEE Selections',       bg:'linear-gradient(135deg,#F59E0B,#D97706)' },
  { num:'89',    label:'NEET Selections',      bg:'linear-gradient(135deg,#E11D48,#BE123C)' },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <h1>👨‍🏫 About BrightMinds</h1>
        <p>12 years of academic excellence, 2,500+ success stories</p>
      </div>

      <section className="section">
        <div className="container">

          {/* Intro */}
          <div className="about-intro">
            <div className="about-img-wrap">
              <div className="about-img-box">
                <div className="about-illustration">🎓</div>
              </div>
              <div className="about-badge">
                <div className="ab-num">2012</div>
                <div className="ab-lbl">Established</div>
              </div>
            </div>

            <div className="about-text">
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Empowering Students Since 2012</h2>
              <p>BrightMinds Tuition was founded by Dr. Rakesh Sharma, an IIT Bombay graduate, with a single mission: to make quality education accessible and results-driven for every student.</p>
              <p>Starting with just 8 students in a single room, we've grown into one of Pune's most trusted tuition institutes — helping students crack JEE, NEET, and board exams with consistent excellence.</p>
              <div className="mv-cards">
                <div className="mv-card card">
                  <h4>🎯 Our Mission</h4>
                  <p>To unlock every student's academic potential through personalized, expert coaching.</p>
                </div>
                <div className="mv-card card">
                  <h4>🌟 Our Vision</h4>
                  <p>To be the most trusted tuition center in Maharashtra by 2030.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="section-header center" style={{ marginTop: 64 }}>
            <div className="section-label">Our Track Record</div>
            <h2 className="section-title">Numbers That Speak</h2>
          </div>
          <div className="achievements-grid">
            {achievements.map(a => (
              <div key={a.label} className="achievement-card" style={{ background: a.bg }}>
                <div className="ach-num">{a.num}</div>
                <div className="ach-label">{a.label}</div>
              </div>
            ))}
          </div>

          {/* Faculty */}
          <div className="section-header center" style={{ marginTop: 72 }}>
            <div className="section-label">Meet the Team</div>
            <h2 className="section-title">Our Expert Faculty</h2>
            <p className="section-sub">Learn from the best — IIT and AIIMS graduates passionate about teaching.</p>
          </div>
          <div className="faculty-grid">
            {faculty.map(f => (
              <div key={f.name} className="faculty-card card">
                <div className="faculty-avatar" style={{ background: f.bg, color: f.color || '#fff' }}>
                  {f.initials}
                </div>
                <h3>{f.name}</h3>
                <div className="faculty-subject">{f.subject}</div>
                <div className="faculty-exp">{f.exp}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
