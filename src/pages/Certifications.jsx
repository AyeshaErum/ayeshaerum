import PageShell from '../components/PageShell.jsx'
import { certifications, training } from '../data/cv.js'

export default function Certifications() {
  return (
    <PageShell>
      <p className="eyebrow">// CERTIFICATIONS & TRAINING</p>
      <h1 className="h-serif" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)' }}>
        Certifications
      </h1>

      <div style={{ marginTop: '0.5rem' }}>
        {certifications.map((c) => (
          <div className="cert" key={c.name}>
            <span className="cert__seal" aria-hidden="true">
              ✓
            </span>
            <p className="cert__name" style={{ flex: 1 }}>
              {c.name}
            </p>
            <span className="cert__issuer">{c.issuer.toUpperCase()}</span>
          </div>
        ))}
      </div>

      <hr className="rule" />

      <p className="eyebrow">ADDITIONAL TRAINING</p>
      <ul className="bullets">
        {training.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </PageShell>
  )
}
