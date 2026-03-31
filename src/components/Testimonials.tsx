import { useInView } from '../hooks/useInView'

interface Testimonial {
  quote: string
  author: string
  role: string
  initials: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I've been using HP calculators since university. DM50 nails the feel — RPN stack, key layout, even the LCD font. It's the best software calculator I've ever used.",
    author: 'Dr. Sarah Kim',
    role: 'Electrical Engineer, Stanford',
    initials: 'SK',
    color: 'bg-violet-100 text-violet-700',
  },
  {
    quote:
      'The CAS engine is genuinely impressive. I can solve symbolic integrals and factorise polynomials on my phone. No internet required, no subscriptions.',
    author: 'Marco Bellini',
    role: 'Mathematics PhD, ETH Zürich',
    initials: 'MB',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    quote:
      "We flashed DM50 onto our STM32 eval board in an afternoon. Absolute magic. Our students get a real-hardware calculator experience without the cost.",
    author: 'Prof. Akira Tanaka',
    role: 'Embedded Systems Lecturer, Tokyo Tech',
    initials: 'AT',
    color: 'bg-amber-100 text-amber-700',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5 text-amber-400 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay }: { t: Testimonial; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <StarRating />
      <blockquote className="text-slate-700 text-base leading-relaxed mb-6">"{t.quote}"</blockquote>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${t.color}`}>
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm">{t.author}</p>
          <p className="text-slate-500 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-cyan-600 text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Trusted by engineers & academics.
          </h2>
          <p className="text-slate-500 text-lg">
            From university labs to embedded prototypes — hear what real users say about DM50.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} t={t} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
