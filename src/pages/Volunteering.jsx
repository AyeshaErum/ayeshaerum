import PageShell from '../components/PageShell.jsx'
import { volunteering } from '../data/cv.js'

export default function Volunteering() {
  return (
    <PageShell>
      <p className="eyebrow">// VOLUNTEER EXPERIENCE</p>
      <h1 className="h-serif" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)' }}>
        Volunteering
      </h1>

      <div style={{ marginTop: '0.75rem' }}>
        {volunteering.map((v) => (
          <div className="award" key={v.title}>
            <span className="award__medal">♥</span>
            <div>
              <h2 className="award__title h-serif">{v.title}</h2>
              <p className="prose prose--soft" style={{ margin: '0.2rem 0 0', fontSize: '0.72rem' }}>
                {v.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
