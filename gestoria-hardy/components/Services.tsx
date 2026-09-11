"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  AlertTriangle,
  FileSearch,
  Copy,
  Wrench,
  Globe,
  Landmark,
  Check,
  MessageCircle,
  ChevronDown,
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
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  const servicesList: ServiceItem[] = [
    {
      id: "transferencias",
      icon: ArrowLeftRight,
      title: "Inscripciones & Transferencias",
      badge: "Trámite Frecuente",
      description:
        "Inscripción inicial de 0km y gestión integral de transferencias de dominio para automotores, motos y maquinarias.",
      items: [
        "Inscripción Inicial de vehículos 0km",
        "Transferencia de automotores y motovehículos usados",
        "Control de documentación previa e inscripción registral",
      ],
    },
    {
      id: "municipal-provincial",
      icon: Landmark,
      title: "Patentes & Impuestos",
      badge: "Santa Fe / Rosario",
      description:
        "Altas, bajas y regularización de patentes ante la Administración Provincial de Impuestos (API Santa Fe) y la Municipalidad de Rosario.",
      items: [
        "Alta impositiva municipal y provincial (0km y usados)",
        "Baja por transferencia, radicación o desguace",
        "Liquidación y libre deuda de Patente Única sobre Vehículos",
      ],
    },

    {
      id: "denuncias",
      icon: AlertTriangle,
      title: "Denuncias",
      badge: "Protección Legal",
      description:
        "Protegé tu responsabilidad civil y patrimonio asentando denuncias de venta, compra o siniestros por robo/hurto.",
      items: [
        "Denuncia de Venta (exoneración de responsabilidad)",
        "Denuncia de Compra / Posesión",
        "Denuncia de Robo o Hurto ante Registro Nacional",
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
        "Informe de Deuda de Patentes (API / Municipio) e Infracciones",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16233B] border border-[#E2BD68]/30 text-[#E2BD68] text-xs font-bold uppercase tracking-wider shadow-sm">
            Servicios Profesionales
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16233B] tracking-tight">
            Gestión Integral de Trámites Automotores
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hacé clic en cualquier tarjeta para desplegar los detalles y requisitos de cada gestión.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            const isOpen = openCardId === service.id;
            const whatsappServiceLink = `https://wa.me/543412149033?text=Hola%20Gian%20Luca,%20necesito%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20${encodeURIComponent(
              service.title
            )}.`;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#E2BD68] shadow-xl ring-2 ring-[#E2BD68]/20"
                    : "border-slate-200 shadow-sm hover:border-[#E2BD68]/60 hover:shadow-md"
                }`}
              >
                {/* Header Clickeable */}
                <button
                  onClick={() => toggleCard(service.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center p-3 transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "bg-[#E2BD68] text-[#16233B] shadow-md"
                          : "bg-[#16233B] text-[#E2BD68] group-hover:scale-105"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-[#16233B] group-hover:text-[#1E293B]">
                          {service.title}
                        </h3>
                      </div>
                      {service.badge && (
                        <span className="inline-block text-[10px] font-semibold text-[#16233B] bg-[#F7E9C7] px-2 py-0.5 rounded-full border border-[#E2BD68]/40 mt-1">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? "bg-[#16233B] text-[#E2BD68] rotate-180"
                        : "bg-slate-100 text-slate-500 group-hover:bg-[#16233B]/10 group-hover:text-[#16233B]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Details Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100 px-6 pb-6 pt-2 border-t border-slate-100"
                      : "max-h-0 opacity-0 px-6 py-0 overflow-hidden"
                  }`}
                >
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <h4 className="text-xs font-bold text-[#16233B] uppercase tracking-wider mb-3">
                    Trámites e Ítems Incluidos:
                  </h4>
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <a
                      href={whatsappServiceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#16233B] hover:bg-[#1E293B] text-white font-semibold text-xs transition-all duration-200 shadow-sm hover:shadow group/btn"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#E2BD68]" />
                      <span>Consultar por este trámite</span>
                    </a>
                  </div>
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

