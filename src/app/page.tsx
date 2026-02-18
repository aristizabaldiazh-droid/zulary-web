export default function Home() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <div>
          <h1 className="h1">Gorras al por mayor en Colombia</h1>

          <p className="p">
            Venta exclusiva al por mayor. Pedido mínimo de <b>12 unidades</b>. Precios{" "}
            <b>con IVA</b>. Compra por WhatsApp y paga por transferencia Bancolombia.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              className="btn btnPrimary"
              href="https://wa.me/573155584063"
              target="_blank"
              rel="noreferrer"
            >
              Cotizar por WhatsApp
            </a>

            <a className="btn" href="/tienda">
              Ver catálogo
            </a>

            <a className="btn" href="/pago">
              Pago en línea
            </a>
          </div>

          <div className="kicker">
            Envíos a todo Colombia por Interrapidísimo, Coordinadora y Servientrega.
          </div>

          {/* PUNTO FÍSICO */}
          <div className="card" style={{ marginTop: 18, padding: 16 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>📍 Punto físico</div>
            <div style={{ color: "var(--muted)", lineHeight: 1.6 }}>
              CC Sabana Plaza – Piso 2 Local <b>267G</b>
              <br />
              Calle 13 #19-71
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                className="btn"
                href="https://www.google.com/maps?q=CC%20Sabana%20Plaza%20Calle%2013%2019-71%20Bogota"
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps
              </a>

              <a className="btn btnPrimary" href="/tienda">
                Ver catálogo
              </a>
            </div>
          </div>
        </div>

        {/* IMÁGENES DE PRODUCTOS (PREMIUM + HOVER) */}
        <div className="card cardShadow soft" style={{ padding: 18 }}>
          <div className="sectionTitle" style={{ marginBottom: 12 }}>
            Fotos reales (referencias)
          </div>

          <div className="hatGrid">
            <a className="hatCard" href="/tienda" aria-label="Acrílica 5 panel">
              <img
                className="hatImg"
                src="/productos/acrilica-5-panel.jpg"
                alt="Acrílica 5 panel"
              />
              <div className="hatLabel">Acrílica 5 panel</div>
            </a>

            <a className="hatCard" href="/tienda" aria-label="Acrílica malla">
              <img className="hatImg" src="/productos/acrilica-malla.jpg" alt="Acrílica malla" />
              <div className="hatLabel">Acrílica malla</div>
            </a>

            <a className="hatCard" href="/tienda" aria-label="Algodón peinado">
              <img
                className="hatImg"
                src="/productos/algodon-peinado.jpg"
                alt="Algodón peinado"
              />
              <div className="hatLabel">Algodón peinado</div>
            </a>

            <a className="hatCard" href="/tienda" aria-label="Malla tono a tono">
              <img
                className="hatImg"
                src="/productos/malla-tono-a-tono.jpg"
                alt="Malla tono a tono"
              />
              <div className="hatLabel">Malla tono a tono</div>
            </a>
          </div>

          <div style={{ marginTop: 12 }}>
            <a className="btn btnPrimary" href="/tienda">
              Ver todo el catálogo →
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{ marginTop: 34 }}>
        <h2 style={{ margin: "0 0 14px" }}>¿Cómo funciona?</h2>

        <div className="badges">
          {[
            "Venta al por mayor",
            "Pedido mínimo 12 unidades",
            "Precios con IVA",
            "Pago por transferencia Bancolombia",
            "Envíos nacionales",
          ].map((text) => (
            <div className="badge" key={text}>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* POR QUE ELEGIR */}
      <section style={{ marginTop: 40 }}>
        <div className="card cardShadow soft" style={{ padding: 22 }}>
          <h2 style={{ marginTop: 0 }}>¿Por qué elegir Zulary?</h2>

          <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
            <div>✅ Precios directos al por mayor</div>
            <div>✅ Pedido mínimo bajo: 12 unidades</div>
            <div>✅ Atención rápida por WhatsApp</div>
            <div>✅ Envíos a todo Colombia</div>
            <div>✅ Precios con IVA incluidos</div>
            <div>✅ Punto físico en Bogotá</div>
          </div>

          <div style={{ marginTop: 16 }}>
            <a
              className="btn btnPrimary"
              href="https://wa.me/573155584063"
              target="_blank"
              rel="noreferrer"
            >
              Cotizar ahora por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* MAPA / GOOGLE */}
      <section style={{ marginTop: 40 }}>
        <div className="card cardShadow soft" style={{ padding: 22 }}>
          <h2 style={{ marginTop: 0 }}>¿Dónde estamos?</h2>

          <p style={{ color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
            CC Sabana Plaza – Piso 2 Local <b>267G</b>, Calle 13 #19-71.
          </p>

          <div className="mapWrap" style={{ marginTop: 14 }}>
            <iframe
              title="Zulary - Punto físico"
              className="mapIframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=CC%20Sabana%20Plaza%20Calle%2013%2019-71%20Bogota&output=embed"
            />
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              className="btn btnPrimary"
              href="https://www.google.com/maps?q=CC%20Sabana%20Plaza%20Calle%2013%2019-71%20Bogota"
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>

            <a className="btn" href="https://wa.me/573155584063" target="_blank" rel="noreferrer">
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
