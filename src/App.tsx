import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Markets } from "./components/markets";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Markets />
        <About />
        <Contact />
        <section id="guias" className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Guías de Implementación
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Instrucciones para personalizar y publicar su sitio web.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
