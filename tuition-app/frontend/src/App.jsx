import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import Home     from './pages/Home'
import Courses  from './pages/Courses'
import Register from './pages/Register'
import Timetable from './pages/Timetable'
import Notes    from './pages/Notes'
import About    from './pages/About'
import Contact  from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/courses"   element={<Courses />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/notes"     element={<Notes />} />
          <Route path="/about"     element={<About />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="*"          element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        className="wa-float"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  )
}
