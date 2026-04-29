"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Ecommerce Celulares",
    image: "/image5.png", // 👈 reemplazar
    short: "Tienda online moderna para venta de tecnología.",
    desc: "Ideal para negocios que venden celulares, accesorios o tecnología.",
    url: "https://iphones-e-commerce.vercel.app",
    features: [
      "Catálogo de productos",
      "Buscador inteligente",
      "Carrito de compras",
      "WhatsApp directo",
    ],
    cta: "Quiero una igual",
  },
  {
    id: 2,
    title: "Web Inmobiliaria",
    image: "/image1.png", // 👈 reemplazar
    short: "Sistema moderno para venta y alquiler.",
    desc: "Perfecta para inmobiliarias que necesitan captar consultas.",
    url: "https://web-inmobiliaria.vercel.app/",
    features: [
      "Listado de propiedades",
      "Filtros por zona",
      "Mapa integrado",
      "WhatsApp asesor",
    ],
    cta: "Solicitar demo",
  },
];

export default function SolutionsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TITULO */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-3">
            Soluciones Web
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos listos para vender
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Elegí una solución profesional ya desarrollada y la adaptamos a tu
            negocio para lanzar rápido.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(item)}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-500 transition"
            >
              {/* IMAGEN DEMO */}
              <div className="relative h-50 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay opcional */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center"></div>
              </div>

              {/* INFO */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>

                <p className="text-zinc-400 mb-5">{item.short}</p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium hover:text-blue-300"
                >
                  Ver detalles →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA FINAL */}
        <div className="text-center mt-16">
          <p className="text-zinc-400 mb-5">
            ¿Querés una solución lista para tu negocio y empezar a vender
            rápido?
          </p>

          <a
            href="https://wa.me/5491126042925"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Te interesa una solución personalizada? Hablemos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
