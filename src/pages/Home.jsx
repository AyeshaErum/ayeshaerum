import TopNav from '../components/TopNav.jsx'
import Folder from '../components/FolderIcon.jsx'
import Typewriter from '../components/Typewriter.jsx'
import { folders, profile } from '../data/cv.js'

// Slightly irregular scatter — mirrors the reference mockup's layout.
const SCATTER = {
  '/about': { left: '13%', top: '16%' },
  '/education': { left: '19%', top: '38%' },
  '/experience': { left: '12%', top: '60%' },
  '/certifications': { left: '20%', top: '80%' },
  '/achievements': { left: '86%', top: '17%' },
  '/projects': { left: '80%', top: '39%' },
  '/volunteering': { left: '87%', top: '61%' },
  '/dm': { left: '81%', top: '81%' },
}

// Minimal line-art streetlamp; the avatar stands below the lamp head.
function Streetlamp() {
  return (
    <svg className="lamp" width="150" height="120" viewBox="0 0 150 120" fill="none" aria-hidden="true">
      {/* pole rises off the right edge of the scene */}
      <path d="M131 120 V 34 Q 131 10 106 10 L 88 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* lamp head with bulb tucked underneath */}
      <path d="M60 6 h30 l-5 14 h-20 z" fill="currentColor" />
      <circle cx="75" cy="26" r="6.5" fill="var(--lamp-light)" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <TopNav />
      <div className="desktop">
        <div className="desktop__hero">
          <Typewriter />
          <p className="hero-tagline">{profile.tagline.toUpperCase()}</p>
        </div>

        <div className="lamp-scene">
          <Streetlamp />
          <img className="avatar" src="/assets/avatar-withkeyboard.png" alt="Ayesha Erum's avatar holding a pink keyboard" />
        </div>

        {/* wide screens: scattered icons */}
        <div className="desktop__folders">
          {folders.map((f) => (
            <Folder
              key={f.path}
              to={f.path}
              label={f.label}
              style={{ ...SCATTER[f.path], transform: 'translateX(-50%)' }}
            />
          ))}
        </div>

        {/* small screens: tidy grid */}
        <div className="desktop__folders--grid">
          {folders.map((f) => (
            <Folder key={f.path} to={f.path} label={f.label} />
          ))}
        </div>
      </div>
    </>
  )
}
