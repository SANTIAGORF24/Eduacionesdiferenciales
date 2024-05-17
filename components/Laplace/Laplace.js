import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { InitialDataModal } from "./InitialDataModal";
import { SecondDataModal } from "./SecondDataModal";

const Laplace = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-orange-500 text-3xl font-bold mb-8">
        Método Laplace
      </h1>
      <div className="flex flex-row flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-8 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold">
                Ley de Enfriamiento de Newton
              </h2>
              <div className="mt-4 mx-auto">
                <InitialDataModal />
              </div>
              <div className="mt-4">
                <BlockMath math=" \frac{dT}{dt}=k(T-T_m) " />
                <BlockMath math=" \frac{dT}{dt}=kT-20.3k " />
                <BlockMath math=" \frac{dT}{dt}-kT=-20.3k " />
              </div>
              <h2 className="text-2xl font-semibold mt-8">TRANSFORMADA</h2>
              <div className="mt-4 mx-auto">
                <SecondDataModal />
              </div>
              <div className="mt-4">
                <BlockMath math=" \mathcal{L} \left\{ \frac{dT}{dt} - kT \right\} = \mathcal{L} \left\{ -20.3k \right\} " />
                <BlockMath math=" \mathcal{L} \left\{ \frac{dT}{dt} \right\} - k \cdot \mathcal{L} \left\{ T \right\} = -20.3k \cdot \mathcal{L} \left\{ 1 \right\} " />
                <BlockMath math=" sT(s) - 45.9 - k \cdot T(s) = -20.3k \cdot \frac{1}{s} " />
                <BlockMath math=" T(s)(s - k) = \frac{-20.3k}{s} + 45.9 " />
                <BlockMath math=" T(s) = \frac{-20.3k + 45.9s}{s(s - k)} " />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold">SOLUCIÓN DEL SISTEMA</h2>
            <div className="mt-4">
              <BlockMath math=" -Ak = -20.3k " />
              <BlockMath math=" A = 20.3 " />
              <BlockMath math=" 45.9 = 20.3 + B " />
              <BlockMath math=" B = 25.6 " />
              <BlockMath math=" T(s) = \frac{20.3}{s} + \frac{25.6}{s - k} " />
            </div>
            <h2 className="text-2xl font-semibold mt-8">
              TRANSFORMADA INVERSA
            </h2>
            <div className="mt-4">
              <BlockMath math=" T(t) = \mathcal{L}^{-1} \left\{ \frac{20.3}{s} \right\} + \mathcal{L}^{-1} \left\{ \frac{25.6}{s - k} \right\} " />
              <BlockMath math=" T(t) = 20.3 \cdot \mathcal{L}^{-1} \left\{ \frac{1}{s} \right\} + 25.6 \cdot \mathcal{L}^{-1} \left\{ \frac{1}{s - k} \right\} " />
              <BlockMath math=" T(t) = 20.3 + 25.6e^{kt} " />
            </div>
            <h2 className="text-2xl font-semibold mt-8">
              Ecuación temperatura respecto al tiempo T(t)
            </h2>
            <div className="mt-4">
              <BlockMath math=" T(t) = 25.6e^{-0.016t} + 20.3 " />
            </div>
            <p className="text-sm font-semibold mt-8">
              Y el valor de K como resultado de reemplazar con datos recopilado
              de la tabla.{" "}
            </p>
            <div className="mt-4">
              <BlockMath math=" 36.1 = 25.6e^{(k-30)} + 20.3 " />
              <BlockMath math=" \frac{15.8}{25.6} = e^{-0.016t} " />
              <BlockMath math=" \left( \ln \left| \frac{15.8}{25.6} \right| \right) / 30 = k " />
              <BlockMath math=" k = -0.016 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laplace;
