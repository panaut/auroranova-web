import { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#hero" className="nav-logo">
          <span className="gradient-text">Aurora Nova</span>
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#showcase">Showcase</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#tech">Tech</a></li>
        </ul>
        <a href="#cta" className="btn-primary nav-cta">Get Started</a>
      </div>
    </nav>
  )
}
