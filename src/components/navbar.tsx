import React from "react";
import {
  Navbar as HeroNavbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@heroui/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Servicios", href: "#servicios" },
    { name: "Mercados", href: "#mercados" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <HeroNavbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      className="bg-white/90 backdrop-blur-md border-b border-divider"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-white ring-2 ring-primary/30 shadow-sm overflow-hidden flex items-center justify-center">
              <img
                src="/images/iconoproingenier.jpg"
                alt="Proingenier"
                className="h-9 w-9 object-contain"
              />
            </div>
            <p className="font-bold text-inherit text-primary hidden sm:block">
              Proingenier
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              color="foreground"
              href={item.href}
              className="font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#contacto"
            variant="solid"
            className="font-medium"
          >
            Contáctenos
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color="foreground"
              className="w-full font-medium text-lg py-2"
              href={item.href}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};
