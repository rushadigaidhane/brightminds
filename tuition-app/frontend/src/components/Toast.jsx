import { useEffect } from 'react'

export default function Toast({ message, type = 'success', visible, onHide }) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onHide, 3500)
      return () => clearTimeout(t)
    }
  }, [visible, onHide])

  return (
    <div className={`toast ${type === 'error' ? 'error' : ''} ${visible ? 'show' : ''}`}>
      {type === 'success' ? '✅' : '❌'} {message}
    </div>
  )
}
