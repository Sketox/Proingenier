import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Proyectos de Ingeniería en Energía Solar y Sistemas de Seguridad
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Especialistas en instalación de paneles fotovoltaicos y sistemas
              CCTV para monitoreo de seguridad con tecnología de vanguardia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                color="primary"
                variant="solid"
                size="lg"
                as="a"
                href="#servicios"
                className="font-medium bg-white text-primary hover:bg-white/90"
                startContent={<Icon icon="lucide:shield" />}
              >
                Nuestros Servicios
              </Button>
              <Button
                color="default"
                variant="flat"
                size="lg"
                as="a"
                href="#contacto"
                className="font-medium text-white bg-white/20 hover:bg-white/30"
                startContent={<Icon icon="lucide:phone" />}
              >
                Contáctenos
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
