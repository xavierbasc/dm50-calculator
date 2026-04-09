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
            <div className="flex flex-col gap-3">
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
                Apple
              </a>
              <div
                className="inline-flex items-center gap-2 px-5 py-3 border border-retro-border text-retro-muted font-pixel text-xs opacity-60 cursor-not-allowed"
                style={{ clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                </svg>
                Android <span className="text-amber ml-1">[ soon ]</span>
              </div>
            </div>
            <p className="font-mono-retro text-retro-muted text-xs mt-3">iOS, iPadOS &amp; Android</p>
          </div>
        </div>

        {/* Pixel divider */}
        <div className="pixel-divider mb-6"/>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-retro text-xs text-retro-muted">
          <span>© {year} <a href="mailto:javier@bastronic.net" className="hover:text-green transition-colors">Javier Báscones</a> · DM50. All rights reserved.</span>
          <span className="font-pixel text-xs" style={{ color: '#1e3347' }}>
            ■ ■ ■ ■ ■
          </span>
          <a href="#privacy" className="hover:text-green transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
