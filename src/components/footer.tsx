import React from "react";
import { Link, Divider } from "@heroui/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Servicios",
      links: [
        { name: "Paneles Fotovoltaicos", href: "#servicios" },
        { name: "Sistemas CCTV", href: "#servicios" },
        { name: "Control de Acceso", href: "#servicios" },
        { name: "Integración de Sistemas", href: "#servicios" },
      ],
    },
    {
      title: "Mercados",
      links: [
        { name: "Centros de Salud", href: "#mercados" },
        { name: "Cuarteles de Bomberos", href: "#mercados" },
        { name: "Edificios Gubernamentales", href: "#mercados" },
        { name: "Sector Industrial", href: "#mercados" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "#nosotros" },
        { name: "Contacto", href: "#contacto" },
        { name: "Política de Privacidad", href: "#" },
        { name: "Términos de Servicio", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                P
              </div>
              <h3 className="text-2xl font-bold">PROINGENIER</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Proyectos de ingeniería en energía solar y sistemas de seguridad
              para proteger lo que más importa.
            </p>
            <p className="text-gray-400">
              <strong>Email:</strong> contacto@proingenier.com
              <br />
              <strong>Teléfono:</strong> +593 1234 5678
              <br />
              <strong>Dirección:</strong> Av. Principal 1234, Ciudad
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PROINGENIER. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://www.facebook.com/p/Proingenier-100063786080900/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
