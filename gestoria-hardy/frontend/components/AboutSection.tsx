import Image from "next/image";
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
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#E2BD68] shadow-xl bg-white">
                  <Image
                    src="/logo-gestoria-hardy-dos.jpeg"
                    alt="Gestoría Hardy Logo"
                    fill
                    className="object-cover"
                  />
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
              
              <div className="flex items-center gap-2 text-xs text-[#E2BD68] mt-2 bg-[#16233B] border border-[#E2BD68]/30 px-3.5 py-1.5 rounded-full shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#E2BD68]" />
                <span className="font-semibold">Rosario, Santa Fe, Argentina</span>
              </div>
            </div>

            {/* Right Professional Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16233B] border border-[#E2BD68]/30 text-[#E2BD68] text-xs font-bold uppercase tracking-wider shadow-sm">
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
                <div className="flex items-start gap-3 bg-[#16233B] text-white p-4 rounded-2xl border border-[#E2BD68]/30 shadow-md">
                  <Check className="w-5 h-5 text-[#E2BD68] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#E2BD68]">Atención Personalizada</h4>
                    <p className="text-xs text-slate-300">Trato directo sin intermediarios.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#16233B] text-white p-4 rounded-2xl border border-[#E2BD68]/30 shadow-md">
                  <Check className="w-5 h-5 text-[#E2BD68] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#E2BD68]">Transparencia de Costos</h4>
                    <p className="text-xs text-slate-300">Presupuestos previos claros.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#16233B] text-white p-4 rounded-2xl border border-[#E2BD68]/30 shadow-md">
                  <Check className="w-5 h-5 text-[#E2BD68] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#E2BD68]">Cobertura en Rosario</h4>
                    <p className="text-xs text-slate-300">Atención en Rosario y zona de influencia.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#16233B] text-white p-4 rounded-2xl border border-[#E2BD68]/30 shadow-md">
                  <Check className="w-5 h-5 text-[#E2BD68] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#E2BD68]">Seguimiento Continuo</h4>
                    <p className="text-xs text-slate-300">Novedades del trámite al instante.</p>
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
