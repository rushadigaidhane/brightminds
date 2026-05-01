import { useNavigate } from 'react-router-dom'
import './CourseCard.css'

const colorMap = { blue: 'badge-blue', green: 'badge-green', amber: 'badge-amber', rose: 'badge-rose' }

export default function CourseCard({ course }) {
  const navigate = useNavigate()

  return (
    <div className="course-card card">
      <div className="course-header">
        <span className={`badge ${colorMap[course.badgeColor] || 'badge-blue'}`}>
          {course.icon} {course.badge}
        </span>
        <h3>{course.name}</h3>
        <p>{course.description}</p>
      </div>

      <div className="course-meta">
        <span className="meta-chip">⏱ {course.duration}</span>
        <span className="meta-chip">📘 {course.subjects}</span>
        <span className="meta-chip">👥 Max {course.maxStudents}</span>
      </div>

      <div className="course-footer">
        <div className="course-fee">
          ₹{course.feePerMonth?.toLocaleString('en-IN')}
          <span>/month</span>
        </div>
        <button className="btn-sm" onClick={() => navigate('/register')}>
          Enroll Now
        </button>
      </div>
    </div>
  )
}
