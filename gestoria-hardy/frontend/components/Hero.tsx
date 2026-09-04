import { MessageCircle, ShieldCheck, ArrowRight, Clock, FileCheck, CheckCircle2 } from "lucide-react";

export function Hero() {
  const whatsappUrl =
    "https://wa.me/543412149033?text=Hola%20Gian%20Luca,%20quisiera%20consultar%20sobre%20la%20gesti%C3%B3n%20de%20un%20tr%C3%A1mite%20automotor.";

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#16233B] via-[#1B2B48] to-[#0F172A] text-white py-20 lg:py-28">
      {/* Dynamic Background Glows & Accent Gradients */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[#E2BD68]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2BD68]/15 border border-[#E2BD68]/30 text-[#E2BD68] text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Gestión Oficial & Asesoramiento Profesional</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Trámites Automotores con{" "}
              <span className="bg-gradient-to-r from-[#E2BD68] via-[#F7E9C7] to-[#D4AF37] bg-clip-text text-transparent">
                Seguridad, Rapidez y Confianza
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Soy <strong className="text-white font-semibold">Gian Luca Caravone</strong>, Mandatario del Automotor en Rosario, Santa Fe. Me encargo personalmente de simplificar, agilizar y resolver la documentación de tu vehículo para que no pierdas tiempo ni tengas imprevistos.
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E2BD68] hover:bg-[#d8b15a] text-[#0F172A] font-bold px-7 py-4 rounded-xl text-base shadow-lg shadow-[#E2BD68]/20 hover:shadow-xl transition-all duration-200 group active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-[#0F172A] fill-[#0F172A]/20" />
                <span>Consulta directa por WhatsApp</span>
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-4 rounded-xl text-base border border-slate-700 hover:border-slate-600 transition-all duration-200 group"
              >
                <span>Ver servicios</span>
                <ArrowRight className="w-4 h-4 text-[#E2BD68] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Feature Highlights */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-[#E2BD68] font-bold text-sm sm:text-base">
                  <Clock className="w-4 h-4 hidden sm:inline" />
                  <span>Atención Rápida</span>
                </div>
                <span className="text-xs text-slate-400">Respuestas inmediatas</span>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-[#E2BD68] font-bold text-sm sm:text-base">
                  <FileCheck className="w-4 h-4 hidden sm:inline" />
                  <span>Cero Complicaciones</span>
                </div>
                <span className="text-xs text-slate-400">Gestión sin filas</span>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-[#E2BD68] font-bold text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 hidden sm:inline" />
                  <span>Rosario & Zona</span>
                </div>
                <span className="text-xs text-slate-400">Santa Fe, Argentina</span>
              </div>
            </div>

          </div>

          {/* Feature Hero Card / Brand Shield */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#1E293B]/90 to-[#0F172A]/90 p-8 rounded-2xl border border-[#E2BD68]/30 shadow-2xl backdrop-blur-md">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#E2BD68] flex items-center justify-center text-[#0F172A] shadow-md font-extrabold text-xl">
                ★
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#16233B] border-2 border-[#E2BD68] flex items-center justify-center text-[#E2BD68] font-extrabold text-3xl shadow-inner">
                  GC
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white">Gian Luca Caravone</h3>
                  <p className="text-sm font-medium text-[#E2BD68]">Mandatario del Automotor</p>
                  <p className="text-xs text-slate-400 mt-1">Rosario, Santa Fe, Argentina</p>
                </div>

                <div className="bg-[#16233B]/80 rounded-xl p-4 border border-slate-700/60 text-left space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E2BD68] shrink-0" />
                    <span>Transferencias e Inscripciones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E2BD68] shrink-0" />
                    <span>Informes de Dominio e Inhibiciones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E2BD68] shrink-0" />
                    <span>Duplicados de Cédulas, Título y Patentes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E2BD68] shrink-0" />
                    <span>Trámites Técnicos (RPA, RPM, Altas/Bajas)</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors text-center shadow-md"
                >
                  Iniciar Trámite Ahora
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
