export default function NosotrosPage() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Nosotros</h1>

      <div className="card" style={{ padding: 16 }}>
        <p style={{ color: "rgba(255,255,255,0.82)", fontWeight: 600, lineHeight: 1.7 }}>
          En <strong>Zulary</strong> nos especializamos en venta de gorras al por mayor en Colombia.
          Atendemos por WhatsApp, manejamos <strong>precios con IVA</strong> y despachamos a todo el país.
        </p>

        <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
          <div className="badge">Pedido mínimo: 12 unidades</div>
          <div className="badge">Envíos: Interrapidísimo, Coordinadora, Servientrega</div>
          <div className="badge">Pago: Transferencia / Link de pago</div>
        </div>
      </div>
    </div>
  );
}
