"use client";

import { useMemo, useState } from "react";

type Product = {
  name: string;
  price: number;
  img?: string; // ruta en /public
};

const MIN_ORDER = 12;

const PRODUCTS: Product[] = [
  { name: "Acrílica 5 panel", price: 7500, img: "/productos/acrilica-5-panel.jpg" },
  { name: "Acrílica 6 panel", price: 6900, img: "/productos/acrilica-6-panel.jpg" },
  { name: "Acrílica 6 panel niño", price: 6900, img: "/productos/acrilica-6-panel-nino.jpg" },
  { name: "Acrílica malla", price: 7000, img: "/productos/acrilica-malla.jpg" },
  { name: "Algodón peinado", price: 8200, img: "/productos/algodon-peinado.jpg" },
  { name: "Flex", price: 7500, img: "/productos/flex.jpg" },
  { name: "Gorra combinada", price: 7000, img: "/productos/gorra-combinada.jpg" },
  { name: "Malla FB niño", price: 6000, img: "/productos/malla-fb-nino.jpg" },
  { name: "Malla flex", price: 7100, img: "/productos/malla-flex.jpg" },
  { name: "Malla frente blanco", price: 6000, img: "/productos/malla-frente-blanco.jpg" },
  { name: "Malla niño", price: 6000, img: "/productos/malla-nino.jpg" },
  { name: "Malla premium", price: 7000, img: "/productos/malla-premium.jpg" },
  { name: "Malla tono a tono", price: 6000, img: "/productos/malla-tono-a-tono.jpg" },
  { name: "Plana", price: 7000, img: "/productos/plana.jpg" },
  { name: "Plana niño", price: 7000, img: "/productos/plana-nino.jpg" },
  { name: "Prelavada", price: 7500, img: "/productos/prelavada.jpg" },
  { name: "Promoción", price: 3000, img: "/productos/promocion.jpg" },
  { name: "Tipo jean", price: 8200, img: "/productos/tipo-jean.jpg" },
  { name: "Velcro", price: 6500, img: "/productos/velcro.jpg" },
];

function waLink(productName: string) {
  const msg = encodeURIComponent(
    `Hola Zulary 👋 Quiero cotizar al por mayor.\nProducto: ${productName}\nCantidad: ${MIN_ORDER}\nCiudad: ____`
  );
  return `https://wa.me/573155584063?text=${msg}`;
}

function money(n: number) {
  return `$${n.toLocaleString("es-CO")} COP`;
}

export default function TiendaPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"recomendado" | "precio_asc" | "precio_desc" | "az">(
    "recomendado"
  );

  const list = useMemo(() => {
    const filtered = PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(q.trim().toLowerCase())
    );

    const sorted = [...filtered];
    if (sort === "precio_asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "precio_desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "az") sorted.sort((a, b) => a.name.localeCompare(b.name, "es"));

    return sorted;
  }, [q, sort]);

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ marginTop: 0, fontSize: 40, letterSpacing: -0.5 }}>Catálogo (al por mayor)</h1>
          <p style={{ color: "var(--muted)", marginTop: 6, fontWeight: 650 }}>
            Pedido mínimo: <strong>{MIN_ORDER} unidades</strong>. Precios <strong>con IVA</strong>.
          </p>
        </div>

        <a className="btn btnPrimary" href={waLink("Catálogo general")} target="_blank" rel="noreferrer">
          Cotizar por WhatsApp
        </a>
      </div>

      <div className="card" style={{ padding: 14, marginTop: 16 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 220px",
            gap: 12,
            alignItems: "center",
          }}
        >
          <input
            className="input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar producto... (ej: malla, acrílica, niño)"
          />

          <select className="input" value={sort} onChange={(e) => setSort(e.target.value as any)}>
            <option value="recomendado">Orden: recomendado</option>
            <option value="precio_asc">Precio: menor a mayor</option>
            <option value="precio_desc">Precio: mayor a menor</option>
            <option value="az">Nombre: A → Z</option>
          </select>
        </div>
      </div>

      {/* GRID PREMIUM */}
      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 14,
        }}
      >
        {list.map((p) => (
          <div key={p.name} className="card cardShadow soft" style={{ padding: 14 }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(0,0,0,.18)",
                height: 170,
              }}
            >
              <img
                src={p.img || "/logo.png"}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/logo.png";
                }}
              />
            </div>

            <div style={{ fontWeight: 950, marginTop: 10, letterSpacing: -0.2 }}>{p.name}</div>

            <div style={{ marginTop: 6, fontSize: 18, fontWeight: 950 }}>
              {money(p.price)}{" "}
              <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 800 }}>(con IVA)</span>
            </div>

            <div style={{ marginTop: 8, fontSize: 13, color: "var(--muted)", fontWeight: 650 }}>
              Mínimo {MIN_ORDER} unidades
            </div>

            <a
              className="btn btnPrimary"
              style={{ marginTop: 12, width: "100%" }}
              href={waLink(p.name)}
              target="_blank"
              rel="noreferrer"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <div className="card" style={{ marginTop: 14, padding: 16, color: "var(--muted)", fontWeight: 700 }}>
          No encontramos resultados para “{q}”.
        </div>
      )}
    </div>
  );
}
