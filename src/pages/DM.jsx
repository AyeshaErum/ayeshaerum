import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import { profile } from '../data/cv.js'

const ROWS = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
  ['space'],
]

const KEY_LABELS = { enter: 'ENTER', shift: 'SHIFT', backspace: '⌫', space: '' }

function Keyboard({ onKey, shift, downKeys }) {
  return (
    <div className="kbd" aria-hidden="true">
      {ROWS.map((row, i) => (
        <div className="kbd__row" key={i}>
          {row.map((k) => {
            const wide = k === 'enter' || k === 'shift' || k === 'backspace'
            const label = k in KEY_LABELS ? KEY_LABELS[k] : shift ? k.toUpperCase() : k
            const cls = [
              'kbd__key',
              wide && 'kbd__key--wide',
              k === 'space' && 'kbd__key--space',
              downKeys.has(k) && 'is-down',
              k === 'shift' && shift && 'is-latched',
            ]
              .filter(Boolean)
              .join(' ')
            return (
              <button key={k} type="button" tabIndex={-1} className={cls} onMouseDown={(e) => e.preventDefault()} onClick={() => onKey(k)}>
                {label}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}

function EmailForm({ onBack }) {
  const navigate = useNavigate()
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [activeField, setActiveField] = useState('subject')
  const [shift, setShift] = useState(false)
  const [downKeys, setDownKeys] = useState(new Set())
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const subjectRef = useRef(null)
  const messageRef = useRef(null)

  // Highlight on-screen keys when physical keys are pressed.
  useEffect(() => {
    const norm = (e) => {
      const k = e.key.toLowerCase()
      if (k === ' ' || k === 'spacebar') return 'space'
      if (ROWS.flat().includes(k)) return k
      return null
    }
    const down = (e) => {
      const k = norm(e)
      if (!k) return
      setDownKeys((s) => new Set(s).add(k))
    }
    const up = (e) => {
      const k = norm(e)
      if (!k) return
      setDownKeys((s) => {
        const next = new Set(s)
        next.delete(k)
        return next
      })
    }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  // Clicking on-screen keys types into the active field.
  const handleKey = useCallback(
    (k) => {
      const setVal = activeField === 'subject' ? setSubject : setMessage
      if (k === 'shift') {
        setShift((s) => !s)
        return
      }
      if (k === 'backspace') {
        setVal((v) => v.slice(0, -1))
        return
      }
      if (k === 'enter') {
        if (activeField === 'subject') {
          setActiveField('message')
          messageRef.current?.focus()
        } else {
          setMessage((v) => v + '\n')
        }
        return
      }
      if (k === 'space') {
        setVal((v) => v + ' ')
        return
      }
      setVal((v) => v + (shift ? k.toUpperCase() : k))
      if (shift) setShift(false)
    },
    [activeField, shift],
  )

  const send = (e) => {
    e.preventDefault()
    if (!subject.trim() || !message.trim()) {
      setStatus('error')
      return
    }
    // Open the visitor's own email app with subject and body pre-filled.
    // encodeURIComponent keeps line breaks, "&", "?" etc. intact in the link.
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    const a = document.createElement('a')
    a.href = href
    document.body.appendChild(a)
    a.click()
    a.remove()
    setStatus('sent')
    setTimeout(() => navigate('/'), 2500)
  }

  return (
    <>
      <form className="paper" onSubmit={send}>
        <div className="paper__head">
          <span>To:</span>
          <span>ayeshaerum2006@gmail.com</span>
        </div>
        <label htmlFor="dm-subject">SUBJECT</label>
        <input
          id="dm-subject"
          ref={subjectRef}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          onFocus={() => setActiveField('subject')}
          placeholder="a note for ayesha..."
          autoComplete="off"
        />
        <label htmlFor="dm-message">MESSAGE</label>
        <textarea
          id="dm-message"
          ref={messageRef}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setActiveField('message')}
          placeholder="your message ...."
        />
        <div className="paper__actions">
          <button type="button" className="btn btn--ghost" onClick={onBack}>
            BACK
          </button>
          <button type="submit" className="btn">
            SEND ⏎
          </button>
        </div>
        <p className="paper__note">SEND opens your email app — the message goes from your own account.</p>
      </form>

      {status === 'sent' && <p className="dm-status">OPENING YOUR EMAIL APP — HIT SEND THERE. RETURNING TO DESKTOP…</p>}
      {status === 'error' && (
        <p className="dm-status dm-status--error">SOMETHING WENT WRONG — CHECK BOTH FIELDS AND TRY AGAIN.</p>
      )}

      <Keyboard onKey={handleKey} shift={shift} downKeys={downKeys} />
    </>
  )
}

export default function DM() {
  const [mode, setMode] = useState(null)

  return (
    <PageShell>
      <p className="eyebrow">// DIRECT MESSAGE</p>
      <h1 className="h-serif" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)' }}>
        DM Ayesha
      </h1>

      {mode !== 'email' ? (
        <>
          <p className="prose prose--soft" style={{ marginTop: '0.5rem' }}>
            Pick a channel — typed on a typewriter or delivered by pigeon, both reach me.
          </p>
          <div className="dm-choice">
            <button className="dm-choice__btn" onClick={() => setMode('email')}>
              <strong>Email</strong>
              <small>Type a note on the retro typewriter. It lands straight in my inbox.</small>
            </button>
            <a className="dm-choice__btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              <strong>LinkedIn</strong>
              <small>Opens my LinkedIn profile in a new tab — message me there.</small>
            </a>
          </div>
        </>
      ) : (
        <div style={{ marginTop: '1.5rem' }}>
          <EmailForm onBack={() => setMode(null)} />
        </div>
      )}
    </PageShell>
  )
}
