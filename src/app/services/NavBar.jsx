"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-wide">
          ST
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
       

          <Link href="/#projects" className="hover:text-white transition">
            Proyectos
          </Link>

          <Link href="/#about" className="hover:text-white transition">
            Sobre mí
          </Link>

          <Link href="/#contact" className="hover:text-white transition">
            Contacto
          </Link>

          {/* CTA */}
          <Link
            href="/services"
            className="ml-4 px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-medium"
          >
            Ver servicios
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm text-gray-300">
      

            <Link href="/#projects" onClick={() => setOpen(false)}>
              Proyectos
            </Link>

            <Link href="/#about" onClick={() => setOpen(false)}>
              Sobre mí
            </Link>

            <Link href="/#contact" onClick={() => setOpen(false)}>
              Contacto
            </Link>

            {/* CTA Mobile */}
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-medium"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
