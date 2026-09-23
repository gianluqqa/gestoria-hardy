"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";
  delay?: number; // en milisegundos
  duration?: number; // en milisegundos
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.15,
  once = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!once) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Transformaciones iniciales sutiles según la variante
  const getInitialTransform = () => {
    switch (variant) {
      case "fade-up":
        return "translateY(24px)";
      case "fade-left":
        return "translateX(-24px)";
      case "fade-right":
        return "translateX(24px)";
      case "zoom-in":
        return "scale(0.96)";
      case "fade-in":
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getInitialTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // curva suave y profesional (ease-out cubic)
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
