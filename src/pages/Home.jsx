import TopNav from '../components/TopNav.jsx'
import Folder from '../components/FolderIcon.jsx'
import Typewriter from '../components/Typewriter.jsx'
import GardenDoodle from '../components/GardenDoodle.jsx'
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

export default function Home() {
  return (
    <>
      <TopNav />
      <div className="desktop">
        <div className="desktop__hero">
          <Typewriter />
          <p className="hero-tagline">{profile.tagline.toUpperCase()}</p>
        </div>

        <div className="avatar-scene">
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

        <GardenDoodle />
      </div>
    </>
  )
}
