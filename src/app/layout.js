import "@/app/globals.css";
import { inter } from "@/lib/fonts";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";



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


       
    
       
      </body>
    </html>
  );
}
