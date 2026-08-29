"use client";

import { motion } from "framer-motion";

export default function About() {
  // Variantes para animar las tarjetas en cascada (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // Usamos un gradiente muy sutil en lugar de un negro plano
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative border-t border-white/5"
    >
      {/* Luz de fondo sutil opcional para darle profundidad */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[300px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Texto + Formación */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-4">
            Sobre mí
            <div className="h-[1px] w-12 bg-primary/50"></div>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Soy{" "}
              <span className="text-white font-semibold">
                Desarrollador Full Stack
              </span>{" "}
              con experiencia liderando productos digitales de principio a fin.
              Trabajo principalmente con{" "}
              <span className="text-white font-medium">
                Next.js, React y Node.js
              </span>
              , combinando una fuerte base técnica con una visión orientada a
              producto.
            </p>

            <p>
              Me especializo en construir aplicaciones{" "}
              <span className="text-white font-medium">
                escalables, seguras y mantenibles
              </span>
              , cuidando la arquitectura, la performance y la experiencia de
              usuario. Disfruto tomar decisiones técnicas, optimizar procesos y
              colaborar con equipos técnicos y no técnicos.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          <Stat
            variants={cardVariants}
            title="+4"
            subtitle="Proyectos en producción"
          />
          <Stat
            variants={cardVariants}
            title="3+"
            subtitle="Años programando"
          />
          <Stat
            variants={cardVariants}
            title="Full Stack"
            subtitle="Frontend & Backend"
          />
          <Stat
            variants={cardVariants}
            title="Tech Lead"
            subtitle="Producto y arquitectura"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Subcomponente Stat mejorado
function Stat({ title, subtitle, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5 }}
      className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-colors group"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-105 transition-transform origin-left">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-400 mt-3 font-medium">
        {subtitle}
      </p>
    </motion.div>
  );
}
