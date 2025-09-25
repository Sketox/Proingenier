import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      title: "Paneles Fotovoltaicos",
      description:
        "Diseño e instalación de sistemas de energía solar para reducir costos energéticos y contribuir a la sostenibilidad ambiental.",
      icon: "lucide:sun",
      image: "/images/paneles.jpg",
    },
    {
      title: "Sistemas CCTV",
      description:
        "Centros de monitoreo con múltiples pantallas para vigilancia en tiempo real y grabación de alta definición.",
      icon: "lucide:video",
      image: "/images/cctv.jpg",
    },
    {
      title: "Control de Acceso",
      description:
        "Soluciones avanzadas para gestionar y restringir el acceso a áreas sensibles mediante tecnologías biométricas y tarjetas inteligentes.",
      icon: "lucide:key",
      image: "/images/acceso.jpg",
    },
    {
      title: "Integración de Sistemas",
      description:
        "Unificación de sistemas de energía renovable y seguridad en una plataforma centralizada para una gestión eficiente.",
      icon: "lucide:layers",
      image: "/images/sistemas.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desarrollamos proyectos de ingeniería en energía renovable y
            sistemas de seguridad adaptados a las necesidades específicas de
            cada cliente.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-md">
                <CardBody className="p-0 flex flex-col md:flex-row">
                  <div
                    className="w-full md:w-2/5 h-48 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="p-6 w-full md:w-3/5">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Icon
                          icon={service.icon}
                          className="text-primary text-xl"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
