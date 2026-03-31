import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Elena Martínez',
    role: 'CTO',
    company: 'Fintech Solutions',
    avatar: 'EM',
    quote:
      'Nexus transformó completamente nuestra forma de trabajar. Redujimos el tiempo de entrega de features en un 60% y nuestro equipo está más alineado que nunca. Es la herramienta que estábamos esperando.',
    rating: 5,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Product Manager',
    company: 'ScaleUp Labs',
    avatar: 'CR',
    quote:
      'La automatización inteligente es un cambio de juego. Antes dedicábamos horas a tareas repetitivas; ahora ese tiempo lo invertimos en innovar. El ROI fue evidente desde el primer mes.',
    rating: 5,
  },
  {
    name: 'Ana López',
    role: 'Head of Engineering',
    company: 'Startup Studio',
    avatar: 'AL',
    quote:
      'Las analíticas en tiempo real nos dan visibilidad total del producto. Tomamos decisiones más rápidas y con mayor confianza. Nunca habíamos tenido este nivel de claridad sobre nuestros datos.',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="fade-in-up text-center" style={{ transitionDelay: `${delay}ms` }}>
      <p className="text-3xl font-bold text-slate-900 tracking-tight">{value}</p>
      <p className="text-slate-500 text-sm mt-1">{label}</p>
    </div>
  );
}

function TestimonialCard({ t, delay }: { t: Testimonial; delay: number }) {
  const ref = useScrollAnimation();
  const colors = ['bg-cyan-500', 'bg-violet-500', 'bg-emerald-500'];
  const color = colors[testimonials.indexOf(t) % colors.length];

  return (
    <div
      ref={ref}
      className="fade-in-up bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col gap-6"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <StarRating count={t.rating} />
      <p className="text-slate-700 text-base leading-relaxed flex-1">"{t.quote}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
        <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}>
          {t.avatar}
        </div>
        <div>
          <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
          <p className="text-slate-500 text-xs">{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useScrollAnimation();

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="fade-in-up text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-500 text-sm font-semibold uppercase tracking-widest">Testimonios</span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Miles de equipos ya confían en Nexus para construir sus productos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 100} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-100">
          {[
            { value: '12K+', label: 'Equipos activos' },
            { value: '99.9%', label: 'Tiempo de actividad' },
            { value: '60%', label: 'Más rápido en lanzar' },
            { value: '4.9/5', label: 'Valoración media' },
          ].map(({ value, label }, i) => (
            <StatItem key={label} value={value} label={label} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
