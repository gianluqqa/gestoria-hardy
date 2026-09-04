"use client";

import { useState, FormEvent } from "react";
import {
  Phone,
  MapPin,
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    tramite: "Transferencia",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl =
    "https://wa.me/543412149033?text=Hola%20Gian%20Luca,%20quiero%20hacer%20una%20consulta%20sobre%20mi%20veh%C3%ADculo.";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.telefono) return;

    const encodedText = `Hola Gian Luca, mi nombre es ${encodeURIComponent(
      formData.nombre
    )} (Tel: ${encodeURIComponent(
      formData.telefono
    )}). Quisiera consultar por el trámite de ${encodeURIComponent(
      formData.tramite
    )}: ${encodeURIComponent(formData.mensaje)}`;

    window.open(`https://wa.me/543412149033?text=${encodedText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900 text-white relative">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#16233B] rounded-full blur-3xl pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2BD68]/20 border border-[#E2BD68]/40 text-[#E2BD68] text-xs font-bold uppercase tracking-wider">
            Atención Directa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Iniciá tu Trámite Hoy Mismo
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comunicate para recibir asesoramiento personalizado y cotización sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#16233B]/90 p-8 rounded-3xl border border-[#E2BD68]/30 shadow-xl backdrop-blur-md h-full space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E2BD68]">
                  Datos Profesionales
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Gian Luca Caravone
                </h3>
                <p className="text-sm text-[#F7E9C7] font-semibold mt-0.5">
                  Mandatario del Automotor
                </p>
              </div>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E2BD68] text-[#16233B] flex items-center justify-center shrink-0 font-bold shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-medium">
                      Ubicación
                    </span>
                    <span className="text-base font-semibold text-white">
                      Rosario, Santa Fe, Argentina
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      (Gestiones en Rosario y zona de influencia)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E2BD68] text-[#16233B] flex items-center justify-center shrink-0 font-bold shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-medium">
                      Teléfono / WhatsApp
                    </span>
                    <a
                      href="tel:3412149033"
                      className="text-base font-semibold text-white hover:text-[#E2BD68] transition-colors"
                    >
                      341 214-9033
                    </a>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Atención directa a consultas
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E2BD68] text-[#16233B] flex items-center justify-center shrink-0 font-bold shadow-md">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-medium">
                      Modalidad de Atención
                    </span>
                    <span className="text-base font-semibold text-white">
                      Presencial y Virtual
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Recepción de documentación y coordinación de turnos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div className="pt-4 border-t border-slate-700/60">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all shadow-lg hover:shadow-emerald-600/20 active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Enviar mensaje por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between h-full">

            <h3 className="text-xl font-bold text-[#16233B] mb-2">
              Formulario de Consulta Rápida
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Completá los datos y serás redirigido a WhatsApp con tu mensaje formateado.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>¡Gracias! Tu consulta ha sido redactada. Si no se abrió WhatsApp automáticamente, haz clic en el botón superior.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre y apellido"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#16233B] focus:border-transparent text-sm bg-slate-50 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Teléfono de Contacto <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 341 123-4567"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#16233B] focus:border-transparent text-sm bg-slate-50 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Tipo de Trámite
                  </label>
                  <select
                    value={formData.tramite}
                    onChange={(e) =>
                      setFormData({ ...formData, tramite: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#16233B] focus:border-transparent text-sm bg-slate-50 text-slate-900"
                  >
                    <option value="Transferencia">Transferencia de Dominio</option>
                    <option value="Denuncia de Venta / Compra">Denuncia de Venta / Compra</option>
                    <option value="Informe de Dominio">Informe de Dominio / Inhibición</option>
                    <option value="Duplicado de Cédula / Título / Patente">Duplicado de Cédula / Título / Patente</option>
                    <option value="Trámite Técnico (RPA / RPM / Bajas)">Trámite Técnico (RPA / RPM / Bajas)</option>
                    <option value="Otro trámite / Consulta general">Otro trámite / Consulta general</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mensaje o Detalles del Vehículo
                </label>
                <textarea
                  rows={4}
                  placeholder="Escribí brevemente el modelo del vehículo, dominio o la duda que tengas..."
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#16233B] focus:border-transparent text-sm bg-slate-50 text-slate-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#16233B] hover:bg-[#1E293B] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 text-[#E2BD68] group-hover:translate-x-1 transition-transform" />
                <span>Enviar Consulta por WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
