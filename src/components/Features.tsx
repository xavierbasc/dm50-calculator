import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Velocidad sin igual',
    description: 'Infraestructura distribuida globalmente que garantiza tiempos de respuesta inferiores a 50ms para cualquier usuario del planeta.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Seguridad de nivel empresarial',
    description: 'Cifrado de extremo a extremo, autenticación multifactor y auditorías de seguridad continuas que protegen tus datos 24/7.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Colaboración en tiempo real',
    description: 'Trabaja con tu equipo simultáneamente. Comentarios, revisiones y flujos de aprobación integrados en una sola plataforma.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Analíticas avanzadas',
    description: 'Dashboards interactivos con métricas en tiempo real. Toma decisiones basadas en datos con visualizaciones claras y accionables.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Automatización inteligente',
    description: 'Flujos de trabajo automatizados con IA que eliminan tareas repetitivas y liberan a tu equipo para hacer lo que importa.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'API sin límites',
    description: 'Integra Nexus con tus herramientas existentes a través de nuestra API REST y webhooks. Más de 200 integraciones nativas.',
  },
];

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="fade-in-up group p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 bg-white hover:shadow-lg hover:shadow-cyan-50 transition-all duration-300 cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
        {feature.icon}
      </div>
      <h3 className="text-slate-900 font-semibold text-lg mb-2">{feature.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function Features() {
  const headerRef = useScrollAnimation();

  return (
    <section id="características" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="fade-in-up text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-500 text-sm font-semibold uppercase tracking-widest">Características</span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Diseñado para equipos modernos que exigen rendimiento, seguridad y
            una experiencia de usuario excepcional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
