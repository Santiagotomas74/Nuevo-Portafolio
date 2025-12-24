"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Star } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      institution: "Universidad Nacional de General Sarmiento (UNGS)",
      degree: "Licenciatura en Sistemas",
      status: "4.º año en curso",
      description:
        "Formación orientada a ingeniería de software, arquitectura, prototipado, gestión de proyectos, testing y diseño centrado en el usuario.",
      icon: <GraduationCap className="w-5 h-5" />,
      current: true,
    },
    {
      institution: "UTN - Diplomatura en Desarrollo Web Full Stack",
      degree: "Diplomatura Full Stack Developer",
      status: "Finalizado — 2021",
      description:
        "Formación práctica en desarrollo web moderno utilizando HTML5, CSS3, JavaScript, React.js, Node.js, MySQL y MongoDB. Desarrollo de proyectos full stack y consumo de APIs REST.",
      icon: <BookOpen className="w-5 h-5" />,
      current: false,
    },
  ];

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          {/* Título Monumental */}
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent italic">
              Formación
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl font-light leading-relaxed">
              Base académica y técnica centrada en la ingeniería de software y la 
              construcción de productos digitales escalables.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Punto en la línea de tiempo */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 z-10 transition-colors group-hover:border-primary/50">
                  <div className={`h-2.5 w-2.5 rounded-full ${item.current ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
                </div>

                {/* Tarjeta de Formación */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${item.current ? "border-primary/30 text-primary bg-primary/5" : "border-white/10 text-muted-foreground"}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.institution}
                  </h3>
                  
                  <p className="text-lg font-medium text-foreground/80 mb-4">
                    {item.degree}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Detalle decorativo inferior */}
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
                    <Star size={14} className="text-primary" />
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">Educación de alto nivel</span>
                  </div>
                </div>
              </motion.div>
            ))}
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}