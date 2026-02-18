"use client";

import { useMemo, useState } from "react";

const PHONE = "573155584063"; // sin +, formato wa.me
const MIN_ORDER = 12;

function waLinkFromForm(name: string, phone: string, message: string) {
  const msg = encodeURIComponent(
    `Hola Zulary 👋\n` +
      `Nombre: ${name || "____"}\n` +
      `Teléfono: ${phone || "____"}\n` +
      `Mensaje: ${message || "____"}\n\n` +
      `Quiero cotizar al por mayor (mínimo ${MIN_ORDER} unidades).`
  );
  return `https://wa.me/${PHONE}?text=${msg}`;
}

function waLinkQuick() {
  const msg = encodeURIComponent(
    `Hola Zulary 👋 Quiero cotizar gorras al por mayor.\nCantidad: ${MIN_ORDER}\nCiudad: ____\nReferencia(s): ____`
  );
  return `https://wa.me/${PHONE}?text=${msg}`;
}

export default function ContactoClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const disabled = useMemo(() => {
    return !name.trim() || !phone.trim() || !message.trim();
  }, [name, phone, message]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = waLinkFromForm(name, phone, message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div style={{ padding: "28px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ margin: "0 0 8px", fontSize: 44, letterSpacing: -0.8 }}>
          Contacto
        </h1>
        <p style={{ margin: 0, color: "rgba(241,245,249,.82)", fontWeight: 600 }}>
          Escríbenos por WhatsApp o llena el formulario y te respondemos.
        </p>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "1.4fr .9fr",
            gap: 16,
          }}
        >
          {/* FORM */}
          <div
            className="card"
            style={{
              padding: 18,
              background: "rgba(15, 23, 42, .55)",
              border: "1px solid rgba(255,255,255,.10)",
              borderRadius: 18,
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 10 }}>
              Formulario
            </div>

            <form onSubmit={onSubmit}>
              <div style={{ display: "grid", gap: 10 }}>
                <div style={{ display: "grid", gap: 6 }}>
                  <label style={{ fontSize: 13, color: "rgba(241,245,249,.8)", fontWeight: 700 }}>
                    Nombre
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,.16)",
                      outline: "none",
                      background: "rgba(2,6,23,.55)",
                      color: "#fff",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gap: 6 }}>
                  <label style={{ fontSize: 13, color: "rgba(241,245,249,.8)", fontWeight: 700 }}>
                    Teléfono
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej: 3155584063"
                    inputMode="tel"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,.16)",
                      outline: "none",
                      background: "rgba(2,6,23,.55)",
                      color: "#fff",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gap: 6 }}>
                  <label style={{ fontSize: 13, color: "rgba(241,245,249,.8)", fontWeight: 700 }}>
                    Mensaje
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`Cuéntanos qué referencias quieres y cuántas unidades.\nEj: Acrílica 5 panel x 12`}
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,.16)",
                      outline: "none",
                      resize: "vertical",
                      background: "rgba(2,6,23,.55)",
                      color: "#fff",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={disabled}
                  style={{
                    marginTop: 4,
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,.14)",
                    background: disabled
                      ? "rgba(148,163,184,.25)"
                      : "linear-gradient(135deg, #2563eb, #60a5fa)",
                    color: "#fff",
                    fontWeight: 900,
                    cursor: disabled ? "not-allowed" : "pointer",
                    boxShadow: disabled ? "none" : "0 12px 30px rgba(37,99,235,.25)",
                  }}
                >
                  Enviar por WhatsApp
                </button>

                {sent ? (
                  <div
                    style={{
                      marginTop: 6,
                      padding: "10px 12px",
                      borderRadius: 12,
                      background: "rgba(34,197,94,.12)",
                      border: "1px solid rgba(34,197,94,.25)",
                      color: "rgba(220,252,231,.95)",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    ✅ Listo. Se abrió WhatsApp con tu mensaje.
                  </div>
                ) : null}
              </div>
            </form>
          </div>

          {/* INFO */}
          <div
            className="card"
            style={{
              padding: 18,
              background: "rgba(15, 23, 42, .45)",
              border: "1px solid rgba(255,255,255,.10)",
              borderRadius: 18,
              backdropFilter: "blur(10px)",
              display: "grid",
              gap: 12,
              alignContent: "start",
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 16 }}>Atención rápida</div>

            <div
              style={{
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,.10)",
                background: "rgba(2,6,23,.35)",
              }}
            >
              <div style={{ fontSize: 12, color: "rgba(241,245,249,.75)", fontWeight: 800 }}>
                WhatsApp
              </div>
              <div style={{ fontSize: 18, fontWeight: 900, marginTop: 4 }}>
                315 558 4063
              </div>
              <div style={{ fontSize: 12, color: "rgba(241,245,249,.75)", marginTop: 6, fontWeight: 700 }}>
                Respuesta rápida para pedidos al por mayor.
              </div>

              <a
                href={waLinkQuick()}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: 12,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 14px",
                  borderRadius: 14,
                  fontWeight: 900,
                  textDecoration: "none",
                  color: "#fff",
                  background: "linear-gradient(135deg, #22c55e, #16a34a)",
                  border: "1px solid rgba(255,255,255,.12)",
                  boxShadow: "0 12px 30px rgba(34,197,94,.20)",
                }}
              >
                💬 Cotizar por WhatsApp
              </a>
            </div>

            <div style={{ display: "grid", gap: 8 }}>
              <div className="badge">Pedido mínimo: {MIN_ORDER} unidades</div>
              <div className="badge">Precios con IVA</div>
              <div className="badge">Envíos: Interrapidísimo • Coordinadora • Servientrega</div>
              <div className="badge">Pago: transferencia / link de pago</div>
            </div>

            <div
              style={{
                padding: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,.10)",
                background: "rgba(2,6,23,.25)",
                color: "rgba(241,245,249,.8)",
                fontSize: 13,
                fontWeight: 700,
                lineHeight: 1.6,
              }}
            >
              <b>Tip:</b> Para cotizar más rápido, escribe:
              <br />• Ciudad
              <br />• Referencias
              <br />• Cantidad total
            </div>
          </div>
        </div>

        {/* Responsive simple */}
        <style jsx>{`
          @media (max-width: 900px) {
            div[style*="grid-template-columns: 1.4fr .9fr"] {
              grid-template-columns: 1fr !important;
            }
            h1 {
              font-size: 34px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
