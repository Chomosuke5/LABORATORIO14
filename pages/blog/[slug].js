import Head from "next/head";
import Link from "next/link";
import { getBlogPosts } from "../../lib/db";

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);
  return {
    props: { post },
  };
}

export default function BlogPost({ post }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <Head>
        <title>{post.title} - Blog Mi Sitio</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={`Next.js, SEO, ${post.title.toLowerCase()}`} />
        <meta property="og:title" content={`${post.title} - Blog Mi Sitio`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="/images/seo_image.png" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
      </Head>

      <nav style={{ marginBottom: "2rem" }}>
        <Link href="/blog" style={{ marginRight: "1rem", color: "#0070f3", textDecoration: "none" }}>← Volver al Blog</Link>
      </nav>

      <article>
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "#111" }}>{post.title}</h1>
          <small style={{ color: "#888" }}>Publicado el {post.date}</small>
        </header>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#333" }}>{post.content}</p>
      </article>
    </div>
  );
}
