import {
  ArrowLeftRight,
  AlertTriangle,
  FileSearch,
  Copy,
  Wrench,
  Globe,
  Check,
  MessageCircle,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: any;
  title: string;
  badge?: string;
  description: string;
  items: string[];
}

export function Services() {
  const servicesList: ServiceItem[] = [
    {
      id: "transferencias",
      icon: ArrowLeftRight,
      title: "Transferencias",
      badge: "Trámite Frecuente",
      description:
        "Gestión integral de transferencias de dominio para vehículos usados, 0km, motovehículos y maquinarias.",
      items: [
        "Transferencia de automotores y motos",
        "Control de documentación previa",
        "Liquidación e inscripción registral",
      ],
    },
    {
      id: "denuncias",
      icon: AlertTriangle,
      title: "Denuncias",
      badge: "Protección Legal",
      description:
        "Protegé tu responsabilidad civil y legal registrando debidamente la venta o compra de la unidad.",
      items: [
        "Denuncia de Venta (exoneración de responsabilidad)",
        "Denuncia de Compra / Posesión",
        "Notificación fehaciente al registro",
      ],
    },
    {
      id: "informes",
      icon: FileSearch,
      title: "Informes",
      badge: "Verificación Previa",
      description:
        "Verificá el estado legal y financiero del vehículo antes de comprar para evitar sorpresas o embargos.",
      items: [
        "Informe de Dominio (Titularidad y gravámenes)",
        "Informe de Anotaciones Personales (Inhibiciones)",
        "Informe de Deuda de Patentes e Infracciones",
      ],
    },
    {
      id: "duplicados",
      icon: Copy,
      title: "Duplicados y Cédulas",
      badge: "Reposición Rápida",
      description:
        "Tramitación por extravío, robo o deterioro de documentación obligatoria para circular.",
      items: [
        "Duplicado de Cédula de Identificación",
        "Duplicado de Título de Propiedad Automotor",
        "Duplicado de Chapa Patente por extravío o deterioro",
      ],
    },
    {
      id: "tecnicos",
      icon: Wrench,
      title: "Trámites Técnicos",
      badge: "Gestión Específica",
      description:
        "Regularización de números de motor/chasis, modificaciones y cambios de radicación del vehículo.",
      items: [
        "Codificación de Chasis (RPA) y Motor (RPM)",
        "Altas y Bajas (Impositivas y Registrales)",
        "Cambio de Radicación (Domicilio o jurisdicción)",
      ],
    },
    {
      id: "online",
      icon: Globe,
      title: "Gestión Online",
      badge: "Agilidad Digital",
      description:
        "Carga rápida, revisión y procesamiento digital de formularios oficiales para optimizar tiempos.",
      items: [
        "Carga y validación de formularios 08 / 04 / 02",
        "Asignación y coordinación de turnos registrales",
        "Verificación digital de legajos automotores",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16233B]/5 border border-[#16233B]/10 text-[#16233B] text-xs font-bold uppercase tracking-wider">
            Servicios Profesionales
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16233B] tracking-tight">
            Gestión Integral de Trámites Automotores
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Soluciones precisas, seguras y personalizadas en Rosario y la región. Me ocupo de cada detalle técnico e impositivo de tu vehículo.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            const whatsappServiceLink = `https://wa.me/543412149033?text=Hola%20Gian%20Luca,%20necesito%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20${encodeURIComponent(
              service.title
            )}.`;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#E2BD68]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Top */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-[#16233B] text-[#E2BD68] flex items-center justify-center p-3 group-hover:scale-110 group-hover:bg-[#1E293B] transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold text-[#16233B] bg-[#F7E9C7] px-2.5 py-1 rounded-full border border-[#E2BD68]/40">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#16233B] mb-2.5 group-hover:text-[#1E293B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Included Items Checklist */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={whatsappServiceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-[#16233B] text-slate-700 hover:text-white font-semibold text-xs transition-all duration-200 group/btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#E2BD68]" />
                    <span>Consultar por este trámite</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Notice Footer */}
        <div className="mt-12 text-center bg-white rounded-xl p-6 border border-slate-200 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-[#16233B] text-sm sm:text-base">
              ¿Tu trámite no figura en la lista o tenés dudas especiales?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Analizo tu caso particular y te asesoro sobre la mejor manera de resolverlo.
            </p>
          </div>
          <a
            href="https://wa.me/543412149033?text=Hola%20Gian%20Luca,%20tengo%20una%20consulta%20personalizada%20sobre%20un%20tr%C3%A1mite."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#16233B] hover:bg-[#1E293B] text-[#E2BD68] font-bold text-xs px-5 py-3 rounded-lg transition-colors border border-[#E2BD68]/30"
          >
            Consulta Personalizada
          </a>
        </div>

      </div>
    </section>
  );
}
