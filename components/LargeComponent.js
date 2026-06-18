export default function LargeComponent() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e2e8f0', marginTop: '20px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#1e293b' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Este es un componente cargado de forma diferida (Lazy Loaded)</h2>
      <p style={{ marginTop: '0.5rem', color: '#475569' }}>Cargado dinámicamente usando next/dynamic con SSR desactivado.</p>
    </div>
  );
}
