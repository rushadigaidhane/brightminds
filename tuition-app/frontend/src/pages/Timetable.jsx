import { useState, useEffect } from 'react'
import { getTimetable } from '../services/api'
import './Timetable.css'

const chipClass = { math:'chip-math', sci:'chip-sci', eng:'chip-eng', jee:'chip-jee', neet:'chip-neet', empty:'chip-empty' }

const days = ['monday','tuesday','wednesday','thursday','friday','saturday']
const dayLabels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export default function Timetable() {
  const [slots, setSlots]   = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTimetable()
      .then(setSlots)
      .catch(() => setSlots([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div className="page-hero">
        <h1>📅 Weekly Timetable</h1>
        <p>Batch schedules for all courses — updated for current session</p>
      </div>

      <section className="section">
        <div className="container">
          {loading ? <div className="spinner" /> : (
            <>
              <div className="timetable-wrap">
                <table className="timetable">
                  <thead>
                    <tr>
                      <th>Time Slot</th>
                      {dayLabels.map(d => <th key={d}>{d}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {slots.map(slot => (
                      <tr key={slot.id}>
                        <td className="time-col">{slot.timeSlot}</td>
                        {days.map(day => {
                          const label = slot[day]
                          const type  = slot[`${day}Type`] || 'empty'
                          return (
                            <td key={day}>
                              <span className={`class-chip ${chipClass[type] || 'chip-empty'}`}>
                                {label}
                              </span>
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Legend */}
              <div className="legend">
                <span className="legend-label">Legend:</span>
                {[['chip-jee','JEE'],['chip-neet','NEET'],['chip-math','Mathematics'],['chip-sci','Science'],['chip-eng','Class 9']].map(([cls,lbl]) => (
                  <span key={lbl} className={`class-chip ${cls}`}>{lbl}</span>
                ))}
              </div>

              <div className="timetable-note">
                ⚠️ Timetable is subject to change. WhatsApp us for latest updates or to request a different batch.&nbsp;
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                  <strong>+91 98765 43210</strong>
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
