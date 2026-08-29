"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Cloud, Code2, Terminal } from "lucide-react";

// Datos organizados y optimizados (sin duplicados)
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5" />,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    title: "UI & Styling",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "Framer Motion", level: 85 },
      { name: "Vite / Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend Architecture",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Java", level: 65 },
      { name: "Python", level: 50 },
      { name: "Go", level: 40 },
    ],
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "PostgreSQL / MySQL", level: 75 },
      { name: "MongoDB / NoSQL", level: 70 },
      { name: "DynamoDB (Single Table)", level: 75 },
      { name: "Git & Postman", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "Vercel / Railway", level: 95 },
      { name: "AWS (Lambda, S3)", level: 60 },
      { name: "Docker", level: 50 },
      { name: "Render / Deployments", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    // Agregamos el mismo gradiente sutil que en la sección "Sobre mí" para continuidad
    <section
      id="skills"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#09090b]"
    >
      {/* Elementos de luz de fondo para dar profundidad al estilo zinc */}
      <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-4 justify-center md:justify-start">
              Habilidades{" "}
              <span className="text-primary italic font-light">& Stack</span>
            </h2>
            <div className="h-[1px] w-24 bg-primary/50 mt-4 mx-auto md:mx-0"></div>
          </div>
          <p className="text-gray-400 text-lg max-w-xl font-light leading-relaxed md:text-right">
            Un desglose técnico de mi expertise. Mi enfoque combina la agilidad
            del frontend con la robustez de la arquitectura backend.
          </p>
        </motion.div>

        {/* Grid Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`group relative p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 ${
                idx === 4 ? "lg:col-span-2 lg:w-1/2 lg:justify-self-center" : "" // Centra la última tarjeta si es impar
              }`}
            >
              {/* Header de Categoría */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/5 text-primary border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Lista de Skills */}
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm md:text-base font-medium text-gray-400 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-primary opacity-80 group-hover/skill:opacity-100 transition-opacity">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Barra de Progreso Custom */}
                    <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.2 + sIdx * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full bg-primary rounded-full relative"
                      >
                        {/* Brillo en la punta de la barra */}
                        <div className="absolute right-0 top-0 h-full w-4 bg-white/40 blur-[2px] rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decoración de fondo sutil */}
              <div className="absolute -bottom-6 -right-6 p-8 opacity-[0.02] group-hover:opacity-[0.04] pointer-events-none transition-opacity duration-500 transform group-hover:scale-110">
                <Terminal size={180} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
