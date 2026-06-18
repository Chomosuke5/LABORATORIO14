// Simulación de base de datos o CMS
export async function getBlogPosts() {
  return [
    {
      slug: "consejos-seo-nextjs",
      title: "Consejos de SEO para Next.js",
      description: "Aprende las mejores prácticas para optimizar tu posicionamiento en Google con Next.js.",
      content: "El SEO en Next.js es sumamente potente gracias al renderizado híbrido (SSR/SSG)...",
      date: "2026-06-18",
    },
    {
      slug: "optimizacion-de-rendimiento",
      title: "Guía de Optimización de Rendimiento",
      description: "Descubre cómo acelerar la carga de tu web utilizando next/image y next/dynamic.",
      content: "La velocidad de carga es un factor clave de ranking de Google Core Web Vitals...",
      date: "2026-06-15",
    },
    {
      slug: "sitemaps-dinamicos-seo",
      title: "Cómo Generar Sitemaps Dinámicos",
      description: "Tutorial completo para implementar sitemaps dinámicos basados en bases de datos.",
      content: "Un sitemap XML bien estructurado ayuda a Googlebot a descubrir e indexar tus URLs...",
      date: "2026-06-10",
    },
  ];
}
