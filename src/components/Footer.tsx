export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                DM
              </span>
              <span className="font-semibold text-white text-lg">DM50</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              An HP-inspired scientific calculator simulator built with C, SDL2, and a love for
              precision.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Project</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/es/app/dm50/id6760961234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Download on App Store
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platforms</h4>
            <ul className="space-y-2 text-sm">
              {['macOS', 'Windows', 'Linux', 'iOS', 'Android', 'STM32'].map((p) => (
                <li key={p}>
                  <span className="hover:text-white transition-colors cursor-default">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {year} DM50. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
