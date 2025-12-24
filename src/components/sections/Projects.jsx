"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight, Code2 } from "lucide-react";

// Función auxiliar para definir los colores del status
const getStatusStyles = (status) => {
  switch (status?.toLowerCase()) {
    case "finished":
      return " bg-amber-500/10 text-amber-500 border-amber-500/20";
    case "in development":
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    case "maintenance only":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center gap-3 text-primary mb-2">
            <span className="h-px w-8 bg-primary" />
            
          </div>
          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tighter italic">
            Proyectos  <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent italic">_destacados</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl font-light leading-relaxed">
            Una selección de productos digitales donde la arquitectura robusta 
            se encuentra con una experiencia de usuario excepcional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-700 hover:border-primary/40 hover:bg-white/[0.05] hover:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-3">
                    {/* Badge de STATUS Dinámico */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-[0.1em] ${getStatusStyles(project.status)}`}>
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.status?.toLowerCase() === 'in development' ? 'bg-emerald-400' : 'bg-current'  } ${project.status?.toLowerCase() === 'finished' ?  'bg-amber-500':'bg-current'  } ${project.status?.toLowerCase() === 'maintenance only' ?  'bg-blue-500':'bg-current'  } `}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status?.toLowerCase() === 'in development' ? 'bg-emerald-400' : 'bg-current'  } ${project.status?.toLowerCase() === 'finished' ?  'bg-amber-500':'bg-current'  } ${project.status?.toLowerCase() === 'maintenance only' ?  'bg-blue-500':'bg-current'  } `}></span>
                      </span>
                      {project.status}
                    </div>
                    
                    <div className="text-primary text-[10px] font-bold uppercase tracking-[0.15em] block">
                      {project.role}
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 text-muted-foreground group-hover:text-primary transition-colors">
                    <Code2 size={20} />
                  </div>
                </div>

                <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light italic">
                  "{project.description}"
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-[11px] font-medium rounded-xl border border-white/5 bg-white/5 text-muted-foreground/80 group-hover:border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                     <span className="px-4 py-1.5 text-[11px] font-medium rounded-xl border border-white/5 bg-white/5 text-muted-foreground/40">
                       +{project.stack.length - 4}
                     </span>
                  )}
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-all group/btn"
                >
                  Explorar Proyecto
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}