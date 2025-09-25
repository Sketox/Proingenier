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
      </main>
      <Footer />
    </div>
  );
}
