import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"; // Importamos Space Grotesk
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuración de Space Grotesk
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | FloraFauna",
  },
  description:
    "Consultoría ambiental especializada en flora, fauna y biodiversidad para proyectos en Chile. Estudios de línea base, monitoreo y soporte SEIA con rigor científico.",
  keywords: [
    "consultoría ambiental",
    "flora y fauna",
    "línea base ambiental",
    "biodiversidad",
    "SEIA",
    "monitoreo biológico",
    "Chile",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Consultoría ambiental especializada en flora, fauna y biodiversidad para proyectos en Chile.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description:
      "Consultoría ambiental especializada en flora, fauna y biodiversidad para proyectos en Chile.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Fonts: Material Symbols Outlined (Iconos) */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      > 
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-T2Q6NRHL"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  />
</noscript>
<Script id="google-tag-manager" strategy="afterInteractive">
  {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-T2Q6NRHL');`}
</Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
