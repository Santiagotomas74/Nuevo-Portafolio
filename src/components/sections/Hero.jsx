"use client";

import { motion } from "framer-motion";
import { Download, Globe } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

import SideRays from "@/app/fondo/SideRays";
// Componentes no utilizados comentados para evitar warnings en el build
// import LightPillar from "../../app/fondo/LightPillar";
// import Iridescence from "@/app/fondo/Iridescence";

export default function Hero() {
  return (
    <div className="relative w-full h-[950px] md:h-screen min-h-[600px] overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* FONDO: Posición absoluta detrás de todo (z-0) y pointer-events-none para no bloquear clics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>

      {/* CONTENIDO: Relativo con z-index superior (z-10) */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Santiago Taher
            <span className="block text-primary mt-2">
              Full Stack Developer
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed">
            Desarrollo aplicaciones web modernas, escalables y seguras con
            Next.js, React y Node.js, enfocadas en performance, arquitectura
            limpia y experiencia de usuario.
          </p>

          {/* CONTENEDOR DE BOTONES */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Ver proyectos
            </motion.a>

            {/* CV ESPAÑOL */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                sendGAEvent({ event: "button_click", value: "download_cv_es" })
              }
              href="/cv-es2.pdf"
              download="CV_Santiago_Taher_ES.pdf"
              className="px-6 py-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors text-white"
            >
              <Download className="w-4 h-4 text-primary" />
              <span className="font-medium">CV Español</span>
            </motion.a>

            {/* CV INGLÉS */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                sendGAEvent({ event: "button_click", value: "download_cv_en" })
              }
              href="/cv-en2.pdf"
              download="CV_Santiago_Taher_EN.pdf"
              className="px-6 py-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors text-white"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="font-medium">CV English</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
