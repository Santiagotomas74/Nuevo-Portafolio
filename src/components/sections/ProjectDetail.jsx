"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Star, Code2, Rocket } from "lucide-react";

export default function ProjectDetail({ project }) {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      {/* Luces de fondo coherentes con el Home */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Botón Volver con estilo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Volver a proyectos
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: Contenido Principal (2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-16"
          >
            {/* Header Principal */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                  {project.status}
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter italic">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                {project.longDescription}
              </p>
            </div>

            {/* Highlights - Estilo Bento sutil */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Star className="text-primary" size={24} />
                Puntos Clave & Logros
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] flex items-start gap-4 hover:bg-white/[0.04] transition-colors">
                    <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed italic">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA: Links a Repositorio o Demo */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="pt-8 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20"
                  >
                    Ver Proyecto en vivo <Rocket size={18} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-bold"
                  >
                    Código en GitHub <Github size={18} />
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* COLUMNA DERECHA: Meta-información (1/3) */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8 sticky top-32"
          >
            {/* Card de Rol */}
            <div className="p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl space-y-6">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-bold">Mi Rol</h4>
                <p className="text-lg font-bold text-foreground leading-snug">
                  {project.role}
                </p>
              </div>

              <div className="h-px bg-white/5" />

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4 font-bold">Stack Tecnológico</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[11px] rounded-lg border border-white/5 bg-white/5 text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Si tu data tiene conceptos, los mostramos aquí */}
              {project.concepts && (
                <>
                  <div className="h-px bg-white/5" />
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4 font-bold">Arquitectura & Conceptos</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.concepts.map((concept) => (
                        <span
                          key={concept}
                          className="px-3 py-1 text-[11px] rounded-lg border border-primary/20 bg-primary/5 text-primary font-medium"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Card de contacto rápida o invitación */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
              <h3 className="text-xl font-bold mb-2">¿Te interesa el proyecto?</h3>
              <p className="text-sm text-muted-foreground mb-6">Hablemos sobre cómo puedo aportar valor a tu equipo.</p>
              <Link href="/#contact" className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:gap-3 transition-all">
                Contáctame <ExternalLink size={14} />
              </Link>
            </div>
          </motion.aside>

        </div>
      </div>
    </section>
  );
}