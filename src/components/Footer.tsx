export default function Footer() {
  const mapsQuery = encodeURIComponent(
    "CC Sabana Plaza Piso 2 Local 267G, Calle 13 #19-71, Bogotá, Colombia"
  );
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: 40,
        background: "transparent",
      }}
    >
      <div className="container" style={{ paddingTop: 18, paddingBottom: 18, fontSize: 13 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
            alignItems: "start",
          }}
        >
          {/* Marca */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 950, fontSize: 14 }}>Zulary</div>
            <div style={{ color: "var(--muted)", fontWeight: 700, marginTop: 6 }}>
              Venta de gorras al por mayor
            </div>

            <div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.6 }}>
              WhatsApp: <strong style={{ color: "var(--text)" }}>315 558 4063</strong>
              <br />
              Atención rápida para pedidos al por mayor.
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                className="btn btnPrimary"
                href="https://wa.me/573155584063"
                target="_blank"
                rel="noreferrer"
                style={{ padding: "10px 12px" }}
              >
                WhatsApp
              </a>

              <a
                className="btn"
                href="/tienda"
                style={{ padding: "10px 12px" }}
              >
                Ver catálogo
              </a>
            </div>
          </div>

          {/* Punto físico */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 950, fontSize: 14 }}>Punto físico</div>
            <div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.6, fontWeight: 650 }}>
              CC Sabana Plaza – Piso 2 Local <b style={{ color: "var(--text)" }}>267G</b>
              <br />
              Calle 13 #19-71
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn" href={mapsLink} target="_blank" rel="noreferrer" style={{ padding: "10px 12px" }}>
                Abrir en Google Maps
              </a>
              <a className="btn" href="/contacto" style={{ padding: "10px 12px" }}>
                Contacto
              </a>
            </div>
          </div>

          {/* Envíos / pago / legal */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 950, fontSize: 14 }}>Información</div>

            <div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.6 }}>
              <div>
                <b style={{ color: "var(--text)" }}>Envíos:</b> Interrapidísimo • Coordinadora • Servientrega
              </div>
              <div style={{ marginTop: 6 }}>
                <b style={{ color: "var(--text)" }}>Pago:</b> Transferencia / link de pago
              </div>
              <div style={{ marginTop: 6 }}>
                <b style={{ color: "var(--text)" }}>Pedido mínimo:</b> 12 unidades
              </div>
              <div style={{ marginTop: 6 }}>
                <b style={{ color: "var(--text)" }}>Precios:</b> con IVA
              </div>
            </div>

            <div className="hr" />

            <div style={{ color: "var(--muted)", lineHeight: 1.6 }}>
              <div style={{ fontWeight: 900, color: "var(--text)" }}>Datos legales</div>
              <div style={{ marginTop: 6 }}>
                Zulary Internacional SAS
                <br />
                NIT: <b style={{ color: "var(--text)" }}>900367883-7</b>
              </div>

              <div style={{ marginTop: 10, fontSize: 12 }}>
                Tip: Para cotizar más rápido, envía: ciudad + referencias + cantidades.
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 14, color: "var(--muted)", fontWeight: 650 }}>
          © {new Date().getFullYear()} Zulary Internacional SAS — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
<div style={{ marginTop: 10 }}>
  <a href="/privacidad" style={{ marginRight: 12 }}>
    Política de Privacidad
  </a>
  <a href="/terminos">
    Términos y Condiciones
  </a>
</div>
