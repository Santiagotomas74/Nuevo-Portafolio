export const universityProjects = [
  {
    slug: "flight-management-system",
    title: "Sistema de Gestión de Vuelos",
    subject: "Bases de Datos · Backend",
    description:
      "Sistema backend para gestión de vuelos con lógica de negocio en base de datos, transacciones y control de concurrencia.",
    longDescription:
      "Proyecto académico desarrollado en Go y PostgreSQL enfocado en la implementación de lógica de negocio a nivel base de datos. El sistema modela el funcionamiento de una aerolínea, permitiendo la apertura de vuelos, reserva y anulación de pasajes, check-in de asientos y manejo automático de errores.",
    concepts: [
      "Transacciones",
      "Concurrencia",
      "Isolation Levels",
      "ACID",
      "Integridad referencial",
    ],
    technologies: [
      "Go",
      "PostgreSQL",
      "Stored Procedures",
      "Triggers",
      "JSON",
      "BoltDB",
    ],
    highlights: [
      "Lógica de negocio implementada en stored procedures y triggers",
      "Validaciones consistentes a nivel base de datos",
      "Manejo correcto de concurrencia y aislamiento de transacciones",
      "Comparación práctica entre modelo relacional y NoSQL",
    ],
  },
  {
  slug: "engineering-academic-projects",
  title: "Proyectos Académicos en Ingeniería de Software",
  subject: "Java · Python · Assembler · Algoritmos",
  description:
    "Conjunto de proyectos académicos enfocados en POO, algoritmos, testing y programación de bajo nivel.",
  longDescription:
    "Desarrollo de múltiples proyectos académicos en distintos lenguajes y paradigmas, aplicando conceptos de programación orientada a objetos, algoritmos de optimización, testing y arquitectura de software.",
  concepts: [
    "POO",
    "Algoritmos",
    "Testing",
    "Arquitectura MVP",
    "Programación de bajo nivel",
  ],
  technologies: [
    "Java",
    "Python",
    "Assembler ARM",
    "JUnit",
    "JMapViewer",
    "Raspberry Pi",
  ],
  highlights: [
    "Simulación de sistemas complejos en Java",
    "Implementación de algoritmos clásicos (Prim, Mochila)",
    "Testing unitario con JUnit",
    "Desarrollo de juegos y simulaciones",
    "Programación en bajo nivel sobre ARM",
  ],
}

];
