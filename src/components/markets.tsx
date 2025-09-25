import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Markets = () => {
  const markets = [
    {
      title: "Centros de salud públicos y privados",
      description: "Sistemas de energía renovable y seguridad para proteger pacientes, personal médico y equipos sensibles en entornos hospitalarios.",
      icon: "lucide:heart-pulse",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Cuarteles de Bomberos",
      description: "Soluciones de control de acceso y videovigilancia para estaciones de bomberos y vehículos de emergencia.",
      icon: "lucide:flame",
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Edificios Gubernamentales",
      description: "Sistemas avanzados de seguridad y energía renovable para proteger instalaciones gubernamentales y garantizar la continuidad operativa.",
      icon: "lucide:landmark",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Flotas pesqueras",
      description: "Soluciones energéticas y de seguridad adaptadas a las condiciones específicas de la industria pesquera para proteger activos y operaciones.",
      icon: "lucide:fish",
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      title: "Soluciones energéticas, renovables y de seguridad residencial",
      description: "Sistemas integrados de paneles solares y seguridad para hogares y complejos residenciales que brindan tranquilidad y ahorro energético.",
      icon: "lucide:home",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Sector Industrial",
      description: "Proyectos de energía renovable y sistemas de seguridad para plantas industriales, optimizando costos operativos y garantizando la protección de activos.",
      icon: "lucide:factory",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="mercados" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Mercados Principales</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestros proyectos de ingeniería están diseñados para satisfacer las necesidades específicas de diversos sectores industriales y comerciales.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {markets.map((market, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-gray-100 shadow-sm h-full">
                <CardBody className="p-6">
                  <div className={`w-12 h-12 rounded-full ${market.color} flex items-center justify-center mb-4`}>
                    <Icon icon={market.icon} className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{market.title}</h3>
                  <p className="text-gray-600">{market.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};