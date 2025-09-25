import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const About = () => {
  const features = [
    {
      title: "Experiencia Comprobada",
      description:
        "Años de experiencia en el diseño e implementación de soluciones de seguridad.",
      icon: "lucide:award",
    },
    {
      title: "Tecnología de Vanguardia",
      description:
        "Utilizamos los equipos y software más avanzados del mercado.",
      icon: "lucide:cpu",
    },
    {
      title: "Servicio Personalizado",
      description:
        "Cada solución se adapta a las necesidades específicas de cada cliente.",
      icon: "lucide:settings",
    },
    {
      title: "Soporte 24/7",
      description: "Asistencia técnica disponible todos los días del año.",
      icon: "lucide:clock",
    },
  ];

  return (
    <section id="nosotros" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Sobre Proingenier
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              En Proingenier nos especializamos en el diseño, implementación y
              mantenimiento de proyectos de ingeniería en energía solar y
              sistemas de seguridad para empresas e instituciones de diversos
              sectores.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro equipo de ingenieros altamente capacitados trabaja con las
              tecnologías más avanzadas en paneles fotovoltaicos y sistemas CCTV
              para garantizar soluciones eficientes y sostenibles.
            </p>
            <p className="text-lg text-gray-600">
              Ofrecemos proyectos integrales que incluyen desde la consultoría
              inicial hasta el mantenimiento continuo, asegurando que sus
              sistemas de energía renovable y seguridad funcionen de manera
              óptima en todo momento.
            </p>

            <Divider className="my-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon
                        icon={feature.icon}
                        className="text-primary text-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden border-none shadow-lg">
              <CardBody className="p-0">
                <img
                  src="images\aboutus.jpg"
                  alt="Instalación de paneles solares"
                  className="w-full h-auto"
                />
              </CardBody>
            </Card>
            <div className="absolute -bottom-6 -right-6 z-10 hidden md:block">
              <Card className="bg-primary text-white p-6 shadow-lg max-w-xs">
                <CardBody>
                  <h3 className="text-xl font-bold mb-2">
                    Compromiso con la Sostenibilidad
                  </h3>
                  <p>
                    Nuestro objetivo es ofrecer soluciones que combinen
                    seguridad y eficiencia energética, contribuyendo a un futuro
                    más sostenible y seguro.
                  </p>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
