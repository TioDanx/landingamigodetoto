import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: {
    default: "Ganamos365",
    template: "%s | Ganamos365",
  },
  description:
    "Sumate a Ganamos365, el casino online con bonos exclusivos, retiros 24hs y miles de jugadores activos. ¡Obtené tu bono YA!",
  keywords: [
    "casino online",
    "casino virtual",
    "casino online Argentina",
    "casino online con Mercado Pago",
    "casino online con retiros 24hs",
    "casino online con bonos",
    "casino online con bonos de bienvenida",
    "Ganamos365",
    "bono de bienvenida",
    "casino con Mercado Pago",
    "retirar dinero 24hs",
    "casino Argentina",
    "juegos de azar",
    "casino confiable",
  ],
  openGraph: {
    title: "Ganamos365 - Casino Online con Bonos y Retiros 24hs",
    description:
      "Sumate a Ganamos365, el casino online con bonos exclusivos, retiros 24hs y miles de jugadores activos.",
    url: "https://ganamos365landing.vercel.app", 
    siteName: "Ganamos365",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Logo de Ganamos365",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganamos365 - Casino Online",
    description:
      "Bonos de bienvenida, retiros rápidos, +10.000 jugadores activos. ¡Probá tu suerte en Ganamos365!",
    images: ["/logo.webp"],
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  metadataBase: new URL("https://ganamos365landing.vercel.app"), // <-- poné tu dominio aquí también
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`antialiased ${poppins.className} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
