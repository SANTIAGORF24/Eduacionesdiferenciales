import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { Infobot } from "./Infobot";
import { Ecuabut } from "./Ecuabut";
import { Modalecu } from "./Modalecu";
import { Modalk } from "./Modalk";

const Ecuaciones = () => {
  return (
    <div className="w-full mx-auto py-10 px-4 sm:w-4/6">
      <div className="text-center mb-8">
        <h2 id="ecuaciones" className="text-4xl font-bold mb-4">
          ECUACION
        </h2>
      </div>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="text-center mb-8 sm:mb-0">
          <h2 className="text-2xl font-bold mb-4">ECUACION DIFERENCIAL</h2>
          <div className=" items-center justify-center mb-4">
            <BlockMath math="\\frac{dT}{dt} = k(T - T\_m)" />
            <Infobot />
          </div>
          <ol className="list-none p-0">
            <li className="mb-4">
              <strong>Ley de enfriamiento:</strong>
              <p>
                Donde: <BlockMath math="T\_m = 20.3" />
              </p>
              <p>
                Remplazamos: <BlockMath math="\\frac{dT}{dt} = k(T - 20.3)" />
              </p>
              <p className="font-bold mb-4">Solucion a la ecuacion:</p>
              <BlockMath math="\\int \\frac{dT}{T-20.3} = \\int k dt" />
              <BlockMath math="\\ln|T-20.3| = kt + c" />
              <BlockMath math="T-20.3 = e^{kt} \\cdot e^c" />
              <BlockMath math="T(t) = ce^{kt} + 20.3" />
              <p className="font-bold mb-4">
                {" "}
                Ecuación temperatura respecto al tiempo T(t):{" "}
              </p>
              <BlockMath math="T(t) = 25.6e^{-0.016t} + 20.3" />
            </li>
            <div className="flex flex-col space-y-5">
              <Ecuabut />
              <Modalk />
            </div>
          </ol>
        </div>
        <div className="w-full sm:w-1/2">
          <div>
            <h2 className="text-4xl font-bold mb-4">ANALISIS DE LA ECUACION</h2>
            <p className="text-2xl">
              La constante k, derivada de la ecuación diferencial, es esencial
              para entender la relación dinámica entre la temperatura de la
              gelatina líquida y el tiempo. Al ser negativa, indica una
              disminución constante en la temperatura a medida que el tiempo
              avanza. Este fenomeno puede interpretarse como una característica
              del proceso de enfriamiento de la gelatina líquida debido al
              contacto con el ambiente, donde la sustancia tiende a equilibrarse
              termicamente con su entorno a una velocidad decrecientes.
              <br />
              <br />
            </p>
            <p className="text-2xl">
              La magnitud de k, en este caso, -0.032, ofrece informacion
              adicional. Una constante k más grande implicaria una tasa de
              enfriamiento más rapida, mientras que un valor mas pequeño
              indicaria un enfriamiento más lento. En este contexto, el valor
              negativo sugiere que la gelatina liquida tiende a enfriarse con el
              tiempo, lo cual se evidencia con las observaciones experimentales
              de la disminucion progresiva de la temperatura.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8"></div>
    </div>
  );
};

export { Ecuaciones };
