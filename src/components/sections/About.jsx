"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Texto + Formación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>

          <p className="text-muted leading-relaxed mb-4">
            Soy <span className="text-foreground font-medium">Desarrollador Full Stack</span> con
            experiencia liderando productos digitales de principio a fin.
            Trabajo principalmente con <strong>Next.js, React y Node.js</strong>,
            combinando una fuerte base técnica con una visión orientada a producto.
          </p>

          <p className="text-muted leading-relaxed mb-10">
            Me especializo en construir aplicaciones
            <strong> escalables, seguras y mantenibles</strong>, cuidando la
            arquitectura, la performance y la experiencia de usuario. Disfruto
            tomar decisiones técnicas, optimizar procesos y colaborar con equipos
            técnicos y no técnicos.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-6"
        >
          <Stat title="+4" subtitle="Proyectos en producción" />
          <Stat title="3+" subtitle="Años programando" />
          <Stat title="Full Stack" subtitle="Frontend & Backend" />
          <Stat title="Tech Lead" subtitle="Producto y arquitectura" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ title, subtitle }) {
  return (
    <div className="p-6 rounded-2xl bg-card ">
      <h3 className="text-3xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-muted mt-2">{subtitle}</p>
    </div>
  );
}
