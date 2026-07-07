import { Link } from 'react-router-dom'

// Pink folder with a lavender tab, matching the mockup folder style.
export function FolderGlyph() {
  return (
    <svg className="folder-icon" viewBox="0 0 64 52" aria-hidden="true">
      <rect x="10" y="2" width="20" height="10" rx="2" fill="var(--lavender)" stroke="var(--accent)" strokeWidth="2.5" />
      <rect x="4" y="8" width="56" height="40" rx="4" fill="var(--pink)" stroke="var(--accent)" strokeWidth="2.5" />
      <rect x="4" y="16" width="56" height="32" rx="4" fill="var(--pink-soft)" stroke="var(--accent)" strokeWidth="2.5" />
    </svg>
  )
}

export default function Folder({ label, to, style }) {
  return (
    <Link to={to} className="folder" style={style}>
      <FolderGlyph />
      <span className="folder__label">{label}</span>
    </Link>
  )
}
