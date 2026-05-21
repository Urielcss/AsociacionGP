/* src/app/page.tsx */

import Navbar        from "@/components/layout/Navbar";
import Hero          from "@/components/sections/Hero";
import Stats         from "@/components/sections/Stats";
import Testimonios   from "@/components/sections/Testimonios";
import Aliados       from "@/components/sections/Aliados";
import QuienesSomos  from "@/components/sections/QuienesSomos";
import Cobertura     from "@/components/sections/Cobertura";
import Programas     from "@/components/sections/Programas";
import Sumate        from "@/components/sections/Sumate";
import Footer        from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Testimonios />
      <Aliados />
      <QuienesSomos />
      <Cobertura />
      <Programas />
      <Sumate />
      <Footer />
    </main>
  );
}