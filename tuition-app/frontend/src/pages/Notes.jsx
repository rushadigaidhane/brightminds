import { useState } from 'react'
import './Notes.css'

const subjects = [
  {
    icon: '📐', color: '#4F46E5', bg: 'rgba(79,70,229,0.1)',
    title: 'Mathematics', level: 'Class 10 & 12',
    chapters: ['Ch 1 — Real Numbers','Ch 2 — Polynomials','Ch 3 — Linear Equations','Ch 4 — Quadratic Equations','Formula Sheet — Maths ⭐'],
  },
  {
    icon: '⚗️', color: '#16A34A', bg: 'rgba(34,197,94,0.1)',
    title: 'Chemistry', level: 'Class 11 & 12',
    chapters: ['Ch 1 — Basic Concepts','Ch 2 — Atomic Structure','Ch 3 — Chemical Bonding','Ch 4 — Thermodynamics','Reaction Chart — Organic ⭐'],
  },
  {
    icon: '⚡', color: '#D97706', bg: 'rgba(245,158,11,0.1)',
    title: 'Physics', level: 'Class 11 & 12',
    chapters: ['Ch 1 — Units & Measurement','Ch 2 — Motion (Kinematics)','Ch 3 — Laws of Motion','Ch 4 — Work & Energy','Formula Booklet — Physics ⭐'],
  },
  {
    icon: '🌿', color: '#16A34A', bg: 'rgba(34,197,94,0.12)',
    title: 'Biology', level: 'Class 11 & 12 + NEET',
    chapters: ['Ch 1 — Cell Biology','Ch 2 — Plant Kingdom','Ch 3 — Human Physiology','Ch 4 — Genetics & Evolution','NEET Biology Digest ⭐'],
  },
  {
    icon: '📊', color: '#E11D48', bg: 'rgba(244,63,94,0.1)',
    title: 'Science — Class 10', level: 'Board Exam Focus',
    chapters: ['Ch 1 — Chemical Reactions','Ch 2 — Acids & Bases','Ch 3 — Electricity','Ch 4 — Light (Optics)','Board PYQs 2019–2024 ⭐'],
  },
  {
    icon: '🏆', color: '#7C3AED', bg: 'rgba(168,85,247,0.1)',
    title: 'JEE / NEET PYQs', level: 'Previous Year Papers',
    chapters: ['JEE Mains 2024 Paper','JEE Advanced 2024 Paper','NEET 2024 Paper','JEE 5-Year Analysis','NEET Chapter Weightage ⭐'],
  },
]

export default function Notes() {
  const [clicked, setClicked] = useState({})

  const handleDownload = (subj, ch) => {
    const key = `${subj}-${ch}`
    setClicked(prev => ({ ...prev, [key]: true }))
    setTimeout(() => setClicked(prev => ({ ...prev, [key]: false })), 1500)
    // In production this would trigger a real download
    alert(`📥 Download started: ${ch}\n(Connect backend storage for real files)`)
  }

  return (
    <>
      <div className="page-hero">
        <h1>📖 Study Materials</h1>
        <p>Chapter-wise notes and resources — free for enrolled students</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="resources-grid">
            {subjects.map(s => (
              <div className="subject-card card" key={s.title}>
                <div className="subject-header">
                  <div className="subject-icon" style={{ background: s.bg, color: s.color }}>
                    {s.icon}
                  </div>
                  <div>
                    <h3>{s.title}</h3>
                    <p className="subject-level">{s.level}</p>
                  </div>
                </div>

                {s.chapters.map(ch => {
                  const key = `${s.title}-${ch}`
                  const isStar = ch.includes('⭐')
                  return (
                    <div className="chapter-item" key={ch}>
                      <span>{ch}</span>
                      <button
                        className={`download-btn ${isStar ? 'star' : ''}`}
                        onClick={() => handleDownload(s.title, ch)}
                      >
                        {clicked[key] ? '✅' : '⬇ PDF'}
                      </button>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          <div className="locked-notice">
            <h3>🔒 Some materials are exclusive to enrolled students</h3>
            <p>Register today to unlock all chapter notes, test papers, and video solutions.</p>
            <a href="/register" className="btn-primary">Get Full Access →</a>
          </div>
        </div>
      </section>
    </>
  )
}
