"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight, Code2, Globe } from "lucide-react";

const getStatusConfig = (status) => {
  switch (status?.toLowerCase()) {
    case "finished":
      return {
        badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        dot: "bg-amber-400",
      };
    case "in development":
      return {
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        dot: "bg-emerald-400",
      };
    case "maintenance only":
      return {
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        dot: "bg-blue-400",
      };
    default:
      return {
        badge: "bg-primary/10 text-primary border-primary/20",
        dot: "bg-primary",
      };
  }
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-[#09090b]"
    >
      {/* Luz de fondo sutil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Portafolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Proyectos <span className="text-primary italic">_destacados</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
            Una selección de productos digitales donde la arquitectura robusta
            se encuentra con una experiencia de usuario excepcional.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const statusConfig = getStatusConfig(project.status);

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* MOCKUP DE NAVEGADOR (PANTALLA CON CAPTURA) */}
                <div className="relative w-full bg-[#121215] border-b border-white/10">
                  {/* Barra superior de la ventana */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.03]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    {/* Fake URL bar */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-[11px] text-gray-400 font-mono w-1/2 justify-center truncate border border-white/5">
                      <Globe size={10} className="shrink-0 text-gray-500" />
                      <span className="truncate">
                        {project.liveUrl || `taher.dev/${project.slug}`}
                      </span>
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* Captura de pantalla */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/50">
                    <Image
                      src={project.image || "/placeholder.jpg"}
                      alt={`Captura de ${project.title}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay gradiente sobre la imagen para integración visual */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* INFORMACIÓN DEL PROYECTO */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Badge Status & Role */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${statusConfig.badge}`}
                      >
                        <span className="relative flex h-2 w-2">
                          <span
                            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusConfig.dot}`}
                          />
                          <span
                            className={`relative inline-flex rounded-full h-2 w-2 ${statusConfig.dot}`}
                          />
                        </span>
                        {project.status}
                      </div>

                      <span className="text-primary text-xs font-bold uppercase tracking-wider">
                        {project.role}
                      </span>
                    </div>

                    {/* Título & Descripción */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stack de Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-lg border border-white/10 bg-white/5 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-lg border border-white/10 bg-white/5 text-gray-500">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Botón Acción */}
                  <div className="pt-4 border-t border-white/5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-between w-full text-sm font-semibold text-white/90 hover:text-primary transition-colors group/link"
                    >
                      <span>Ver detalles del proyecto</span>
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 text-primary"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
