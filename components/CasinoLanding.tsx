"use client";
import React, { useEffect, useRef, useState } from "react";

import Card from "./Card";
import Image from "next/image";
import Testimonial from "./Testmonial";
export default function CasinoLanding() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect();
        setShowStickyCTA(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative min-h-dvh w-full overflow-hidden text-white font-sans">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('/bg.webp')] bg-center bg-cover bg-no-repeat" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-300 to-white opacity-20" />
        <div className="absolute inset-0 pointer-events-none backdrop-blur-sm" />
      </div>

      <div className="relative z-10 px-4 py-10 max-w-screen-xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image src="/logo.webp" alt="logo" width={150} height={150} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          ¡Bienvenido a Ganamos365!
        </h1>
        <p className="text-center text-gray-200 mb-10 max-w-2xl mx-auto">
          Tu destino online para la mejor experiencia en juegos de azar y
          promociones exclusivas.
        </p>

        <div ref={ctaRef} className="flex justify-center mb-12 animate-bounce">
          <a
            href="https://wa.link/zwfp0v"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg px-10 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
          >
            🎁 Obtener mi bono YA!
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 max-w-4xl gap-3 sm:gap-5 mx-auto mb-6">
          <Card
            icon="💰"
            title="20% en el primer deposito"
            description="Obtené un bono del 20% en tu primer depósito."
          />
          <Card
            icon="🎯"
            title="Mínimo $2000"
            description="Ingresá al juego con un depósito mínimo de $2000."
          />
          <Card
            icon="💳"
            title="Aceptamos Mercado Pago"
            description="Pagá con comodidad usando tu billetera favorita."
          />
          <Card
            icon="⏱️"
            title="Retiros 24hs"
            description="Tu dinero disponible en cualquier momento."
          />
          <Card
            icon="👥"
            title="+10.000 jugadores activos"
            description="Únete a una comunidad que no para de crecer."
          />
          <Card
            icon="⭐"
            title="5 estrellas"
            description="Calificación perfecta por experiencia, confianza y diversión."
          />
        </div>

        <section className="relative z-10 px-4 py-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            💬 Clientes Satisfechos
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Testimonial
              name="Lucía R."
              rating={5}
              message="Muy confiable y fácil de usar. Me sorprendió lo rápido que procesan los retiros. ¡Volvería a jugar sin dudarlo!"
            />
            <Testimonial
              name="Carlos M."
              rating={4}
              message="Tienen mucha variedad de juegos y responden rápido por WhatsApp. Lo recomiendo si estás buscando un casino serio."
            />
            <Testimonial
              name="Julián D."
              rating={5}
              message="Se gana seguido y los bonos realmente ayudan. Muy buena atención y pagos puntuales. ¡Gran experiencia!"
            />
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <h2
            className="text-xl md:text-2xl font-bold bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-lg cursor-pointer transition-all duration-300"
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/16bnLMWvUD/?mibextid=wwXIfr",
                "_blank"
              )
            }
          >
            📢 Seguinos en Facebook
          </h2>
        </div>
        {showStickyCTA && (
          <div className="fixed bottom-4 inset-x-0 flex justify-center z-50 animate-pulse">
            <a
              href="https://wa.link/zwfp0v"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-semibold text-base px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
            >
              🎁 ¡Obtené tu bono YA!
            </a>
          </div>
        )}
        <footer className="text-center text-sm text-gray-400 border-t border-white/10 pt-4">
          Juego responsable +18 · © {new Date().getFullYear()} Ganamos365
        </footer>
      </div>
    </div>
  );
}
