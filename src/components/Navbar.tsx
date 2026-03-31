import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold text-sm select-none">
            DM
          </span>
          <span className="font-semibold text-slate-900 text-lg tracking-tight">DM50</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <li>
            <a href="#features" className="hover:text-slate-900 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-slate-900 transition-colors">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#download" className="hover:text-slate-900 transition-colors">
              Download
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/dm50-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#download"
            className="px-4 py-2 rounded-full bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-600 transition-colors shadow-sm"
          >
            Download Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-700">
          <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-slate-900">Features</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="hover:text-slate-900">Testimonials</a>
          <a href="#download" onClick={() => setMenuOpen(false)} className="hover:text-slate-900">Download</a>
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 rounded-full bg-cyan-500 text-white text-center font-semibold hover:bg-cyan-600 transition-colors"
          >
            Download Free
          </a>
        </div>
      )}
    </header>
  )
}
