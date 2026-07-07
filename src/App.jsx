import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './theme.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Education from './pages/Education.jsx'
import Experience from './pages/Experience.jsx'
import Achievements from './pages/Achievements.jsx'
import Projects from './pages/Projects.jsx'
import Certifications from './pages/Certifications.jsx'
import Volunteering from './pages/Volunteering.jsx'
import DM from './pages/DM.jsx'
import NotFound from './pages/NotFound.jsx'

// The desktop (Home) is always rendered. Inner pages open as an overlay on
// top of it, with the desktop blurred underneath — like a window opening on
// the same screen rather than a jump to a different page.
export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <ThemeProvider>
      <div className={`home-layer ${isHome ? '' : 'is-blurred'}`} aria-hidden={!isHome}>
        <Home />
      </div>
      {!isHome && (
        <Routes location={location} key={location.pathname}>
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/dm" element={<DM />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </ThemeProvider>
  )
}
