"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "Inmobiliaria Marisa",
    category: "Inmobiliaria",
    result: "+50 nuevos contactos",
    result1: "mayor confianza de clientes",
    result2: "sitio moderno y profesional",
    result3: "presencia online renovada",
    image: "/image10.png",
    url: "https://www.marisapuentespropiedades.com.ar",
  },
  {
    id: 2,
    name: "DOV repuestos automotrices",
    category: "Repuestos Automotrices",
    result: "Ventas online incrementadas",
    result1: "mayor visibilidad en línea",
    result2: "experiencia de compra mejorada",
    result3: "aumento en la fidelización de clientes",
    image: "/image9.png",
    url: "https://www.dovrepuestos.com.ar",
  },
  /* {
    id: 3,
    name: "Estudio Díaz",
    category: "Abogados",
    result: "Imagen profesional renovada",
    image: "/image5.png",
    url: "https://estudiodial.com",
  },*/
];

export default function ClientsSection() {
  return (
    <section id="clients" className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-3">
            Clientes
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sitios desarrollados para nuestros clientes
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Ayudamos a marcas y negocios a mejorar su presencia online con
            páginas modernas, rápidas y enfocadas en resultados.
          </p>
        </div>

        {/* GRID CLIENTES */}
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500 transition flex flex-col"
            >
              {/* MOCKUP */}
              <div className="relative h-75 overflow-hidden">
                <Image
                  src={client.image}
                  alt="Vista previa"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white font-medium">Vista previa</span>
                </div>
              </div>

              {/* INFO */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 text-center">
                  {client.name}
                </h3>

                <p className="text-zinc-400 mb-3 text-center">
                  {client.category}
                </p>

                <div className="mx-auto bg-blue-600/15 text-blue-400 px-4 py-2 rounded-xl text-sm mb-1">
                  {client.result}
                </div>
                <div className="mx-auto bg-blue-600/15 text-blue-400 px-4 py-2 rounded-xl text-sm mb-1">
                  {client.result1}
                </div>
                <div className="mx-auto bg-blue-600/15 text-blue-400 px-4 py-2 rounded-xl text-sm mb-1">
                  {client.result2}
                </div>

                {/* EMPUJA BOTÓN ABAJO */}
                <div className="mt-auto pt-4">
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-zinc-900 hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition text-center"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-16">
          <p className="text-zinc-400 mb-5">
            ¿Querés que tu negocio sea el próximo caso de éxito?
          </p>

          <a
            href="https://wa.me/5491126042925"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
