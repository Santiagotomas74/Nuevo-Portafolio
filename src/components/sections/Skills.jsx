"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Cloud, Code2, Terminal, Cpu, Globe } from "lucide-react";

// Datos organizados
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 70 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    title: "UI & Styling",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Material UI", level: 90 },
      { name: "Vite", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend Services",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Java", level: 65 },
      { name: "Python", level: 50 },
      { name: "Go", level: 40 },

    ],
  },
  {
    title: "Data & DevOps",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Postman", level: 80 },
      { name: "Docker", level: 50 },
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "BoltDB", level: 70 },

    ],
  },
  {
    title: "Cloud & DevOps", // Nueva categoría potente
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "Vercel / Railway", level: 95 }, // PaaS dominados
      { name: "AWS (S3 / EC2)", level: 50 }, // Nivel realista
      { name: "Git / GitHub", level: 85 },
      { name: "Render / Deploy", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Elemento de fondo decorativo */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter">
            Habilidades <span className="text-primary italic">& Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-light leading-relaxed">
            Un desglose técnico de mi expertise. Mi enfoque combina la agilidad del frontend 
            con la robustez de la arquitectura backend.
          </p>
        </motion.div>

        {/* Grid Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:bg-white/[0.04] transition-colors duration-500"
            >
              {/* Header de Categoría */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_-3px_rgba(var(--primary),0.3)]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground/90">
                  {category.title}
                </h3>
              </div>

              {/* Lista de Skills */}
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-primary opacity-80">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Barra de Progreso Custom */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: 0.2 + (sIdx * 0.1), 
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                        className="h-full bg-gradient-to-r from-primary/40 via-primary to-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)] relative"
                      >
                         {/* Brillo en la punta de la barra */}
                         <div className="absolute right-0 top-0 h-full w-2 bg-white/50 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decoración de fondo sutil (Líneas de código abstractas) */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                 <Terminal size={140} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}