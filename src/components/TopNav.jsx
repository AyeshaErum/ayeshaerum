import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../theme.jsx'
import { folders } from '../data/cv.js'

export function ModeSwitch() {
  const { theme, toggle } = useTheme()
  return (
    <button className="mode-switch" onClick={toggle} aria-label="Toggle light/dark mode">
      <span className="mode-switch__track">
        <span className="mode-switch__knob" />
      </span>
      {theme === 'light' ? 'LIGHT' : 'DARK'}
    </button>
  )
}

export default function TopNav() {
  return (
    <nav className="topnav">
      <Link to="/" className="topnav__name">
        AYESHA ERUM
      </Link>
      <div className="topnav__links">
        {folders.map((f) => (
          <NavLink key={f.path} to={f.path}>
            {f.label.toUpperCase()}
          </NavLink>
        ))}
      </div>
      <ModeSwitch />
    </nav>
  )
}
