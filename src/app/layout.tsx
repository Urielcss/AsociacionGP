import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gilberto A.C. Puebla",
  description: "Construimos comunidades más sanas, educadas y con mejores oportunidades.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <head>
        <style>{`
          :root {
            --font-heading: ${playfair.style.fontFamily};
            --font-body: ${dmSans.style.fontFamily};
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
          }
          body {
            font-family: var(--font-body);
          }
        `}</style>
      </head>
      <body className={`${playfair.className} ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}