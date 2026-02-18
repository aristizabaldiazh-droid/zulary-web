export default function PagoPage() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Pago en línea (Transferencia)</h1>

      <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 30 }}>
        Realiza la transferencia y envía el comprobante por WhatsApp para confirmar el despacho.
      </p>

      {/* DATOS BANCARIOS */}
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 18,
          padding: 24,
          marginBottom: 24,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Datos Bancolombia</h2>

        <ul style={{ lineHeight: 2 }}>
          <li><strong>Banco:</strong> Bancolombia</li>
          <li><strong>Tipo:</strong> Ahorros</li>
          <li><strong>Titular:</strong> Zulary Internacional SAS</li>
          <li><strong>Cuenta:</strong> 04100001555</li>
        </ul>
      </div>

      {/* PASOS */}
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 18,
          padding: 24,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Pasos</h2>

        <ol style={{ lineHeight: 2 }}>
          <li>Elige tus productos (mínimo 12 unidades).</li>
          <li>Realiza la transferencia a la cuenta Bancolombia.</li>
          <li>Envía el comprobante por WhatsApp para confirmar.</li>
        </ol>

        <a
          href="https://wa.me/573155584063"
          style={{
            marginTop: 20,
            display: "inline-block",
            background: "linear-gradient(135deg,#2563eb,#1e40af)",
            color: "#fff",
            padding: "14px 22px",
            borderRadius: 14,
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Enviar comprobante por WhatsApp
        </a>
      </div>
    </div>
  );
}
