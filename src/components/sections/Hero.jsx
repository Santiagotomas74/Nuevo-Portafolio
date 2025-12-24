"use client";
import LightPillar from "../../app/fondo/LightPillar";
import { motion } from "framer-motion";
// Opcional: puedes importar iconos si usas Lucide
import { Download, Globe } from "lucide-react"; 

export default function Hero() {
  return (
    <div style={{ width: '100%', height: '950px', position: 'relative', overflow: 'hidden' }}>
      
      <LightPillar
        topColor="#5734e5"
        bottomColor="#1409aa"
        intensity={1.0}
        rotationSpeed={1.5}
        glowAmount={0.005}
        pillarWidth={2.0}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={60}
        interactive={false}
        mixBlendMode="normal"
      />

      <section className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Santiago Taher
            <span className="block text-primary">
              Full Stack Developer · Tech Lead
            </span>
          </motion.h1>

          <p className="mt-6 max-w-2xl text-muted text-lg">
            Desarrollo aplicaciones web modernas, escalables y seguras con Next.js,
            React y Node.js, enfocadas en performance, arquitectura limpia y
            experiencia de usuario.
          </p>

          {/* Contenedor de Botones */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white text-black font-bold hover:bg-opacity-90 transition-all"
            >
              Ver proyectos
            </a>

            {/* CV ESPAÑOL */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/cv-es.pdf"
              download="CV_Santiago_Taher_ES.pdf"
              className="px-6 py-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2 hover:bg-black/60 transition-all"
            >
              <Download className="w-4 h-4 text-primary" />
              <span>CV Español</span>
            </motion.a>

            {/* CV INGLÉS */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/cv-en.pdf"
              download="CV_Santiago_Taher_EN.pdf"
              className="px-6 py-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2 hover:bg-black/60 transition-all"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span>CV English</span>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}