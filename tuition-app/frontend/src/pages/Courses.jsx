import { useState, useEffect } from 'react'
import { getCourses } from '../services/api'
import CourseCard from '../components/CourseCard'
import './Courses.css'

const filters = [
  { label: 'All Courses', value: '' },
  { label: 'School (8–12)', value: 'school' },
  { label: 'JEE', value: 'jee' },
  { label: 'NEET', value: 'neet' },
  { label: 'Mathematics', value: 'maths' },
]

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [active, setActive] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getCourses(active)
      .then(setCourses)
      .catch(() => setCourses([]))
      .finally(() => setLoading(false))
  }, [active])

  return (
    <>
      <div className="page-hero">
        <h1>📚 Our Courses</h1>
        <p>Find the perfect program for your academic goals</p>
      </div>

      <div className="filters-bar">
        <div className="filters-inner container">
          {filters.map(f => (
            <button
              key={f.value}
              className={`filter-btn ${active === f.value ? 'active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          {loading ? (
            <div className="spinner" />
          ) : courses.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No courses found</h3>
              <p>Try a different filter above</p>
            </div>
          ) : (
            <div className="courses-grid">
              {courses.map(c => <CourseCard key={c.id} course={c} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
