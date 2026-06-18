import { getBlogPosts } from "../../lib/db";

export default async function handler(req, res) {
  // Obtener el host dinámicamente de la petición (ej. localhost:3000 o laboratorio14-nu7o.onrender.com)
  const host = req.headers.host || "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const BASE_URL = `${protocol}://${host}`;

  // Obtener los artículos dinámicos de la base de datos o CMS
  const posts = await getBlogPosts();
  
  // Páginas estáticas del sitio
  const staticUrls = ["", "/blog", "/contacto"]; // Quitamos el primer / para evitar doble barra si allUrls ya lo mapea
  
  // Combinar todas las URLs asegurando el formato correcto
  const dynamicUrls = posts.map((post) => `/blog/${post.slug}`);
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
