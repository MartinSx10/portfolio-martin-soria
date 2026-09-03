export type Treatment = "screenshot" | "links";
export type Status = "production" | "development";

export interface Project {
  slug: string;
  name: string;
  tag: string;
  description: string;
  stack: string[];
  treatment: Treatment;
  status: Status;
  /** Imagen real del sistema. Colocar el archivo en /public/projects/ y actualizar esta ruta. */
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  privateNote?: string;
}

export const projects: Project[] = [
  {
    slug: "sigem",
    name: "SIGEM Municipal",
    tag: "Full Stack",
    description:
      "ERP municipal modular para la Municipalidad del Dpto. Gral. San Martín: combustible y flota, empleados y áreas, roles por permiso y reportes avanzados en Excel.",
    stack: ["NestJS", "Angular", "Prisma", "PostgreSQL"],
    treatment: "screenshot",
    status: "production",
    image: "/projects/sigem.png",
    privateNote: "Sistema municipal — repositorio privado",
  },
  {
    slug: "era-trail",
    name: "ERA — Ulapes Trail Series",
    tag: "Plataforma",
    description:
      "Plataforma para un equipo de trail running de La Rioja: inscripción online con control real de cupos, resultados en vivo, check-in con QR y cuenta propia del corredor con historial y récords.",
    stack: ["Next.js", "NestJS", "Mapbox", "Cloudinary"],
    treatment: "links",
    status: "development",
    image: "/projects/era-trail.png",
    repoUrl: "https://github.com/MartinSx10",
  },
  {
    slug: "comercioplus",
    name: "ComercioPlus",
    tag: "SaaS propio",
    description:
      "Sistema de gestión para comercios: ventas con lector de código de barras, stock, cuentas corrientes, caja y reportes en Excel. Base de código reutilizada en despliegues como Barak.",
    stack: ["Angular", "Node.js", "PostgreSQL", "ExcelJS"],
    treatment: "screenshot",
    status: "production",
    image: "/projects/comercioplus.png",
    privateNote: "Repositorio privado",
  },
  {
    slug: "portal-ulapes",
    name: "Portal Municipal Ulapes",
    tag: "Frontend + CMS",
    description:
      "Sitio institucional con noticias, eventos, trámites y turismo, administrado con un CMS propio para que el municipio cargue su contenido sin depender de un desarrollador.",
    stack: ["Angular", "Tailwind", "Strapi", "TypeScript"],
    treatment: "links",
    status: "development",
    image: "/projects/portal-ulapes.png",
    repoUrl: "https://github.com/MartinSx10",
  },
  {
    slug: "che24",
    name: "CHE24",
    tag: "Full Stack",
    description:
      "Sistema para minimarket 24 horas con dos sucursales: datos aislados por sucursal, roles de usuario y gestión de ventas y stock.",
    stack: ["Angular", "Node.js", "PostgreSQL", "Docker"],
    treatment: "screenshot",
    status: "development",
    image: "/projects/che24.png",
    privateNote: "Repositorio privado",
  },
  {
    slug: "la-bomba",
    name: "LA BOMBA",
    tag: "Full Stack",
    description:
      "Sistema de punto de venta multi-sucursal para una cadena de accesorios de electrónica con 4 locales: caja diaria, pagos mixtos, transferencias entre sucursales y reportes.",
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL"],
    treatment: "screenshot",
    status: "development",
    image: "/projects/la-bomba.png",
    privateNote: "Repositorio privado",
  },
  {
    slug: "talia-nieto",
    name: "Talia Nieto — Blog personal",
    tag: "Marca personal",
    description:
      "Sitio de marca personal para una creadora de contenido: blog con categorías, cursos, recursos y testimonios, administrado desde un CMS propio.",
    stack: ["Next.js", "Strapi", "Tailwind", "Cloudinary"],
    treatment: "screenshot",
    status: "production",
    image: "/projects/talia-nieto.png",
    privateNote: "Repositorio privado",
  },
  {
    slug: "saddi-store",
    name: "SADDI STORE",
    tag: "E-commerce",
    description:
      "Tienda online de una estación de servicio con dos sucursales, carrito de compras y pagos con Mercado Pago. En producción.",
    stack: ["Next.js", "NestJS", "Prisma", "Mercado Pago"],
    treatment: "screenshot",
    status: "development",
    image: "/projects/saddi-store.png",
    privateNote: "Demo presentada a cliente",
  },
];
