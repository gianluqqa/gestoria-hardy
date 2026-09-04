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
              <div className="w-12 h-12 rounded-xl bg-[#E2BD68] text-[#16233B] flex items-center justify-center font-bold text-xl">
                GC
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
        <div className="mt-16 pt-12 border-t border-slate-100">
          <h3 className="text-center text-xl font-bold text-[#16233B] mb-8">
            Paso a paso: Cómo trabajamos juntos
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-10 h-10 rounded-full bg-[#16233B] text-[#E2BD68] font-bold text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Contacto e Informe</h4>
              <p className="text-xs text-slate-500">Me enviás los datos del vehículo y evaluamos la situación registral.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-10 h-10 rounded-full bg-[#16233B] text-[#E2BD68] font-bold text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Gestión & Firma</h4>
              <p className="text-xs text-slate-500">Preparación de formularios oficiales y coordinación de firmas correspondientes.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-10 h-10 rounded-full bg-[#16233B] text-[#E2BD68] font-bold text-sm flex items-center justify-center mb-3">
                3
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Inscripción & Entrega</h4>
              <p className="text-xs text-slate-500">Presentación ante el Registro y posterior entrega de documentación final.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
