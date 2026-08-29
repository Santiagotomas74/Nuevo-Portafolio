"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Globe,
  Rocket,
  Sparkles,
} from "lucide-react";

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

export default function ProjectDetail({ project }) {
  if (!project) return null;

  const statusConfig = getStatusConfig(project.status);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-[#09090b] text-white">
      {/* Luz de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Navegación superior */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors py-2 px-4 rounded-full border border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1 text-primary"
            />
            Volver a proyectos
          </Link>
        </motion.div>

        {/* HERO BANNER DE PROYECTO (Mockup con captura) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-3xl border border-white/10 bg-[#121215] overflow-hidden shadow-2xl"
        >
          {/* Header de ventana tipo Browser */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white/5 text-xs text-gray-400 font-mono border border-white/5 truncate max-w-xs">
              <Globe size={12} className="shrink-0 text-gray-500" />
              <span className="truncate">
                {project.liveUrl || `taher.dev/projects/${project.slug}`}
              </span>
            </div>
            <div className="w-12" />
          </div>

          {/* Captura de pantalla */}
          <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full bg-black/60 overflow-hidden">
            <Image
              src={project.image || "/placeholder.jpg"}
              alt={`Mockup de ${project.title}`}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/20" />
          </div>
        </motion.div>

        {/* GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* COLUMNA IZQUIERDA: Detalle y Descripción (2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Encabezado */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${statusConfig.badge}`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${statusConfig.dot}`}
                  />
                  {project.status}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {project.role}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {project.title}
              </h1>

              {/* Descripción preservando saltos de línea */}
              <div className="text-gray-300 font-light text-base sm:text-lg leading-relaxed space-y-4 whitespace-pre-line">
                {project.longDescription}
              </div>
            </div>

            {/* Highlights / Puntos clave */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-6 pt-4 border-t border-white/5">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Sparkles className="text-primary" size={22} />
                  Puntos Clave & Funcionalidades
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex items-start gap-3.5 group"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Botón repositorio en GitHub */}
            {project.githubUrl && (
              <div className="pt-6 border-t border-white/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all"
                >
                  <Github size={18} />
                  <span>Ver código en GitHub</span>
                </a>
              </div>
            )}
          </motion.div>

          {/* COLUMNA DERECHA: Sidebar / Metadatos (1/3) */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8 sticky top-28"
          >
            {/* Card de Información & Stack */}
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-6 shadow-xl">
              {/* Botón Principal: Demo en Vivo */}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-primary text-black font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Ver Proyecto en vivo</span>
                  <Rocket size={16} />
                </a>
              ) : (
                <div className="w-full text-center py-3 px-4 rounded-xl border border-white/10 bg-white/5 text-gray-400 text-xs font-medium">
                  Despliegue privado / Sin demo pública
                </div>
              )}

              <div className="h-px bg-white/10" />

              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                  Rol en el proyecto
                </h4>
                <p className="text-base font-bold text-white">{project.role}</p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                  Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-md border border-white/10 bg-white/5 text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arquitectura / Conceptos adicionales */}
              {project.concepts && project.concepts.length > 0 && (
                <>
                  <div className="h-px bg-white/10" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                      Arquitectura & Enfoque
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.concepts.map((concept) => (
                        <span
                          key={concept}
                          className="px-3 py-1 text-xs rounded-md border border-primary/20 bg-primary/10 text-primary font-medium"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Card CTA de Contacto */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/20 space-y-4">
              <h3 className="text-lg font-bold text-white">
                ¿Te interesa un desarrollo similar?
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Diseño y desarrollo soluciones web escalables adaptadas a las
                necesidades reales de tu negocio.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
              >
                <span>Hablemos</span>
                <ExternalLink size={13} />
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
