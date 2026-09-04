import { MapPin, Phone, ShieldCheck, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Branding & Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#16233B] border border-[#E2BD68]/40 flex items-center justify-center text-[#E2BD68] font-bold text-base shadow-sm">
                GC
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-white leading-tight">
                  GIAN LUCA CARAVONE
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#D4AF37] uppercase">
                  Mandatario del Automotor
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Gestión profesional, transparente y eficiente de trámites registrales automotores en Rosario, Santa Fe y zonas de influencia.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E2BD68]">
              <ShieldCheck className="w-4 h-4" />
              <span>Matrícula & Atención Profesional</span>
            </div>
          </div>

          {/* Col 2: Servicios Principales */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Servicios Destacados
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-[#E2BD68] transition-colors">
                  Transferencias Vehiculares
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#E2BD68] transition-colors">
                  Denuncia de Venta y Compra
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#E2BD68] transition-colors">
                  Informes de Dominio e Inhibición
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#E2BD68] transition-colors">
                  Duplicado de Cédulas, Título y Patentes
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#E2BD68] transition-colors">
                  Trámites Técnicos (RPA / RPM / Bajas)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#E2BD68] transition-colors">
                  Carga y Gestión de Formularios Online
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Enlaces Rápido */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#E2BD68] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#E2BD68] transition-colors">
                  Todos los Servicios
                </a>
              </li>
              <li>
                <a href="#confianza" className="hover:text-[#E2BD68] transition-colors">
                  Por qué elegirme
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-[#E2BD68] transition-colors">
                  Sobre Gian Luca Caravone
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#E2BD68] transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Datos de Contacto */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contacto Directo
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E2BD68] shrink-0 mt-0.5" />
                <span>Rosario, Santa Fe, Argentina</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E2BD68] shrink-0" />
                <a
                  href="tel:3412149033"
                  className="hover:text-[#E2BD68] transition-colors font-medium text-white"
                >
                  341 214-9033
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/543412149033?text=Hola%20Gian%20Luca,%20necesito%20realizar%20un%20tr%C3%A1mite."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#16233B] hover:bg-[#1E293B] text-[#E2BD68] border border-[#E2BD68]/30 px-3 py-2 rounded-lg text-xs font-semibold w-full transition-colors"
                >
                  WhatsApp Directo
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Gian Luca Caravone - Mandatario del Automotor. Rosario, Santa Fe. Todos los derechos reservados.</p>
          
          <a
            href="#inicio"
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#E2BD68] transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
