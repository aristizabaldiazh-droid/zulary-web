"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const LINKS = [
  { href: "/tienda", label: "Tienda" },
  { href: "/pago", label: "Pago en línea" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeLabel = useMemo(() => {
    const found = LINKS.find((l) => isActive(pathname || "", l.href));
    return found?.label ?? "";
  }, [pathname]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        background: "rgba(10, 12, 18, 0.78)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "#fff",
            minWidth: 210,
          }}
        >
          <Image src="/logo.png" alt="Zulary" width={44} height={44} priority />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 950, fontSize: 18, color: "#fff" }}>
              Zulary
            </div>
            <div
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.75)",
                fontWeight: 750,
              }}
            >
              Gorras al por mayor
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="navDesktop"
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {LINKS.map((l) => {
            const active = isActive(pathname || "", l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: "10px 12px",
                  borderRadius: 12,
                  fontWeight: 900,
                  color: "#fff",
                  textDecoration: "none",
                  position: "relative",
                  background: active ? "rgba(255,255,255,0.10)" : "transparent",
                  border: active
                    ? "1px solid rgba(255,255,255,0.18)"
                    : "1px solid transparent",
                  transition: "all .18s ease",
                }}
              >
                {l.label}
                <span
                  style={{
                    position: "absolute",
                    left: 12,
                    right: 12,
                    bottom: 6,
                    height: 2,
                    borderRadius: 999,
                    background: "linear-gradient(90deg, var(--primary), var(--accent))",
                    opacity: active ? 1 : 0,
                    transform: active ? "scaleX(1)" : "scaleX(.5)",
                    transformOrigin: "left",
                    transition: "all .18s ease",
                  }}
                />
              </Link>
            );
          })}

          {/* CTA pequeño */}
          <a
            className="btn btnPrimary"
            href="https://wa.me/573155584063"
            target="_blank"
            rel="noreferrer"
            style={{ padding: "10px 12px", borderRadius: 12 }}
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile button */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="navMobileBtn"
          style={{
            marginLeft: "auto",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 900,
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          className="navMobilePanel"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(10, 12, 18, 0.86)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="container" style={{ paddingTop: 10, paddingBottom: 14 }}>
            <div style={{ color: "rgba(255,255,255,.75)", fontWeight: 800, marginBottom: 10 }}>
              {activeLabel ? `Estás en: ${activeLabel}` : "Menú"}
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {LINKS.map((l) => {
                const active = isActive(pathname || "", l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      padding: "12px 14px",
                      borderRadius: 14,
                      fontWeight: 950,
                      color: "#fff",
                      textDecoration: "none",
                      background: active ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {l.label}
                  </Link>
                );
              })}

              <a
                className="btn btnPrimary"
                href="https://wa.me/573155584063"
                target="_blank"
                rel="noreferrer"
                style={{ width: "100%" }}
                onClick={() => setOpen(false)}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS mínimo para responsive sin tocar tu globals */}
      <style jsx>{`
        @media (max-width: 860px) {
          .navDesktop {
            display: none !important;
          }
          .navMobileBtn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
