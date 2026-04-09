import { useInView } from '../hooks/useInView'

const APP_STORE_URL = 'https://apps.apple.com/es/app/dm50/id6760961234'

function PixelCalcIcon() {
  return (
    <svg
      viewBox="0 0 64 96"
      className="w-full h-full"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Body */}
      <rect x="4" y="2" width="56" height="92" fill="#162032"/>
      <rect x="6" y="4" width="52" height="88" fill="#131f2e"/>
      {/* Screen bezel */}
      <rect x="8" y="6" width="48" height="34" fill="#0a1628"/>
      {/* Screen */}
      <rect x="10" y="8" width="44" height="30" fill="#0a1628"/>
      <rect x="11" y="9" width="42" height="28" fill="#081420"/>
      {/* Screen content - formula */}
      <rect x="13" y="11" width="20" height="2" fill="#00d4aa" opacity="0.6"/>
      <rect x="13" y="14" width="38" height="3" fill="#00d4aa"/>
      <rect x="13" y="18" width="14" height="2" fill="#00d4aa" opacity="0.4"/>
      <rect x="13" y="21" width="30" height="4" fill="#00d4aa" opacity="0.9"/>
      <rect x="13" y="26" width="10" height="2" fill="#00d4aa" opacity="0.3"/>
      {/* Cursor blink */}
      <rect x="44" y="21" width="3" height="4" fill="#00d4aa" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0;0.8" dur="1.2s" repeatCount="indefinite"/>
      </rect>
      {/* Top function keys (6) */}
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={8 + i*9} y="43" width="7" height="5" fill="#1a3050" rx="0"/>
      ))}
      {/* F-key labels */}
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={9 + i*9} y="44" width="5" height="1" fill="#58a6ff" opacity="0.7"/>
      ))}
      {/* Row 1 */}
      <rect x="8" y="52" width="10" height="8" fill="#1e3a5f"/>
      <rect x="20" y="52" width="10" height="8" fill="#1e3a5f"/>
      <rect x="32" y="52" width="10" height="8" fill="#1e3a5f"/>
      <rect x="44" y="52" width="16" height="8" fill="#c8851a"/>
      {/* Row 2 */}
      <rect x="8" y="63" width="10" height="8" fill="#1e3a5f"/>
      <rect x="20" y="63" width="10" height="8" fill="#1e3a5f"/>
      <rect x="32" y="63" width="10" height="8" fill="#1e3a5f"/>
      <rect x="44" y="63" width="16" height="8" fill="#c8851a"/>
      {/* Row 3 */}
      <rect x="8" y="74" width="10" height="8" fill="#1e3a5f"/>
      <rect x="20" y="74" width="10" height="8" fill="#1e3a5f"/>
      <rect x="32" y="74" width="10" height="8" fill="#1e3a5f"/>
      <rect x="44" y="74" width="16" height="8" fill="#c8851a"/>
      {/* Row 4 (bottom) */}
      <rect x="8" y="85" width="10" height="8" fill="#8b1a1a"/>
      <rect x="20" y="85" width="10" height="8" fill="#8b1a1a"/>
      <rect x="32" y="85" width="22" height="8" fill="#1e3a5f"/>
      <rect x="56" y="85" width="4" height="8" fill="#1e3a5f"/>
      {/* Key highlights */}
      <rect x="8" y="52" width="10" height="1" fill="#ffffff" opacity="0.08"/>
      <rect x="20" y="52" width="10" height="1" fill="#ffffff" opacity="0.08"/>
      <rect x="32" y="52" width="10" height="1" fill="#ffffff" opacity="0.08"/>
      <rect x="44" y="52" width="16" height="1" fill="#ffffff" opacity="0.12"/>
    </svg>
  )
}

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      {/* CRT background */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,212,170,0.05) 0%, transparent 70%), #0a0e17',
        }}
      />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #1e3347 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left: text */}
        <div>
          {/* Badge */}
          <div className={`retro-badge inline-block mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            ★ NOW ON APP STORE ★
          </div>

          {/* Title */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="font-pixel text-2xl sm:text-3xl leading-relaxed mb-2" style={{ color: '#d4e8f0' }}>
              <span className="block">DM50</span>
              <span className="block text-green lcd-glow text-xl sm:text-2xl mt-1">CALCULATOR</span>
            </h1>
          </div>

          <p className={`font-mono-retro text-retro-muted text-sm sm:text-base leading-relaxed mt-6 mb-8 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            &gt; HP-inspired scientific calculator for iOS.<br/>
            &gt; Authentic 132×64 monochrome LCD display.<br/>
            &gt; RPN stack, CAS algebra, matrices, vectors.<br/>
            &gt; No internet. No subscription. Just math.
          </p>

          {/* Stats row */}
          <div className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {[
              { val: '10+', label: 'Calc modes' },
              { val: '132×64', label: 'LCD pixels' },
              { val: '∞', label: 'Precision' },
            ].map(({ val, label }) => (
              <div key={label} className="border border-retro-border bg-retro-card p-3 text-center">
                <div className="font-pixel text-green text-sm lcd-glow">{val}</div>
                <div className="font-mono-retro text-retro-muted text-xs mt-1 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-3 flex-wrap transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              id="download"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green text-retro-bg font-pixel text-xs hover:bg-green-bright transition-colors duration-150 shadow-green-glow"
              style={{ clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple
            </a>
            <div
              className="flex items-center justify-center gap-2 px-6 py-3 border border-retro-border text-retro-muted font-pixel text-xs opacity-60 cursor-not-allowed"
              style={{ clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))' }}
              title="Coming soon on Google Play"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
              </svg>
              Android <span className="text-amber ml-1">[ soon ]</span>
            </div>
          </div>
        </div>

        {/* Right: calculator visual */}
        <div className={`flex justify-center transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative w-48 sm:w-56">
            {/* Glow behind calc */}
            <div className="absolute inset-0 blur-3xl bg-green/10 rounded-full scale-110"/>
            {/* Pixel border wrapper */}
            <div className="relative border-2 border-retro-border p-3 bg-retro-surface" style={{ boxShadow: '4px 4px 0 #1e3347, 8px 8px 0 #0a0e17' }}>
              <PixelCalcIcon />
            </div>
            {/* Decorative corner labels */}
            <div className="absolute -top-3 -right-3 font-pixel text-amber text-xs amber-glow">HP</div>
            <div className="absolute -bottom-3 -left-3 font-pixel text-retro-muted text-xs">©DM50</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-pixel text-retro-muted text-xs animate-bounce">
        ▼
      </div>
    </section>
  )
}
