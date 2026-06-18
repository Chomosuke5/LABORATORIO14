import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() && email.trim() && mensaje.trim()) {
      setSubmitted(true);
    } else {
      alert("Por favor completa todos los campos del formulario.");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <Head>
        <title>Contacto y Soporte - Mi Sitio Optimizado</title>
        <meta name="description" content="Ponte en contacto con nuestro equipo de expertos en optimización SEO y rendimiento de aplicaciones web." />
        <meta name="keywords" content="Next.js, SEO, contacto, soporte técnico, asesoría web" />
        <meta property="og:title" content="Contacto - Mi Sitio Optimizado" />
        <meta property="og:description" content="¿Necesitas ayuda con el SEO de tu sitio Next.js? Contáctanos hoy mismo." />
        <meta property="og:image" content="/images/seo_image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <nav style={{ marginBottom: "2rem" }}>
        <Link href="/" style={{ marginRight: "1rem", color: "#0070f3", textDecoration: "none" }}>← Inicio</Link>
        <Link href="/blog" style={{ color: "#0070f3", textDecoration: "none" }}>Blog</Link>
      </nav>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#111" }}>Contacto</h1>
      <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "2rem" }}>
        Completa el siguiente formulario o escríbenos directamente para recibir asesoría personalizada.
      </p>

      {submitted ? (
        <div style={{ padding: "2rem", backgroundColor: "#ecfdf5", color: "#065f46", borderRadius: "10px", border: "1px solid #a7f3d0", marginTop: "1rem", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
          <h2 style={{ margin: "0 0 0.5rem 0", color: "#047857" }}>¡Mensaje enviado con éxito!</h2>
          <p style={{ margin: "0 0 1rem 0" }}>Gracias <strong>{nombre}</strong>, nos pondremos en contacto contigo al correo <strong>{email}</strong> lo antes posible.</p>
          <button 
            onClick={() => { setSubmitted(false); setNombre(""); setEmail(""); setMensaje(""); }} 
            style={{ padding: "0.5rem 1rem", backgroundColor: "#059669", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold", transition: "background-color 0.2s" }}
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px" }} onSubmit={handleSubmit}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>Nombre:</label>
            <input 
              type="text" 
              placeholder="Tu nombre" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              style={{ width: "100%", padding: "0.75rem", border: "1px solid #ccc", borderRadius: "6px", fontSize: "1rem" }} 
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>Correo Electrónico:</label>
            <input 
              type="email" 
              placeholder="correo@ejemplo.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "0.75rem", border: "1px solid #ccc", borderRadius: "6px", fontSize: "1rem" }} 
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#374151" }}>Mensaje:</label>
            <textarea 
              rows="5" 
              placeholder="¿En qué podemos ayudarte?" 
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
              style={{ width: "100%", padding: "0.75rem", border: "1px solid #ccc", borderRadius: "6px", fontSize: "1rem" }}
            ></textarea>
          </div>
          <button 
            type="submit" 
            style={{ padding: "0.75rem 1.5rem", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", fontSize: "1rem", transition: "background-color 0.2s" }}
          >
            Enviar Mensaje
          </button>
        </form>
      )}
    </div>
  );
}
