import React from "react";
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Contact = () => {
  const contactInfo = [
    {
      title: "Dirección",
      value: "Av. Principal 1234, Ciudad",
      icon: "lucide:map-pin",
    },
    {
      title: "Email",
      value: "info@proingenier.com",
      icon: "lucide:mail",
    },
    {
      title: "Teléfono",
      value: "+593 1234 5678",
      icon: "lucide:phone",
    },
  ];

  return (
    <section id="contacto" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Contáctenos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos listos para ayudarle con sus necesidades de energía
            renovable y seguridad. Póngase en contacto con nosotros para una
            consulta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-100 shadow-md h-full">
              <CardBody className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Envíenos un mensaje
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Nombre"
                      placeholder="Ingrese su nombre"
                      variant="bordered"
                    />
                    <Input
                      label="Empresa"
                      placeholder="Nombre de su empresa"
                      variant="bordered"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Email"
                      placeholder="info@ejemplo.com"
                      type="email"
                      variant="bordered"
                    />
                    <Input
                      label="Teléfono"
                      placeholder="+593 1234 5678"
                      type="tel"
                      variant="bordered"
                    />
                  </div>

                  <Textarea
                    label="Mensaje"
                    placeholder="¿En qué podemos ayudarle?"
                    variant="bordered"
                    minRows={4}
                  />

                  <Button
                    color="primary"
                    className="w-full sm:w-auto"
                    size="lg"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <Card className="border border-gray-100 shadow-md overflow-hidden">
                <CardBody className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15562.341411717447!2d-80.73392714603268!3d-0.942573008392327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sec!4v1758785226095!5m2!1ses-419!2sec"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Ubicación de PROINGENIER"
                  ></iframe>
                </CardBody>
              </Card>

              <Card className="border border-gray-100 shadow-md">
                <CardBody className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Información de Contacto
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon
                              icon={item.icon}
                              className="text-primary text-xl"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">
                      Síguenos
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/p/Proingenier-100063786080900/"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Icon icon="logos:facebook" className="text-xl" />
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
