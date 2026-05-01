import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/timetable', label: 'Timetable' },
  { to: '/notes', label: 'Notes' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="logo">
          <div className="logo-icon">🎓</div>
          <span className="logo-text">Bright<span>Minds</span></span>
        </NavLink>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => navigate('/register')}>
          Enroll Now
        </button>

        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/register" className="mobile-enroll" onClick={() => setOpen(false)}>
            ✨ Enroll Now
          </NavLink>
        </div>
      )}
    </nav>
  )
}
