import { useInView } from '../hooks/useInView'

const sections = [
  {
    icon: '🔒',
    title: 'No Data Collection',
    body: 'DM50 does not collect, transmit, or store any personal data. All calculations are performed entirely on your device. No user accounts, no analytics, no tracking.',
  },
  {
    icon: '📵',
    title: 'No Internet Required',
    body: 'The app works fully offline. No network requests are made during normal use. An internet connection is only needed for the initial App Store download.',
  },
  {
    icon: '💾',
    title: 'Local Storage Only',
    body: 'Any data saved by the app (high scores, settings) is stored locally in your device\'s sandbox using standard iOS file APIs. This data never leaves your device.',
  },
  {
    icon: '🍪',
    title: 'No Cookies or Trackers',
    body: 'The app does not use cookies, advertising identifiers (IDFA), or any third-party analytics SDKs. There is no advertising framework integrated.',
  },
  {
    icon: '👤',
    title: 'No Personal Information',
    body: 'DM50 does not request access to contacts, location, camera, microphone, or any sensitive device capabilities. The app only uses the screen and the keyboard.',
  },
  {
    icon: '🇪🇺',
    title: 'GDPR Compliance',
    body: 'Because no personal data is collected or processed, DM50 has no obligations under GDPR (EU 2016/679) as a data controller. There is no data to be subject to access, rectification, or erasure requests.',
  },
]

export default function Privacy() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section id="privacy" className="py-24 border-t border-retro-border">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="mb-12"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <div className="retro-badge inline-block mb-4">// PRIVACY & GDPR</div>
          <h2 className="font-pixel text-lg sm:text-xl leading-relaxed" style={{ color: '#d4e8f0' }}>
            Your privacy<br />
            <span style={{ color: '#00d4aa', textShadow: '0 0 8px #00d4aa' }}>is protected</span>
          </h2>
          <p className="font-mono-retro text-retro-muted text-sm mt-4 max-w-2xl leading-relaxed">
            &gt; DM50 is a fully offline, zero-telemetry application. We built it this way by design:
            a calculator has no business knowing anything about you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {sections.map((s, i) => {
            const { ref: cardRef, inView: cardIn } = useInView<HTMLDivElement>({ threshold: 0.1 })
            return (
              <div
                key={s.title}
                ref={cardRef}
                className="border border-retro-border bg-retro-card p-5"
                style={{
                  opacity: cardIn ? 1 : 0,
                  transform: cardIn ? 'none' : 'translateY(12px)',
                  transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`,
                }}
              >
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-pixel text-xs mb-2" style={{ color: '#00d4aa' }}>{s.title}</h3>
                <p className="font-mono-retro text-retro-muted text-xs leading-relaxed">{s.body}</p>
              </div>
            )
          })}
        </div>

        {/* Legal block */}
        <div className="border border-retro-border bg-retro-surface p-6">
          <div className="font-pixel text-xs mb-4" style={{ color: '#ffb800' }}>&gt; LEGAL NOTICE</div>
          <div className="font-mono-retro text-retro-muted text-xs leading-relaxed space-y-3">
            <p>
              <strong className="text-retro-text">Data Controller:</strong> DM50 does not act as a data controller within the meaning of Article 4(7) GDPR because it does not process personal data.
            </p>
            <p>
              <strong className="text-retro-text">Lawful Basis:</strong> Not applicable — no personal data is collected or processed.
            </p>
            <p>
              <strong className="text-retro-text">Data Retention:</strong> No user data is stored on external servers. Locally saved files (game scores, preferences) remain on your device and can be removed at any time by deleting the app.
            </p>
            <p>
              <strong className="text-retro-text">Third Parties:</strong> DM50 does not share data with any third parties. No advertising networks, analytics platforms, or cloud services are integrated.
            </p>
            <p>
              <strong className="text-retro-text">Your Rights:</strong> Under GDPR you have the right to access, rectify, and erase personal data held about you. Since DM50 holds no personal data, there is nothing to access, rectify, or erase.
            </p>
            <p>
              <strong className="text-retro-text">Contact:</strong> For any privacy-related questions, you may contact the developer through the App Store support link on the DM50 product page.
            </p>
            <p className="text-retro-muted/60 text-xs mt-4">
              This privacy policy was last updated: 2026. It applies to DM50 for iOS as distributed on the Apple App Store.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
