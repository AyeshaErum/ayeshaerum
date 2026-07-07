import { useEffect, useRef, useState } from 'react'
import PageShell from '../components/PageShell.jsx'
import { profile, skills, leadership, education } from '../data/cv.js'

function SkillsTerminal() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 250)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="terminal" ref={ref}>
      <div className="terminal__bar">
        <span>SYSINFO — SKILLS</span>
      </div>
      <div className="terminal__body">
        <div>
          <span className="prompt">ayesha@portfolio:~$</span> <span className="cmd">sysinfo --modules --verbose</span>
        </div>
        {skills.map((s) => (
          <div className="term-module" key={s.label}>
            <div className="term-module__head">
              <span className="term-module__name">{s.label}</span>
              <span className="term-module__file">[{s.module}] loaded OK</span>
            </div>
            <div className="term-meter">
              <span className="term-meter__track">
                <span className="term-meter__fill" style={{ width: visible ? `${s.level}%` : 0 }} />
              </span>
              <span className="term-meter__pct">{s.level}%</span>
            </div>
            <div className="term-module__items">{s.items.join(' · ')}</div>
          </div>
        ))}
        <div style={{ marginTop: '1rem' }}>
          <span className="prompt">ayesha@portfolio:~$</span> <span className="term-cursor" />
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <PageShell>
      <p className="eyebrow">// ID.CARD</p>
      <div className="id-card">
        <h1 className="id-card__name">{profile.name}</h1>
        <p className="id-card__sub">CYBERSEC · THREAT INTEL · AI SECURITY</p>
        <dl className="id-card__rows">
          <div className="id-card__row">
            <dt>gpa</dt>
            <dd>{education.gpa}</dd>
          </div>
          <div className="id-card__row">
            <dt>base</dt>
            <dd>Doha, QA</dd>
          </div>
          <div className="id-card__row">
            <dt>status</dt>
            <dd>
              <span className="online-dot" />
              seeking opportunities
            </dd>
          </div>
        </dl>
      </div>

      <hr className="rule" />

      <p className="prose">{profile.summary}</p>

      <hr className="rule" />

      <SkillsTerminal />

      <hr className="rule" />

      <p className="eyebrow">LEADERSHIP & ACTIVITIES</p>
      <h2 className="h-serif" style={{ fontSize: '1.05rem' }}>
        {leadership.role}
      </h2>
      <ul className="bullets">
        {leadership.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </PageShell>
  )
}
