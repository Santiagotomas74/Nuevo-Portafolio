"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Luces de fondo ambientales */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative rounded-[3rem] border border-white/10 bg-background/40 backdrop-blur-3xl p-8 sm:p-20 shadow-2xl overflow-hidden">
          
          {/* Encabezado */}
          <div className="relative z-10 mb-20 space-y-6 text-center">
            <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter bg-gradient-to-b from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent">
              ¿Hacemos algo <br /> increíble?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground/80 font-light">
              Estoy listo para transformar ideas en productos digitales de alto nivel. 
              Contáctame y hablemos de tu próximo proyecto.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-16">
            
            {/* Acciones de Contacto Rápidas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
              <ContactAction
                href="mailto:santiago_lucas1@hotmail.com"
                icon={<Mail size={22} />}
                label="Email"
                value="santiago_lucas1@hotmail.com"
                copyable
              />
              <ContactAction
                href="tel:+5491126042925"
                icon={<Phone size={22} />}
                label="Teléfono"
                value="+54 11 2604 2925"
              />
            </div>

            {/* Separador elegante */}
            <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Redes Sociales - CARDS ANCHAS (WIDE) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
              <ProfileCardWide
                href="https://linkedin.com/in/santiago-taher-239008317/"
                image="/cap-git.png"
                label="LinkedIn"
                username="Santiago Taher"
                description="Conecta conmigo profesionalmente"
              />
              <ProfileCardWide
                href="https://github.com/Santiagotomas74"
                image="/cap-linked.png"
                label="GitHub"
                username="Santiagotomas74"
                description="Explora mis repositorios y código"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ContactAction({ href, icon, label, value, copyable }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.a
      href={href}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative flex flex-col gap-3 rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.06] hover:border-white/20 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-primary">
          <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
            {icon}
          </div>
          <span className="text-sm font-bold uppercase tracking-widest opacity-70">{label}</span>
        </div>
        {copyable && (
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors z-20"
          >
            {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-muted-foreground" />}
          </button>
        )}
      </div>
      <span className="text-xl font-semibold text-foreground/90 truncate">{value}</span>
    </motion.a>
  );
}

function ProfileCardWide({ href, image, label, username, description }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -10 }}
      className="group flex flex-col gap-6 w-full"
    >
      {/* Contenedor Wide - Relación Aspecto 16:9 para capturas */}
      <div className="relative w-full aspect-video sm:aspect-[16/9] p-2 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent group-hover:from-primary/50 group-hover:shadow-[0_20px_50px_-12px_rgba(var(--primary),0.3)] transition-all duration-500">
        <div className="relative w-full h-full overflow-hidden rounded-[2.2rem] bg-neutral-900 border border-white/5">
          {image ? (
            <Image
              src={image}
              alt={label}
              fill
              className="object-cover object-top grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
              Sin imagen
            </div>
          )}
          
          {/* Overlay de degradado para mejorar legibilidad en la parte inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Badge de red social arriba a la derecha */}
          <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-xs font-bold tracking-widest uppercase shadow-xl">
            {label}
          </div>
        </div>
      </div>

      {/* Textos debajo de la card - Alineados a la izquierda para estilo Bento */}
      <div className="px-4 space-y-1 text-left">
        <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {username}
            </h3>
            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
        <p className="text-base text-muted-foreground font-light leading-relaxed italic">
          {description}
        </p>
      </div>
    </motion.a>
  );
}