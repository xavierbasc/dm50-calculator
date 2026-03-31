import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    quote: "I've been using HP calculators since university. DM50 nails the feel — RPN stack, key layout, even the LCD font. Best software calculator I've ever used.",
    author: 'Dr. Sarah K.',
    role: 'Electrical Engineer',
    initials: 'SK',
    color: '#00d4aa',
  },
  {
    quote: 'The CAS engine is genuinely impressive. I solve symbolic integrals on my phone during lectures. No internet required, no subscriptions, just works.',
    author: 'Marco B.',
    role: 'Mathematics PhD',
    initials: 'MB',
    color: '#ffb800',
  },
  {
    quote: 'Matrix inversion with 4×4 matrices in my pocket. The grid editor is intuitive and the results are instant. This replaced my TI-89 for fieldwork.',
    author: 'Prof. Akira T.',
    role: 'Embedded Systems',
    initials: 'AT',
    color: '#58a6ff',
  },
]

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  return (
    <div
      ref={ref}
      className="border border-retro-border bg-retro-card p-6"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        borderLeft: `3px solid ${t.color}`,
        boxShadow: `0 0 20px ${t.color}18`,
      }}
    >
      <div className="font-pixel text-xs mb-4 tracking-widest" style={{ color: '#ffb800', textShadow: '0 0 8px #ffb800' }}>
        ★★★★★
      </div>
      <blockquote className="font-mono-retro text-retro-muted text-xs leading-relaxed mb-5">
        "{t.quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 flex items-center justify-center font-pixel text-xs flex-shrink-0 border"
          style={{ color: t.color, borderColor: t.color + '60' }}
        >
          {t.initials}
        </div>
        <div>
          <div className="font-pixel text-xs" style={{ color: '#d4e8f0' }}>{t.author}</div>
          <div className="font-mono-retro text-retro-muted text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-24 border-t border-retro-border bg-retro-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="mb-12"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <div className="retro-badge inline-block mb-4">// USER REVIEWS</div>
          <h2 className="font-pixel text-lg sm:text-xl" style={{ color: '#d4e8f0', lineHeight: '2' }}>
            What engineers<br />
            <span style={{ color: '#00d4aa', textShadow: '0 0 8px #00d4aa, 0 0 20px #00d4aa' }}>are saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} t={t} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
