"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2, Cpu, Database, Layout, Sparkles, Terminal } from "lucide-react";
import { universityProjects } from "@/data/universityProjects";

export default function AcademicProjectsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="academic-projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 space-y-4"
      >
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter">
          Proyectos Académicos
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg font-light leading-relaxed">
          Explora los fundamentos. Ingeniería de software, algoritmos complejos y 
          sistemas de bajo nivel desarrollados durante mi formación en la UNGS.
        </p>
      </motion.div>

      <div className="space-y-6">
        {universityProjects.map((project, index) => {
          const isOpen = openIndex === index;
          
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                isOpen 
                ? "border-primary/40 bg-white/[0.04] shadow-2xl shadow-primary/5" 
                : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start justify-between p-8 text-left"
              >
                <div className="space-y-3 flex-1 pr-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {project.subject}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-muted-foreground transition-all duration-300 ${isOpen ? "opacity-0 h-0" : "opacity-100"}`}>
                    {project.description}
                  </p>
                </div>
                
                <div className={`p-2 rounded-full border border-white/10 transition-transform duration-500 ${isOpen ? "rotate-180 bg-primary text-white" : "text-muted-foreground"}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <div className="px-8 pb-8 pt-2 space-y-8">
                      {/* Descripción Larga */}
                      <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-4xl">
                        {project.longDescription}
                      </p>

                      {/* Info Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Conceptos e Ingeniería */}
                        <div className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                          <div className="flex items-center gap-2 text-primary">
                            <Cpu size={18} />
                            <h4 className="text-sm font-bold uppercase tracking-wider">Fundamentos Tecnológicos</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.concepts.map((concept) => (
                              <span key={concept} className="text-xs px-3 py-1.5 rounded-lg bg-background border border-white/5 text-muted-foreground">
                                {concept}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Stack Técnico */}
                        <div className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                          <div className="flex items-center gap-2 text-primary">
                            <Terminal size={18} />
                            <h4 className="text-sm font-bold uppercase tracking-wider">Herramientas & Stack</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="text-xs px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/20 text-primary-foreground">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Highlights con Iconos */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Logros del Proyecto</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground group/item">
                              <Sparkles size={14} className="mt-0.5 text-primary opacity-50 group-hover/item:opacity-100 transition-opacity" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}