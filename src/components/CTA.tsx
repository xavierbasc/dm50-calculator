import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="fade-in-up relative rounded-3xl bg-slate-900 px-8 py-16 md:px-16 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-cyan-500 blur-3xl opacity-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-violet-500 blur-3xl opacity-10" />
          </div>

          <div className="relative z-10">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
              Empieza hoy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-3 mb-4">
              Listo para transformar tu equipo?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Únete a miles de equipos que ya usan Nexus. Sin tarjeta de crédito.
              Cancela cuando quieras.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-cyan-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-cyan-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
              >
                Comenzar gratis — 14 días
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-300 text-sm font-medium hover:text-white transition-colors duration-200"
              >
                Hablar con ventas →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
