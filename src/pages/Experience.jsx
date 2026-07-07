import PageShell from '../components/PageShell.jsx'
import { experience } from '../data/cv.js'

const initials = (org) =>
  org
    .split(/[\s–-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export default function Experience() {
  return (
    <PageShell>
      <p className="eyebrow">// PROFESSIONAL EXPERIENCE</p>
      <h1 className="h-serif" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)' }}>
        Job Experiences
      </h1>

      <div style={{ marginTop: '0.75rem' }}>
        {experience.map((job) => (
          <article className="job" key={job.role}>
            <div className="job__badge" aria-hidden="true">
              <span>{initials(job.org)}</span>
            </div>
            <div>
              <h2 className="job__role h-serif">{job.role}</h2>
              <p className="job__org">{job.org.toUpperCase()}</p>
              <span className="job__period">{job.period}</span>
              {job.note && <p className="job__note">{job.note}</p>}
              <ul className="bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
