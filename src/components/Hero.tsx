import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.add('visible');
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-cyan-50 blur-3xl opacity-60" />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-slate-100 blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-cyan-100 blur-3xl opacity-30" />
      </div>

      <div
        ref={ref}
        className="fade-in-up relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-cyan-700 text-sm font-medium">Nuevo · Versión 2.0 disponible</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-none mb-6">
          Construye productos{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-cyan-500">increíbles</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10 C60 2, 120 2, 180 6 C240 10, 270 8, 298 4"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {' '}más rápido
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          La plataforma todo en uno que acelera tu flujo de trabajo, simplifica la colaboración
          y lleva tus ideas del concepto al mercado en tiempo récord.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-slate-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Empieza gratis
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ver demo
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex -space-x-2">
            {['bg-cyan-400', 'bg-slate-600', 'bg-emerald-400', 'bg-violet-400', 'bg-orange-400'].map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-semibold`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span><strong className="text-slate-900">+12,000</strong> equipos ya confían en Nexus</span>
        </div>
      </div>
    </section>
  );
}
