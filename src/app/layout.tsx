import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zulary-web.vercel.app"), // cambiar cuando tengas dominio propio

  // ✅ Google Search Console verification
  verification: {
    google: "JDqIZoAj5D0HizvPPMwGEYFe29Zvaj7LiUW5mQeTegU",
  },

  title: {
    default: "Zulary | Gorras al por mayor en Colombia",
    template: "%s | Zulary",
  },

  description:
    "Venta de gorras al por mayor en Colombia. Pedido mínimo 12 unidades. Precios con IVA. Punto físico en CC Sabana Plaza Bogotá. Envíos nacionales.",

  keywords: [
    "gorras al por mayor",
    "gorras por mayor Colombia",
    "mayorista de gorras Bogotá",
    "proveedor de gorras",
    "gorras para revender",
    "gorras acrílicas",
    "gorras malla",
  ],

  authors: [{ name: "Zulary Internacional SAS" }],
  creator: "Zulary Internacional SAS",
  publisher: "Zulary Internacional SAS",

  openGraph: {
    title: "Zulary | Gorras al por mayor en Colombia",
    description:
      "Mayorista de gorras en Colombia. Pedido mínimo 12 unidades. Punto físico en Bogotá. Envíos nacionales.",
    url: "https://zulary-web.vercel.app",
    siteName: "Zulary",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Zulary Gorras al por mayor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zulary | Gorras al por mayor",
    description:
      "Compra gorras al por mayor en Colombia. Pedido mínimo 12 unidades.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H5PFD1SYBH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H5PFD1SYBH');
          `}
        </Script>
      </head>

      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
          background:
            "radial-gradient(circle at 20% 20%, #1e3a8a 0%, transparent 40%), radial-gradient(circle at 80% 30%, #7c2d12 0%, transparent 40%), linear-gradient(135deg, #0f172a 0%, #111827 100%)",
          color: "#f1f5f9",
          minHeight: "100vh",
          scrollBehavior: "smooth",
        }}
      >
        <Header />

        <main className="container" style={{ paddingTop: 30 }}>
          {children}
        </main>

        <Footer />

        {/* BOTÓN FLOTANTE WHATSAPP */}
        <a
          href="https://wa.me/573155584063"
          target="_blank"
          rel="noreferrer"
          className="waFloat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.85 11.85 0 0012.03 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.2 1.6 6.03L0 24l6.15-1.6A11.94 11.94 0 0012.03 24c6.64 0 12.01-5.37 12.01-12 0-3.2-1.25-6.21-3.52-8.52zM12.03 21.8c-1.9 0-3.76-.5-5.4-1.44l-.38-.22-3.65.95.98-3.55-.25-.36A9.77 9.77 0 012.23 12c0-5.41 4.4-9.8 9.8-9.8 2.62 0 5.09 1.02 6.94 2.87A9.73 9.73 0 0121.83 12c0 5.41-4.4 9.8-9.8 9.8zm5.36-7.36c-.29-.14-1.71-.85-1.98-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.21-.45-2.3-1.44-.85-.76-1.42-1.7-1.58-1.99-.17-.29-.02-.45.12-.59.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.02c.14.19 2.02 3.08 4.9 4.32.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.14-.26-.21-.55-.36z" />
          </svg>
          WhatsApp
        </a>
      </body>
    </html>
  );
}
