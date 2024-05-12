import React from "react";
import { Tableone } from "./Tableone";

export function Tableg() {
  return (
    <div className="flex justify-center items-center flex-col h-full py-20 ">
      <h1
        id="problema"
        className="text-4xl mb-8 font-bold text-orange-500 text-center "
      >
        PROBLEMA DE ENFRIAMIENTO
      </h1>
      <div className="w-4/6 text-center mb-8 px-4">
        <p className="text-lg">
          En una emocionante aventura culinaria, un equipo de chefs descubre un
          antiguo recipiente líquido que contiene una mezcla misteriosa de agua
          y gelatina. La temperatura del líquido al ser encontrado es de
          <span className="font-bold text-orange-500"> 45.9°C</span>, pero al
          sacarlo a la superficie de la cocina, donde la temperatura ambiente es
          de <span className="font-bold text-orange-500">20.3°C</span>, comienza
          un proceso de enfriamiento.
          <span className="font-bold text-orange-500">
            Después de 30 minutos
          </span>{" "}
          de haber sido expuesto al aire fresco, la temperatura de la mezcla ha
          descendido a <span className="font-bold text-orange-500">36.1°C</span>
          . Suponiendo que el líquido tiene propiedades de enfriamiento
          similares a las de un objeto metálico, podemos modelar su enfriamiento
          utilizando la ley de enfriamiento de Newton.
        </p>
      </div>
      <div className="w-4/5 px-4">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Tableone />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <h2 className="text-2xl">
              Aquí se puede presenciar las 21 muestras de datos que tomamos
              dentro del tiempo estipulado de 100 minutos, donde la temperatura
              va disminuyendo a medida que el tiempo va pasando, del análisis de
              estos datos se crea una gráfica para luego realizar una ecuación
              diferencial que nos apoye a encontrar la constante k en nuestro
              ejercicio
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
