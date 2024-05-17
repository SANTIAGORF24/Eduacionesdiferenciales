import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export function Nav() {
  return (
    <Navbar shouldHideOnScroll className="">
      <NavbarBrand>
        <Image
          src="/assets/img/logo.jpg"
          className="w-100"
          width={120}
          height={120}
          style={{ width: "auto", height: "auto" }} // Agrega estos estilos
          alt="logo"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#inicio" className="text-orange-500">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#problema" className="text-orange-500">
            Tablas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#grafica" className="text-orange-500">
            Grafica
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#ecuaciones" className="text-orange-500">
            Ecuaciones
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#laplace" className="text-orange-500">
            Laplace
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#DiferencialSnake" className="text-orange-500">
            DiferencialSnake
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#DiferencialSpace" className="text-orange-500">
            DiferencialSpace
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" href="#resultados" variant="flat">
            Resultados
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
