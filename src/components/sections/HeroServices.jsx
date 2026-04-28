"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  // 👉 CAMBIÁ ESTA URL POR TU IMAGEN PRINCIPAL
  const heroImage = "/image5.png"; // Puedes usar una imagen local en tu carpeta 'public' o una URL externa

  // 👉 CAMBIÁ ESTA URL POR TU LOGO
  const logoImage = "/image2.png"; // Puedes usar una imagen local en tu carpeta 'public' o una URL externa

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center px-6">
      {/* FONDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />

      {/* BRILLOS */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full" />

      {/* GRID */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center w-full">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Desarrollo Web Profesional
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Creamos páginas web que{" "}
            <span className="text-blue-500">atraen clientes</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Diseñamos sitios modernos, rápidos y pensados para negocios que
            quieren vender más, generar confianza y crecer online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition">
              Ver proyectos
            </button>

            <button className="border border-zinc-700 hover:bg-zinc-900 px-8 py-4 rounded-2xl font-semibold transition">
              Pedir presupuesto
            </button>
          </div>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* LOGO CON IMAGEN */}
          <div className="absolute -top-20 -right-4 bg-zinc-950 border border-zinc-800 px-4 py-3 rounded-2xl shadow-xl z-10">
            <div className="relative w-[180px] h-[180px]">
              <Image
                src={logoImage}
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* CONTENEDOR */}
          <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-5 shadow-2xl overflow-hidden">
            {/* NAV */}

            {/* IMAGEN */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden">
              <Image
                src={heroImage}
                alt="Hero Preview"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/55 flex flex-col justify-center items-center text-center px-8">
                <h3 className="text-4xl font-bold mb-4">
                  Web Premium para Negocios
                </h3>

                <p className="text-zinc-300 max-w-sm mb-8">
                  Diseño moderno + estrategia + resultados reales.
                </p>

                <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold transition">
                  Solicitar Diseño
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 relative z-10">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}
