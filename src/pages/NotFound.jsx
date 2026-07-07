import { Link } from 'react-router-dom'
import TopNav from '../components/TopNav.jsx'

export default function NotFound() {
  return (
    <>
      <TopNav />
      <div className="error-stack">
        {[10, 20].map((offset) => (
          <div key={offset} className="error-dialog error-dialog--ghost" style={{ transform: `translate(-${offset}px, -${offset}px)` }}>
            <div className="error-dialog__bar">
              <span>Error</span>
              <span>✕</span>
            </div>
            <div className="error-dialog__body" style={{ visibility: 'hidden' }}>
              placeholder
            </div>
          </div>
        ))}
        <div className="error-dialog error-dialog--main">
          <div className="error-dialog__bar">
            <span>Error 404</span>
            <span>✕</span>
          </div>
          <div className="error-dialog__body">
            <p style={{ margin: '0 0 1.2rem' }}>
              This folder doesn't exist.
              <br />
              You've got stuff to do.
            </p>
            <Link to="/" className="btn" style={{ textDecoration: 'none' }}>
              ok
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
