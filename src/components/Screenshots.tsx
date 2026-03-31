import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const BASE = import.meta.env.BASE_URL

const shots = [
  { file: 'dm50_01_menu.png',       label: 'Main Menu',         desc: 'Launch screen listing all calculation modes.' },
  { file: 'dm50_02_cas.png',        label: 'CAS Algebra',       desc: 'Symbolic algebra: equations, derivatives, simplification.' },
  { file: 'dm50_03_rpn.png',        label: 'RPN Stack',         desc: 'Classic Reverse Polish Notation with live 4-level stack.' },
  { file: 'dm50_04_matrices.png',   label: 'Matrices',          desc: 'Matrix editor with operations: det, inv, transpose, multiply.' },
  { file: 'dm50_05_conversion.png', label: 'Unit Conversion',   desc: 'Convert length, mass, temperature, energy and more.' },
  { file: 'dm50_06_ecuaciones.png', label: 'Equation Solver',   desc: 'Solve 2×2 and 3×3 linear systems with exact results.' },
  { file: 'dm50_07_imaginarios.png',label: 'Complex Numbers',   desc: 'Arithmetic in ℂ: rectangular and polar display.' },
  { file: 'dm50_08_vectores.png',   label: 'Vectors',           desc: 'Dot product, cross product, magnitude in 2D/3D.' },
  { file: 'dm50_09_dados.png',      label: 'Dice Game',         desc: 'Built-in dice game with hi-score persistence.' },
  { file: 'dm50_10_constantes.png', label: 'Constants',         desc: 'Physics & math constants library with one-tap insert.' },
]

export default function Screenshots() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section id="screenshots" className="py-24 border-t border-retro-border bg-retro-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="mb-12"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <div className="retro-badge inline-block mb-4">// SCREENSHOTS</div>
          <h2 className="font-pixel text-lg sm:text-xl text-retro-text leading-relaxed">
            See it in action<br />
            <span className="text-green lcd-glow">on your iPhone</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          {/* Phone mockup */}
          <div className="flex flex-col items-center gap-4">
            {/* Screen frame */}
            <div
              className="relative"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
              }}
            >
              {/* Outer phone shell */}
              <div className="relative border-4 border-retro-border bg-retro-bg"
                style={{
                  padding: '12px 8px',
                  boxShadow: '0 0 0 2px #1e3347, 4px 4px 0 #0a0e17, 0 0 40px rgba(0,212,170,0.1)',
                  width: '220px',
                }}>
                {/* Screen area with scanlines */}
                <div className="relative overflow-hidden bg-black" style={{ aspectRatio: '402/819' }}>
                  {shots.map((s, i) => (
                    <img
                      key={s.file}
                      src={`${BASE}screenshots/${s.file}`}
                      alt={s.label}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                      style={{ opacity: i === active ? 1 : 0 }}
                    />
                  ))}
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)',
                    }}
                  />
                  {/* Screen reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.04), transparent)' }}
                  />
                </div>
              </div>
              {/* Glow */}
              <div className="absolute inset-0 blur-2xl bg-green/5 -z-10"/>
            </div>

            {/* Caption */}
            <div className="text-center"
              style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease 0.4s' }}>
              <div className="font-pixel text-green text-xs mb-1">{shots[active].label}</div>
              <div className="font-mono-retro text-retro-muted text-xs max-w-xs">{shots[active].desc}</div>
            </div>

            {/* Prev/Next arrows */}
            <div className="flex items-center gap-4 mt-1">
              <button
                onClick={() => setActive(a => (a - 1 + shots.length) % shots.length)}
                className="font-pixel text-retro-muted hover:text-green text-xs px-3 py-1.5 border border-retro-border hover:border-green transition-colors"
              >
                ◀
              </button>
              <span className="font-pixel text-retro-muted text-xs">
                {String(active + 1).padStart(2, '0')}/{shots.length}
              </span>
              <button
                onClick={() => setActive(a => (a + 1) % shots.length)}
                className="font-pixel text-retro-muted hover:text-green text-xs px-3 py-1.5 border border-retro-border hover:border-green transition-colors"
              >
                ▶
              </button>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-5 md:grid-cols-2 gap-2 md:w-36">
            {shots.map((s, i) => (
              <button
                key={s.file}
                onClick={() => setActive(i)}
                className="relative overflow-hidden border-2 transition-all duration-150"
                style={{
                  borderColor: i === active ? '#00d4aa' : '#1e3347',
                  boxShadow: i === active ? '0 0 8px rgba(0,212,170,0.4)' : 'none',
                  aspectRatio: '402/819',
                }}
                title={s.label}
              >
                <img
                  src={`${BASE}screenshots/${s.file}`}
                  alt={s.label}
                  className="w-full h-full object-cover"
                />
                {i !== active && (
                  <div className="absolute inset-0 bg-retro-bg/50"/>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
