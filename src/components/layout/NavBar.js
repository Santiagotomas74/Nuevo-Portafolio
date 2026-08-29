"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Proyectos", href: "/#projects" },
  { name: "Sobre mí", href: "/#about" },
  { name: "Contacto", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta el scroll para adaptar la transparencia de la barra
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 py-3 px-6"
            : "bg-transparent py-4 px-6 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo tipo Dev */}
          <Link
            href="/"
            className="group flex items-center gap-1 font-bold text-base tracking-wider text-white"
          >
            <span className="text-primary font-mono transition-transform group-hover:-translate-x-0.5">
              &lt;
            </span>
            <span className="font-mono tracking-tight text-white">ST</span>
            <span className="text-primary font-mono transition-transform group-hover:translate-x-0.5">
              /&gt;
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium text-gray-300">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Principal */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-black transition-all duration-300 shadow-sm hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Ver servicios</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Botón Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white border border-white/10 bg-white/5 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menú Mobile Desplegable */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden pt-4 mt-3 border-t border-white/10"
            >
              <div className="flex flex-col gap-2 py-2 text-sm text-gray-300">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-primary/20"
                >
                  <span>Ver servicios</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
