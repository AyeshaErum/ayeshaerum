import { useEffect, useState } from 'react'
import PageShell from '../components/PageShell.jsx'
import { education } from '../data/cv.js'

export default function Education() {
  const [fill, setFill] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setFill(education.progress), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <PageShell>
      <p className="eyebrow">// EDUCATION</p>
      <h1 className="h-serif" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)' }}>
        {education.degree}
      </h1>
      <p className="prose prose--soft" style={{ marginTop: '0.4rem' }}>
        {education.university}
      </p>
      <p className="prose" style={{ marginTop: '0.2rem' }}>
        GPA: <strong>{education.gpa}</strong> &nbsp;|&nbsp; Expected: <strong>{education.expected}</strong>
      </p>

      <div className="progress" style={{ maxWidth: 460 }}>
        <div className="progress__track">
          <div className="progress__fill" style={{ width: `${fill}%` }} />
        </div>
        <div className="progress__meta">
          <span>UNTIL GRADUATION</span>
          <span>{education.progress}%</span>
        </div>
      </div>

      <hr className="rule" />

      <div>
        {education.honors.map((h) => (
          <span className="chip" key={h}>
            {h}
          </span>
        ))}
      </div>

      <hr className="rule" />

      <p className="eyebrow">COURSEWORK</p>
      <ul className="bullets">
        {education.coursework.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </PageShell>
  )
}
