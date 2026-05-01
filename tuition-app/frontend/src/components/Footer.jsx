import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🎓</span>
              <span className="footer-logo-text">Bright<span>Minds</span></span>
            </div>
            <p>Empowering students since 2012 with quality coaching, personal attention, and proven results.</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">▶️</a>
              <a href="https://wa.me/919876543210" className="social-link">💬</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/timetable">Timetable</Link></li>
              <li><Link to="/notes">Study Notes</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Courses</h4>
            <ul>
              <li><Link to="/courses">Class 8–10</Link></li>
              <li><Link to="/courses">Class 11–12</Link></li>
              <li><Link to="/courses">JEE Mains</Link></li>
              <li><Link to="/courses">JEE Advanced</Link></li>
              <li><Link to="/courses">NEET UG</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-item">📍 123 Education Street,<br />Pune, MH 411001</div>
            <div className="footer-contact-item">📞 +91 98765 43210</div>
            <div className="footer-contact-item">✉️ hello@brightminds.in</div>
            <div className="footer-contact-item">⏰ Mon–Sat: 7am – 9pm</div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 BrightMinds Tuition. All rights reserved.</p>
          <p>Made with ❤️ for students</p>
        </div>
      </div>
    </footer>
  )
}
