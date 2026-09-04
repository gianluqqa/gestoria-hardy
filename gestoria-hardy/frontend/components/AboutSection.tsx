import { UserCheck, MapPin, Award, ShieldCheck, Check } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Personal Avatar / Badge Box */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#16233B] to-[#0F172A] border-4 border-[#E2BD68] flex items-center justify-center text-[#E2BD68] font-extrabold text-5xl sm:text-6xl shadow-xl">
                  GC
                </div>
                <div className="absolute -bottom-2 right-2 bg-[#E2BD68] text-[#16233B] p-2 rounded-full shadow-lg border border-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-[#16233B]">
                Gian Luca Caravone
              </h3>
              <p className="text-sm font-bold text-[#D4AF37] uppercase tracking-wide mt-1">
                Mandatario del Automotor
              </p>
              
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 bg-slate-100 px-3 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#16233B]" />
                <span>Rosario, Santa Fe, Argentina</span>
              </div>
            </div>

            {/* Right Professional Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16233B]/5 text-[#16233B] text-xs font-bold uppercase tracking-wider">
                Sobre Mi Trayectoria
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16233B] tracking-tight">
                Compromiso, Transparencia y Atención Directa
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Como Mandatario del Automotor radicado en la ciudad de Rosario, mi objetivo principal es brindarle a particulares, agencias y empresas un servicio registral libre de estrés y con absoluta seguridad jurídica.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Entiendo lo valioso que es tu tiempo. Por eso, me encargo personalmente del análisis previo de legajos, la confección de documentación oficial, el pago de aranceles y la presentación ante las distintas seccionales del Registro Nacional de la Propiedad del Automotor (DNRPA).
              </p>

              {/* Pillars list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#16233B]">Atención Personalizada</h4>
                    <p className="text-xs text-slate-500">Trato directo sin intermediarios.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#16233B]">Transparencia de Costos</h4>
                    <p className="text-xs text-slate-500">Presupuestos previos claros.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#16233B]">Cobertura en Rosario</h4>
                    <p className="text-xs text-slate-500">Atención en Rosario y zona de influencia.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#16233B]">Seguimiento Continuo</h4>
                    <p className="text-xs text-slate-500">Novedades del trámite al instante.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
