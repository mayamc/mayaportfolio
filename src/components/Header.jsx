import { useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="logo" href="#top">Maya Chakrapani</a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="primaryNav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav id="primaryNav" className={`primary-nav ${isOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
