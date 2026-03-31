const APP_STORE_URL = 'https://apps.apple.com/es/app/dm50/id6760961234'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-retro-border bg-retro-surface py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 14 14" className="w-7 h-7" style={{ imageRendering: 'pixelated' }}>
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
              <span className="font-pixel text-xs text-green" style={{ textShadow: '0 0 8px #00d4aa' }}>DM50</span>
            </div>
            <p className="font-mono-retro text-retro-muted text-xs leading-relaxed max-w-xs">
              HP-inspired scientific calculator for iOS. Authentic 132×64 LCD, RPN, CAS and much more.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="font-pixel text-xs text-retro-muted mb-4 uppercase tracking-wider">&gt; Navigate</div>
            <ul className="space-y-2 font-mono-retro text-xs text-retro-muted">
              {[
                { href: '#features', label: 'Features' },
                { href: '#manual', label: 'User Manual' },
                { href: '#screenshots', label: 'Screenshots' },
                { href: '#privacy', label: 'Privacy & GDPR' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="hover:text-green transition-colors">&gt; {label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <div className="font-pixel text-xs text-retro-muted mb-4 uppercase tracking-wider">&gt; Get the App</div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-green text-retro-bg font-pixel text-xs hover:bg-green-bright transition-colors shadow-green-glow"
              style={{ clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <p className="font-mono-retro text-retro-muted text-xs mt-3">Available for iOS &amp; iPadOS</p>
          </div>
        </div>

        {/* Pixel divider */}
        <div className="pixel-divider mb-6"/>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-retro text-xs text-retro-muted">
          <span>© {year} DM50. All rights reserved.</span>
          <span className="font-pixel text-xs" style={{ color: '#1e3347' }}>
            ■ ■ ■ ■ ■
          </span>
          <a href="#privacy" className="hover:text-green transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
