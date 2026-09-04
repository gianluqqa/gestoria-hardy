import Image from "next/image";
import { UserCheck, ShieldCheck, Clock, HeartHandshake, FileText, CheckCircle } from "lucide-react";


export function TrustSection() {
  const trustPoints = [
    {
      icon: UserCheck,
      title: "Asesoramiento Personalizado",
      description:
        "Cada trámite automotor tiene particularidades legales e impositivas. Analizo tu caso específico para indicarte exactamente qué documentación necesitás sin vueltas.",
    },
    {
      icon: ShieldCheck,
      title: "Gestión Profesional & Segura",
      description:
        "Evitás cometer errores en la carga de datos o la presentación de formularios que puedan derivar en rechazos registrales o problemas judiciales futuros.",
    },
    {
      icon: HeartHandshake,
      title: "Acompañamiento Integral",
      description:
        "Te acompaño activamente durante todo el proceso, desde el primer informe preventivo hasta la entrega final del título y las cédulas a tu nombre.",
    },
    {
      icon: Clock,
      title: "Ahorro Real de Tiempo",
      description:
        "No pierdas horas haciendo filas en Registros del Automotor ni descifrando normativas complejas. Me encargo de la gestión de principio a fin.",
    },
  ];

  return (
    <section id="confianza" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7E9C7] text-[#16233B] text-xs font-bold uppercase tracking-wider border border-[#E2BD68]/40">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              Garantía de Confianza
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16233B] tracking-tight leading-tight">
              ¿Por qué gestionar tus trámites con un Mandatario Matriculado?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Realizar la compra, venta o regularización de un vehículo involucra tu patrimonio. Trabajar con un profesional certificado asegura transparencia y tranquilidad en cada firma.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#16233B] text-white p-8 rounded-2xl border border-[#E2BD68]/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E2BD68]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#E2BD68] shadow-md bg-white shrink-0">
                <Image
                  src="/logo-gestoria-hardy-dos.jpeg"
                  alt="Logo Gestoría Hardy"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Gian Luca Caravone</h4>
                <p className="text-xs text-[#E2BD68] font-medium">Mandatario del Automotor - Rosario, Santa Fe</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm italic leading-relaxed">
              &quot;Mi compromiso es brindar un servicio ágil, transparente y seguro. Protejo la tranquilidad jurídica de mis clientes para que comprar o vender su vehículo sea un proceso rápido y sin sorpresas.&quot;
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#E2BD68] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#16233B] text-[#E2BD68] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#16233B] mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="mt-16 bg-[#16233B] text-white p-8 sm:p-12 rounded-3xl border border-[#E2BD68]/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E2BD68]/5 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-center text-xl sm:text-2xl font-bold text-white mb-10 tracking-tight">
            Paso a paso: <span className="text-[#E2BD68]">Cómo trabajamos juntos</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
            <div className="flex flex-col items-center text-center p-5 bg-[#1E293B]/70 rounded-2xl border border-slate-700/60 shadow-sm hover:border-[#E2BD68]/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#E2BD68] text-[#16233B] font-extrabold text-lg flex items-center justify-center mb-4 shadow-md">
                1
              </div>
              <h4 className="font-bold text-white text-base mb-2">Contacto e Informe</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Me enviás los datos del vehículo y evaluamos la situación registral.</p>
            </div>

            <div className="flex flex-col items-center text-center p-5 bg-[#1E293B]/70 rounded-2xl border border-slate-700/60 shadow-sm hover:border-[#E2BD68]/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#E2BD68] text-[#16233B] font-extrabold text-lg flex items-center justify-center mb-4 shadow-md">
                2
              </div>
              <h4 className="font-bold text-white text-base mb-2">Gestión & Firma</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Preparación de formularios oficiales y coordinación de firmas correspondientes.</p>
            </div>

            <div className="flex flex-col items-center text-center p-5 bg-[#1E293B]/70 rounded-2xl border border-slate-700/60 shadow-sm hover:border-[#E2BD68]/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#E2BD68] text-[#16233B] font-extrabold text-lg flex items-center justify-center mb-4 shadow-md">
                3
              </div>
              <h4 className="font-bold text-white text-base mb-2">Inscripción & Entrega</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Presentación ante el Registro y posterior entrega de documentación final.</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
