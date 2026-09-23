"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  X,
  ArrowRight,
} from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

export interface ServiceItem {
  id: string;
  icon: any;
  title: string;
  badge?: string;
  description: string;
  items: string[];
}

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ocultar header y prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    const headerElement = document.querySelector("header");
    if (selectedService) {
      document.body.style.overflow = "hidden";
      if (headerElement) {
        headerElement.style.display = "none";
      }
    } else {
      document.body.style.overflow = "unset";
      if (headerElement) {
        headerElement.style.display = "";
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      if (headerElement) {
        headerElement.style.display = "";
      }
    };
  }, [selectedService]);

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
            Hacé clic en cualquier tarjeta para ver la información detallada y requisitos de cada trámite.
          </p>
        </div>

        {/* Services Cards Grid - Tarjetas limpias y parejas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <ScrollReveal
                key={service.id}
                variant="fade-up"
                delay={(index % 3) * 100}
                duration={600}
                className="h-full"
              >
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full h-full text-left bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-[#E2BD68] transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#16233B] text-[#E2BD68] flex items-center justify-center p-3 group-hover:bg-[#E2BD68] group-hover:text-[#16233B] transition-all duration-300 shadow-md shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold text-[#16233B] bg-[#F7E9C7] px-2.5 py-1 rounded-full border border-[#E2BD68]/40 shrink-0">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="my-6">
                    <h3 className="text-xl font-bold text-[#16233B] group-hover:text-[#1E293B] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#16233B] group-hover:text-[#D4AF37] transition-colors mt-auto">
                    <span>Ver información completa</span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#16233B] group-hover:text-[#E2BD68] flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              </ScrollReveal>
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

      {/* Modal Emergente con Portal directo al body */}
      {isMounted && selectedService && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
          {/* Backdrop Clickeable */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedService(null)}
          />

          {/* Contenido del Modal Flotante */}
          <div className="relative w-full max-w-lg max-h-[88vh] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-scaleUp flex flex-col my-auto">
            {/* Header del Modal (Fijo) */}
            <div className="bg-[#16233B] text-white p-6 sm:p-7 relative shrink-0">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 pr-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E2BD68] text-[#16233B] flex items-center justify-center p-3 shadow-lg shrink-0">
                  {selectedService.icon && (
                    <selectedService.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  )}
                </div>
                <div>
                  {selectedService.badge && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E2BD68] bg-white/10 px-2.5 py-0.5 rounded-full border border-[#E2BD68]/30">
                      {selectedService.badge}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Body del Modal (Scroll interno) */}
            <div className="p-6 sm:p-7 space-y-6 overflow-y-auto flex-grow">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                  Descripción del Trámite
                </h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Ítems & Requisitos Incluidos
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {selectedService.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="w-5 h-5 rounded-full bg-[#E2BD68]/20 text-[#16233B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </div>
                      <span className="font-medium text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón Directo WhatsApp */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/543412149033?text=Hola%20Gian%20Luca,%20necesito%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20${encodeURIComponent(
                    selectedService.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-[#16233B] hover:bg-[#1E293B] text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <MessageCircle className="w-4 h-4 text-[#E2BD68]" />
                  <span>Consultar por este trámite en WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}


