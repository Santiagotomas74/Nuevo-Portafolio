export const projects = [
  {
    slug: "dov-repuestos-ecommerce",
    title: "DOV Repuestos",
    status: "maintenance only",
    role: "Full Stack Developer",
    description:
      "Ecommerce profesional de repuestos automotrices con catálogo dinámico, carrito de compras, múltiples medios de pago, panel administrativo y sistema de gestión de órdenes.",

    longDescription: `
Desarrollé una plataforma ecommerce fullstack para una empresa real del rubro automotor, enfocada en digitalizar sus ventas, mejorar la experiencia de compra y optimizar la gestión operativa diaria.

La aplicación permite explorar un catálogo dinámico de repuestos mediante buscador avanzado por nombre, modelo y número OEM, con fichas individuales de productos, imágenes optimizadas, stock en tiempo real y navegación responsive para mobile y desktop.

Implementé un sistema completo de carrito de compras y checkout con múltiples métodos de pago: Mercado Pago, transferencia bancaria con comprobante manual y pago en efectivo para retiro en local.

También desarrollé lógica personalizada para reservas de stock temporales, vencimiento automático de órdenes no abonadas, liberación de stock mediante cron jobs y validación administrativa de pagos manuales.

Incluye panel de administración privado donde el negocio puede gestionar productos, visualizar órdenes, validar comprobantes, aprobar pagos en efectivo, monitorear ventas y administrar el flujo comercial completo.

El dashboard del usuario permite consultar historial de compras, estados de órdenes, pagos realizados y detalles de productos adquiridos.

El proyecto fue desarrollado con Next.js, React, TypeScript y PostgreSQL, utilizando Cloudinary para imágenes, integración con Mercado Pago, autenticación JWT y despliegue en Vercel con dominio propio.
`,

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
      "Mercado Pago API",
      "Cloudinary",
      "REST API",
      "Cron Jobs",
      "SEO",
      "Vercel",
    ],

    highlights: [
      "Catálogo dinámico con buscador por nombre, modelo y OEM",
      "Carrito de compras y checkout completo",
      "Pagos con Mercado Pago, transferencia y efectivo",
      "Validación manual de comprobantes desde panel admin",
      "Reserva y liberación automática de stock",
      "Dashboard de usuario con órdenes e historial",
      "Panel administrativo de ventas y operaciones",
      "Diseño responsive profesional para mobile y desktop",
    ],

    liveUrl: "https://dovrepuestos.com.ar",
    githubUrl: null,
  },
  {
    slug: "marisa-puentes-propiedades",
    title: "Marisa Puentes Propiedades",
    status: "maintenance only",
    role: "Full Stack Developer",
    description:
      "Sitio web inmobiliario profesional con catálogo dinámico de propiedades, panel de administración y sistema de consultas integrado.",

    longDescription: `
Desarrollé una plataforma web fullstack para una inmobiliaria real, enfocada en mejorar su presencia digital, captar nuevos clientes y optimizar la gestión interna de propiedades.

La aplicación permite visualizar propiedades en venta y alquiler mediante un catálogo dinámico con fichas individuales, galerías de imágenes y videos, filtros por operación, tipo y ubicación, además de páginas optimizadas para SEO local como propiedades en San Miguel.

Incluye un panel de administración privado donde la inmobiliaria puede crear, editar y eliminar propiedades, subir imágenes y videos, definir imagen principal, ordenar galerías manualmente y destacar publicaciones importantes.

También integré formularios de contacto y consultas por WhatsApp para facilitar la comunicación con potenciales clientes, junto con políticas de privacidad y estructura optimizada para indexación en Google.

El proyecto fue desarrollado utilizando Next.js, React, TypeScript y PostgreSQL, con almacenamiento multimedia en Cloudinary y despliegue en Vercel.
`,

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Cloudinary",
      "REST API",
      "SEO",
      "Vercel",
    ],

    highlights: [
      "Panel de administración completo para propiedades",
      "Carga de imágenes y videos con Cloudinary",
      "Orden manual de galería e imagen principal",
      "Filtros dinámicos por ciudad, operación y tipo",
      "SEO local orientado a búsquedas inmobiliarias",
      "Diseño responsive para mobile y desktop",
    ],

    liveUrl: "https://www.marisapuentespropiedades.com.ar",
    githubUrl: null,
  },
  ,
  {
    slug: "iphone-ecommerce",
    title: "iPhones E-commerce",
    status: "Finished",
    role: "Full Stack Developer",
    description:
      "Tienda online especializada en la venta de iPhones con catálogo dinámico, panel de administración y sistema de autenticación para usuarios y administradores.",
    longDescription: `
Desarrollé una plataforma ecommerce fullstack orientada a la venta de smartphones y consolas, enfocada tanto en la experiencia de compra del usuario como en la gestión administrativa del negocio.

La aplicación permite navegar un catálogo de productos, generar órdenes de compra y realizar pagos online mediante la integración con Mercado Pago. También incluye validación manual de pagos por transferencia y notificaciones automáticas por email.

Además, cuenta con un panel de administración para gestionar productos, pedidos y validar pagos, así como un panel de usuario donde los clientes pueden visualizar su historial de compras y hacer seguimiento del estado de sus pedidos.

El proyecto fue desarrollado utilizando Next.js, React, TypeScript y PostgreSQL, integrando autenticación con JWT, envío de emails con Nodemailer y desplegado en Vercel.
`,

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL (Supabase)",
      "Tailwind CSS",
      "Mercado Pago API",
      "JWT",
      "Nodemailer",
      "Vercel",
    ],
    highlights: [
      "Sistema de autenticación con roles (admin y usuario)",
      "Panel de administración para gestión de productos",
      "Catálogo dinámico con páginas de detalle por producto",
      "Optimización de consultas a base de datos PostgreSQL",
      "Diseño responsive para mobile y desktop",
    ],
    liveUrl: "https://iphones-e-commerce.vercel.app",
    githubUrl: null,
  },
  {
    slug: "truckers-talent",
    title: "Truckers Talent",
    status: "Finished",
    role: "Product Manager · Tech Lead · Full Stack Developer",
    description:
      "Plataforma para conectar empresas de transporte con talento especializado. Lideré el desarrollo técnico y la evolución del producto.",
    longDescription:
      "Truckers Talent es una plataforma web orientada a resolver la conexión entre empresas de transporte y candidatos calificados. Mi rol abarcó desde la planificación del producto hasta la implementación técnica, tomando decisiones de arquitectura, seguridad y escalabilidad.",
    stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "JWT", "CI/CD"],
    highlights: [
      "Liderazgo técnico y toma de decisiones arquitectónicas",
      "Autenticación y autorización con JWT y roles",
      "Optimización de consultas SQL",
      "Arquitectura modular y escalable",
    ],
    liveUrl: "https://www.truckerstalent.com",
    githubUrl: null,
  },
  {
    slug: "zatek-akademy",
    title: "Zatek Akademy",
    role: "Full Stack Developer",
    status: "Finished",
    description:
      "Plataforma educativa con cursos interactivos, gamificación y certificaciones automáticas.",
    longDescription:
      "Zatek Akademy es una plataforma educativa enfocada en programación e inteligencia artificial. Incluye cursos interactivos, sistema de progreso, logros, certificados automáticos en PDF y autenticación segura.",
    stack: [
      "Next.js",
      "React",
      "FastAPI",
      "PostgreSQL",
      "JWT",
      "OAuth2",
      "AWS S3",
    ],
    highlights: [
      "Sistema de gamificación (niveles y logros)",
      "Certificados automáticos en PDF",
      "CI/CD y despliegue en AWS y Vercel",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "perfumeria-online",
    title: "Perfumería Online",
    status: "Finished",
    role: "Full Stack Developer",
    description:
      "E-commerce moderno con carrito, autenticación y panel administrativo.",
    longDescription:
      "E-commerce desarrollado con Next.js y backend propio en Node.js, con manejo de estado global y base de datos relacional optimizada.",
    stack: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "MySQL"],
    highlights: [
      "Manejo de estado global con Redux Toolkit",
      "API REST modular",
      "Modelo relacional normalizado",
    ],
    liveUrl: "https://perfumes-arabes.vercel.app",
    githubUrl: null,
  },
  {
    slug: "secure-messaging-platform",
    title: "Plataforma de Mensajería Segura",
    role: "Full Stack Developer",
    status: "Finished",
    description:
      "Plataforma de mensajería en tiempo real con cifrado de extremo a extremo y autenticación robusta.",
    longDescription:
      "Plataforma full stack enfocada en privacidad y seguridad, que implementa mensajería en tiempo real mediante WebSockets y cifrado de extremo a extremo. Los mensajes se cifran en el cliente y se almacenan de forma segura en la base de datos.",
    stack: [
      "React",
      "Material UI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io",
      "JWT",
      "OpenSSL",
    ],
    highlights: [
      "Cifrado de extremo a extremo (E2E)",
      "Mensajería en tiempo real con WebSockets",
      "Arquitectura backend por capas",
      "Control de acceso y validación de datos",
      "Optimización de consultas SQL",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "pasteleria-selenita",
    title: "Pastelería Selenita",
    role: "Full Stack Developer",
    status: "maintenance only",
    description:
      "E-commerce con pagos online, panel admin y sistema de pedidos.",
    longDescription:
      "Aplicación web completa para una pastelería, con carrito de compras, panel administrativo y pagos integrados.",
    stack: ["React", "Node.js", "Express", "MySQL", "MercadoPago"],
    highlights: [
      "Integración con MercadoPago",
      "Panel administrativo completo",
      "Arquitectura modular y patrón MVP",
    ],
    liveUrl: "https://pasteleria-sele.vercel.app",
    githubUrl: null,
  },
];
