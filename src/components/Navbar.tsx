import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-retro-bg/95 backdrop-blur-sm border-b border-retro-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 relative">
            <svg viewBox="0 0 14 14" className="w-full h-full" style={{ imageRendering: 'pixelated' }}>
              <rect width="14" height="14" fill="#0a0e17"/>
              <rect x="1" y="0" width="12" height="14" fill="#1a2744"/>
              <rect x="2" y="1" width="10" height="5" fill="#0d2137"/>
              <rect x="3" y="2" width="8" height="3" fill="#0a1628"/>
              <rect x="3" y="2" width="6" height="1" fill="#00d4aa"/>
              <rect x="3" y="4" width="4" height="1" fill="#00d4aa" opacity="0.5"/>
              <rect x="2" y="7" width="2" height="2" fill="#1e3a5f"/>
              <rect x="5" y="7" width="2" height="2" fill="#1e3a5f"/>
              <rect x="8" y="7" width="2" height="2" fill="#1e3a5f"/>
              <rect x="11" y="7" width="2" height="2" fill="#c8851a"/>
              <rect x="2" y="10" width="2" height="2" fill="#8b1a1a"/>
              <rect x="5" y="10" width="2" height="2" fill="#1e3a5f"/>
              <rect x="8" y="10" width="2" height="2" fill="#1e3a5f"/>
              <rect x="11" y="10" width="2" height="2" fill="#1e3a5f"/>
            </svg>
          </div>
          <span className="font-pixel text-xs text-green leading-none" style={{ textShadow: '0 0 8px #00d4aa' }}>
            DM50
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 text-xs font-medium font-mono-retro text-retro-muted tracking-wider uppercase">
          {[
            { href: '#features', label: 'Features' },
            { href: '#manual', label: 'Manual' },
            { href: '#screenshots', label: 'Screenshots' },
            { href: '#privacy', label: 'Privacy' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-green transition-colors duration-150">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 text-retro-muted hover:text-green transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-retro-surface border-t border-retro-border px-5 py-4 flex flex-col gap-3 font-mono-retro text-sm text-retro-muted">
          {[
            { href: '#features', label: 'Features' },
            { href: '#manual', label: 'Manual' },
            { href: '#screenshots', label: 'Screenshots' },
            { href: '#privacy', label: 'Privacy' },
          ].map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="hover:text-green transition-colors py-1">
              &gt; {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
