import { useInView } from '../hooks/useInView'

const features = [
  {
    key: 'rpn',
    icon: '∑',
    color: '#00d4aa',
    title: 'RPN Stack',
    tag: 'CLASSIC',
    desc: 'Reverse Polish Notation with a 4-level live stack. Enter numbers then operators — no parentheses needed. The way real engineers compute.',
  },
  {
    key: 'cas',
    icon: '∫',
    color: '#ffb800',
    title: 'CAS Algebra',
    tag: 'SYMBOLIC',
    desc: 'Computer Algebra System powered by GMP/MPFR. Solve equations symbolically, factor polynomials, simplify expressions exactly.',
  },
  {
    key: 'mat',
    icon: '⊞',
    color: '#58a6ff',
    title: 'Matrices',
    tag: '4×4 MAX',
    desc: 'Full matrix editor for up to 4×4 matrices. Determinant, transpose, inverse, multiply. Results displayed in an interactive grid.',
  },
  {
    key: 'conv',
    icon: '⇄',
    color: '#ff4757',
    title: 'Unit Conversion',
    tag: 'SCIENCE',
    desc: 'Convert between length, mass, temperature, energy, pressure, speed and more. Categories organised by physical dimension.',
  },
  {
    key: 'eq',
    icon: '=',
    color: '#00d4aa',
    title: 'Equation Solver',
    tag: 'LINEAR',
    desc: 'Solve 2×2 and 3×3 systems of linear equations. Enter coefficients in a clean matrix form and get exact or decimal solutions.',
  },
  {
    key: 'cmplx',
    icon: 'i',
    color: '#ffb800',
    title: 'Complex Numbers',
    tag: 'ℂ FIELD',
    desc: 'Full arithmetic in the complex plane: add, subtract, multiply, divide. Displays both rectangular (a+bi) and polar form.',
  },
  {
    key: 'vec',
    icon: '→',
    color: '#58a6ff',
    title: 'Vectors',
    tag: '3D',
    desc: 'Vector arithmetic in 2D and 3D: dot product, cross product, magnitude, normalise. Ideal for physics and engineering problems.',
  },
  {
    key: 'const',
    icon: 'π',
    color: '#ff4757',
    title: 'Constants Library',
    tag: 'PHYSICS',
    desc: 'One-tap access to 20+ physical and mathematical constants: speed of light, Planck constant, Avogadro, π, e and many more.',
  },
  {
    key: 'lcd',
    icon: '▦',
    color: '#00d4aa',
    title: 'LCD Display',
    tag: 'PIXEL ART',
    desc: 'Authentic 132×64 monochrome LCD rendered at 3× for crisp detail. Every pixel replicates the feel of the original HP hardware.',
  },
]

function FeatureCard({ f, delay }: { f: typeof features[0]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  return (
    <div
      ref={ref}
      className="border border-retro-border bg-retro-card p-5 group hover:border-green transition-all duration-300"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border-color 0.2s`,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="font-pixel text-2xl leading-none" style={{ color: f.color, textShadow: `0 0 12px ${f.color}` }}>
          {f.icon}
        </span>
        <span className="font-pixel text-retro-muted text-xs border border-retro-border px-1.5 py-0.5">
          {f.tag}
        </span>
      </div>
      <h3 className="font-pixel text-sm text-retro-text mb-2" style={{ color: '#d4e8f0' }}>{f.title}</h3>
      <p className="font-mono-retro text-retro-muted text-xs leading-relaxed">{f.desc}</p>
    </div>
  )
}

export default function Features() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  return (
    <section id="features" className="py-24 border-t border-retro-border relative">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="retro-badge inline-block mb-4">// FEATURES</div>
          <h2 className="font-pixel text-lg sm:text-xl text-retro-text leading-relaxed">
            What's inside<br />
            <span className="text-green lcd-glow">the DM50?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.key} f={f} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
