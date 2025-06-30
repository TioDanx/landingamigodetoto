"use client";
import React from "react";
import Card from "./Card";
import Image from "next/image";
export default function CasinoLanding() {
  return (
    <>
      <div className="bg-[url('/bg.webp')] bg-center bg-cover bg-no-repeat min-h-dvh h-full w-full overscroll-none relative py-10 ">
        <div className="bg-gradient-to-b from-transparent to-orange-300 opacity-30 absolute top-0 left-0 h-full w-full z-0 pointer-events-none"></div>
        <div className="flex justify-center">
          <Image
            src="/logo.webp"
            alt="logo"
            width={150}
            height={150}
            className="mb-4"
          />
        </div>

        <h1 className="text-4xl md:text-4xl font-bold text-center mb-4 text-white">
          ¡Bienvenido a Ganamos365!
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Tu destino online para la mejor experiencia en juegos de azar y
          promociones exclusivas.
        </p>

        <div className="flex justify-center mx-auto mb-4 animate-bounce ">
          <a
            href="https://wa.link/zwfp0v"
            target="_blank"
            className="bg-green-500 z-20 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full shadow-lg transition mx-auto "
          >
            Obtener mi bono YA!
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 max-w-3xl gap-1 mx-2 z-10 mb-4 justify-stretch sm:mx-auto sm:gap-4">
          <Card
            icon="💰"
            title="20% en el primer deposito"
            description="Obtené un bono del 20% en tu primer deposito."
          />
          <Card
            icon="🎯"
            title="Mínimo $2000"
            description="Ingresá al juego con un deposito mínimo de $2000."
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
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white bg-blue-700 p-2 rounded-lg w-fit mx-auto cursor-pointer hover:bg-blue-500 transition-all duration-300" onClick={() => window.open("https://www.facebook.com/share/16bnLMWvUD/?mibextid=wwXIfr", "_blank")}>
          Seguinos en Facebook
        </h1>
      </div>
    </>
  );
}
