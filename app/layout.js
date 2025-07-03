import "./globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "E&G Gambling",
    template: "%s | E&G Gambling",
  },
  description:
    "Sumate a E&G Gambling, el casino online con bonos exclusivos, retiros 24hs y miles de jugadores activos. ¡Obtené tu bono YA!",
  keywords: [
    "casino online",
    "casino virtual",
    "casino online Argentina",
    "casino online con Mercado Pago",
    "casino online con retiros 24hs",
    "casino online con bonos",
    "casino online con bonos de bienvenida",
    "E&G Gambling",
    "bono de bienvenida",
    "casino con Mercado Pago",
    "retirar dinero 24hs",
    "casino Argentina",
    "juegos de azar",
    "casino confiable",
  ],
  openGraph: {
    title: "E&G Gambling - Casino Online con Bonos y Retiros 24hs",
    description:
      "Sumate a E&G Gambling, el casino online con bonos exclusivos, retiros 24hs y miles de jugadores activos.",
    url: "https://E&GGambling.vercel.app",
    siteName: "E&G Gambling",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Logo de E&G Gambling",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E&G Gambling - Casino Online",
    description:
      "Bonos de bienvenida, retiros rápidos, +10.000 jugadores activos. ¡Probá tu suerte en E&G Gambling!",
    images: ["/logo.webp"],
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  metadataBase: new URL("https://E&GGambling.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`antialiased ${urbanist.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
