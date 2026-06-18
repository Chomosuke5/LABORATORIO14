import { getBlogPosts } from "../../lib/db";

const BASE_URL = "https://mi-sitio.com";

export default async function handler(req, res) {
  // Obtener los artículos dinámicos de la base de datos o CMS
  const posts = await getBlogPosts();
  
  // Páginas estáticas del sitio
  const staticUrls = ["/", "/blog", "/contacto"];
  
  // Páginas dinámicas basadas en los slugs de la base de datos
  const dynamicUrls = posts.map((post) => `/blog/${post.slug}`);
  
  // Combinar todas las URLs
  const allUrls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
