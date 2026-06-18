import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
        <meta name="keywords" content="Next.js, SEO, optimización web" />
        <meta property="og:title" content="Mi Sitio Optimizado" />
        <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
        <meta property="og:image" content="/images/seo_image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <nav style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <Link href="/blog" style={{ padding: "0.75rem 1.5rem", backgroundColor: "#0070f3", color: "white", textDecoration: "none", borderRadius: "8px", fontWeight: "600", transition: "background-color 0.2s" }}>
          Ver Blog
        </Link>
      </nav>

      <h1 style={{ fontSize: "2.5rem", color: "#1e293b", marginBottom: "0.5rem" }}>Bienvenido a mi página optimizada</h1>
      <p style={{ fontSize: "1.1rem", color: "#64748b", marginBottom: "2rem" }}>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>

      <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", marginBottom: "2rem" }}>
        <Image
          src="/images/seo_image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada"
          priority
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <DynamicComponent />
    </div>
  );
}
