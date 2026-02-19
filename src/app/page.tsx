import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <div>
          <h1 className="h1">Gorras al por mayor en Colombia</h1>

          <p className="p">
            Venta exclusiva al por mayor. Pedido mínimo de <b>12 unidades</b>.
            Precios <b>con IVA</b>. Compra por WhatsApp y paga por transferencia
            Bancolombia.
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

            <Link className="btn" href="/tienda">
              Ver catálogo
            </Link>

            <Link className="btn" href="/pago">
              Pago en línea
            </Link>
          </div>

          <div className="kicker">
            Envíos a todo Colombia por Interrapidísimo, Coordinadora y
            Servientrega.
          </div>

          {/* PUNTO FÍSICO */}
          <div className="card" style={{ marginTop: 18, padding: 16 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>
              📍 Punto físico
            </div>
            <div style={{ color: "var(--muted)", lineHeight: 1.6 }}>
              CC Sabana Plaza – Piso 2 Local <b>267G</b>
              <br />
              Calle 13 #19-71
            </div>

            <div
              style={{
                marginTop: 12,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <a
                className="btn"
                href="https://www.google.com/maps?q=CC%20Sabana%20Plaza%20Calle%2013%2019-71%20Bogota"
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps
              </a>

              <Link className="btn btnPrimary" href="/tienda">
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>

        {/* PRODUCTOS DESTACADOS */}
        <div className="card cardShadow soft" style={{ padding: 18 }}>
          <div className="sectionTitle" style={{ marginBottom: 12 }}>
            Fotos reales (referencias)
          </div>

          <div className="hatGrid">
            <Link className="hatCard" href="/tienda">
              <Image
                className="hatImg"
                src="/productos/acrilica-5-panel.jpg"
                alt="Acrílica 5 panel"
                width={400}
                height={400}
              />
              <div className="hatLabel">Acrílica 5 panel</div>
            </Link>

            <Link className="hatCard" href="/tienda">
              <Image
                className="hatImg"
                src="/productos/acrilica-malla.jpg"
                alt="Acrílica malla"
                width={400}
                height={400}
              />
              <div className="hatLabel">Acrílica malla</div>
            </Link>

            <Link className="hatCard" href="/tienda">
              <Image
                className="hatImg"
                src="/productos/algodon-peinado.jpg"
                alt="Algodón peinado"
                width={400}
                height={400}
              />
              <div className="hatLabel">Algodón peinado</div>
            </Link>

            <Link className="hatCard" href="/tienda">
              <Image
                className="hatImg"
                src="/productos/malla-tono-a-tono.jpg"
                alt="Malla tono a tono"
                width={400}
                height={400}
              />
              <div className="hatLabel">Malla tono a tono</div>
            </Link>
          </div>

          <div style={{ marginTop: 12 }}>
            <Link className="btn btnPrimary" href="/tienda">
              Ver todo el catálogo →
            </Link>
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

      {/* MAPA */}
      <section style={{ marginTop: 40 }}>
        <div className="card cardShadow soft" style={{ padding: 22 }}>
          <h2 style={{ marginTop: 0 }}>¿Dónde estamos?</h2>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.6,
              marginTop: 8,
            }}
          >
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

          <div
            style={{
              marginTop: 14,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <a
              className="btn btnPrimary"
              href="https://www.google.com/maps?q=CC%20Sabana%20Plaza%20Calle%2013%2019-71%20Bogota"
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>

            <a
              className="btn"
              href="https://wa.me/573155584063"
              target="_blank"
              rel="noreferrer"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
