import PageShell from '../components/PageShell.jsx'
import SkillTree from '../components/SkillTree.jsx'
import { profile, education } from '../data/cv.js'

export default function About() {
  return (
    <PageShell>
      <p className="eyebrow">// ID.CARD</p>
      <div className="id-card">
        <div className="id-card__head">
          <div>
            <h1 className="id-card__name">{profile.name}</h1>
            <p className="id-card__sub">CYBERSEC · THREAT INTEL · AI SECURITY</p>
          </div>
          {/* ID photo: the avatar's face, zoomed via CSS from avatar-standing.png */}
          <div
            className="id-card__photo"
            role="img"
            aria-label="Ayesha's avatar ID photo"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/avatar-standing.png)` }}
          />
        </div>
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

      <div className="contact-strip">
        <a href={`mailto:${profile.email}`}>
          <strong>EMAIL</strong> {profile.email}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <strong>LINKEDIN</strong> /in/ayeshaerum
        </a>
      </div>

      <hr className="rule" />

      <p className="prose">{profile.summary}</p>

      <hr className="rule" />

      <p className="eyebrow">SKILL TREE</p>
      <SkillTree />
    </PageShell>
  )
}
