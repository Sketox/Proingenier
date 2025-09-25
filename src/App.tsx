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
            <div className="text-center mb-12"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
