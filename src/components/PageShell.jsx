import { Link, useLocation } from 'react-router-dom'
import TopNav, { ModeSwitch } from './TopNav.jsx'
import { windowTitles } from '../data/cv.js'

function Taskbar({ title }) {
  return (
    <footer className="taskbar">
      <Link to="/" className="taskbar__home">
        ⌂ HOME
      </Link>
      <span className="taskbar__window">
        <span className="taskbar__dot" />
        {title}
      </span>
      <ModeSwitch />
    </footer>
  )
}

// Retro window frame wrapping every inner page.
export default function PageShell({ children }) {
  const { pathname } = useLocation()
  const title = windowTitles[pathname] ?? 'window'
  return (
    <>
      <TopNav />
      <main className="page">
        <section className="window">
          <header className="window__bar">
            <span className="window__dots">
              <i />
              <i />
              <i />
            </span>
            <span className="window__title">{title}</span>
            <Link to="/" className="window__close" aria-label="Close window and return home">
              ✕
            </Link>
          </header>
          <div className="window__body">{children}</div>
        </section>
      </main>
      <Taskbar title={title} />
    </>
  )
}
