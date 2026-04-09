import { useState, useEffect } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/es/app/dm50/id6760961234'

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
        <ul className="hidden md:flex items-center gap-7 text-xs font-medium font-mono-retro text-retro-muted tracking-wider uppercase">
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

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-pixel bg-green text-retro-bg hover:bg-green-bright transition-colors duration-150"
            style={{ clipPath: 'polygon(0 0,calc(100% - 4px) 0,100% 4px,100% 100%,4px 100%,0 calc(100% - 4px))' }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Apple
          </a>
          <div
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-pixel border border-retro-border text-retro-muted opacity-50 cursor-not-allowed"
            style={{ clipPath: 'polygon(0 0,calc(100% - 4px) 0,100% 4px,100% 100%,4px 100%,0 calc(100% - 4px))' }}
            title="Coming soon on Google Play"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.32.07 2.24.82 3.01.82.78 0 2.26-.96 3.8-.82 1.36.12 2.55.71 3.32 1.9-3.1 1.84-2.6 5.9.51 7.08-.61 1.55-1.41 3.06-2.64 3.9zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Android
          </div>
        </div>

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
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-2 px-4 py-2.5 bg-green text-retro-bg font-pixel text-xs"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Apple
          </a>
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 border border-retro-border text-retro-muted font-pixel text-xs opacity-50 cursor-not-allowed">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.32.07 2.24.82 3.01.82.78 0 2.26-.96 3.8-.82 1.36.12 2.55.71 3.32 1.9-3.1 1.84-2.6 5.9.51 7.08-.61 1.55-1.41 3.06-2.64 3.9zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Android <span className="text-amber ml-1">[ soon ]</span>
          </div>
        </div>
      )}
    </header>
  )
}
