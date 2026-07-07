import PageShell from '../components/PageShell.jsx'
import { projects } from '../data/cv.js'

export default function Projects() {
  return (
    <PageShell>
      <p className="eyebrow">// CYBERSECURITY PROJECTS</p>
      <h1 className="h-serif" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)' }}>
        Projects
      </h1>

      {projects.map((p) => (
        <article className="tabcard" key={p.name}>
          <span className="tabcard__tab">{p.file}</span>
          <div className="tabcard__body">
            <h2 className="tabcard__title h-serif">{p.name}</h2>
            <ul className="bullets">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </PageShell>
  )
}
