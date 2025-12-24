"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          ST
        </Link>

        <div className="flex gap-6 text-sm text-muted">
          <Link href="#projects">Proyectos</Link>
          <Link href="#about">Sobre mí</Link>
          <Link href="#contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
