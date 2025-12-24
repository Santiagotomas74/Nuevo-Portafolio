import "@/app/globals.css";
import { inter } from "@/lib/fonts";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'; // 1. Importar el componente

export const metadata = {
  title: "Santiago Taher | Full Stack Developer",
  description:
    "Full Stack Developer especializado en Next.js, React y Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} bg-background text-foreground antialiased`}
      >
        <Navbar />
        {children}
       
        
        {/* 2. Google Analytics (Reemplaza G-XXXXXXXXXX con tu ID real) */}
        <GoogleAnalytics gaId="G-QT1TL4W7EM" /> 
      </body>
    </html>
  );
}