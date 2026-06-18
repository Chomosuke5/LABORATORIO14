import Head from "next/head";
import Link from "next/link";
import { getBlogPosts } from "../lib/db";

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <Head>
        <title>Blog de Optimización SEO y Rendimiento - Mi Sitio</title>
        <meta name="description" content="Lee nuestros artículos sobre cómo optimizar el SEO en Next.js, rendimiento web, e indexación en motores de búsqueda." />
        <meta name="keywords" content="Next.js, SEO, blog de optimización, rendimiento web, sitemaps" />
        <meta property="og:title" content="Blog de Optimización SEO - Mi Sitio" />
        <meta property="og:description" content="Artículos técnicos y consejos prácticos sobre el posicionamiento de aplicaciones Next.js." />
        <meta property="og:image" content="/images/seo_image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <nav style={{ marginBottom: "2rem" }}>
        <Link href="/" style={{ marginRight: "1rem", color: "#0070f3", textDecoration: "none" }}>← Inicio</Link>
        <Link href="/contacto" style={{ color: "#0070f3", textDecoration: "none" }}>Contacto</Link>
      </nav>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#111" }}>Nuestro Blog de SEO</h1>
      <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "2rem" }}>
        Descubre guías, tutoriales y mejores prácticas para llevar tus aplicaciones web al siguiente nivel.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {posts.map((post) => (
          <article key={post.slug} style={{ padding: "1.5rem", border: "1px solid #eaeaea", borderRadius: "10px", transition: "box-shadow 0.2s" }}>
            <h2 style={{ margin: "0 0 0.5rem 0", color: "#0070f3" }}>
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ margin: "0 0 1rem 0", color: "#444" }}>{post.description}</p>
            <small style={{ color: "#888" }}>Publicado el {post.date}</small>
          </article>
        ))}
      </div>
    </div>
  );
}
