import React from "react";

import Graficatit from "./Graficatit";
import CodeDos from "./CodeDos";

export function Matlab() {
  return (
    <div className="py-10">
      <h1 className="text-center text-2xl font-bold mb-8 px-4 sm:px-0">
        MATLAB
      </h1>
      <div className="sm:flex-row justify-center mx-auto w-full sm:w-4/5 lg:w-3/4 flex-wrap">
        <CodeDos />
      </div>
    </div>
  );
}
