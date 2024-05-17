"use client";

import { Nav } from "@/components/Nav/Nav";
import { Banner } from "@/components/Banner/Banner";
import { Liquido } from "@/components/Liquido/Liquido";
import { Tableg } from "@/components/Table1/Tableg";
import { Tables } from "@/components/Table1/Tables";
import TemperatureGraph from "@/components/Grafica/TemperatureGraph";
import { Ecuaciones } from "@/components/Ecuaciones/Ecuaciones";
import { Resultados } from "@/components/Resultados/Resultados";
import { Sliderpreguntas } from "@/components/Slider/Sliderpreguntas";
import Footer from "@/components/Footer/Footer";
import { Mathlan } from "@/components/Matlab/Mathlan";
import SnakeGame from "@/components/Gameone/SnakeGame";
import SpaceShipGame from "@/components/Gameone/SpaceShipGame";
import Laplace from "@/components/Laplace/Laplace";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Liquido />
      <Tableg />
      <Tables />
      <TemperatureGraph />
      <Ecuaciones />
      <SnakeGame />
      <Sliderpreguntas />
      <Resultados />
      <Mathlan />
      <Laplace />
      <SpaceShipGame />
      <Footer />
    </>
  );
}
