import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ['latin'] 
});

export const metadata = {
  title: "Agustin Vera Portfolio",
  description: "Agustin Vera, Fullstack developer, Software developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
