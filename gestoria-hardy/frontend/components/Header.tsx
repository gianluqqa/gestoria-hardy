"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, MessageCircle, ShieldCheck } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Por qué elegirme", href: "#confianza" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  const whatsappUrl = "https://wa.me/543412149033?text=Hola%20Gian%20Luca,%20necesito%20realizar%20una%20consulta%20sobre%20un%20tr%C3%A1mite%20automotor.";

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-[#16233B] text-slate-200 text-xs py-2 px-4 border-b border-[#253554]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#E2BD68]" />
              Rosario, Santa Fe, Argentina
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E2BD68]" />
              Mandatario del Automotor
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:3412149033"
              className="flex items-center gap-1.5 hover:text-[#E2BD68] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E2BD68]" />
              <span className="font-medium">341 214-9033</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#16233B] to-[#0F172A] border border-[#E2BD68]/40 flex items-center justify-center text-[#E2BD68] font-bold text-lg shadow-sm group-hover:scale-105 transition-transform duration-200">
              GC
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-[#16233B] leading-tight">
                GIAN LUCA CARAVONE
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-[#D4AF37] uppercase">
                Mandatario del Automotor
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#16233B] hover:border-b-2 hover:border-[#E2BD68] py-1 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#16233B] hover:bg-[#1E293B] text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all border border-[#E2BD68]/30 group"
            >
              <MessageCircle className="w-4 h-4 text-[#E2BD68] group-hover:scale-110 transition-transform" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[#16233B] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#E2BD68]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-700 hover:text-[#16233B] hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#16233B] text-white px-4 py-3 rounded-lg font-medium text-sm shadow border border-[#E2BD68]/30"
              >
                <MessageCircle className="w-4 h-4 text-[#E2BD68]" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
