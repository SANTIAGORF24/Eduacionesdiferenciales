import React, { useState } from "react";
import { GraficaDadas } from "./GraficaDadas";

const CodeDos = () => {
  const [isCopied, setIsCopied] = useState(false);

  const data = `syms s t k

% Definir la ecuación en el dominio de Laplace
T_s = (-20.3*k + 45.9*s) / (s*(s - k));

% Aplicar la transformada inversa de Laplace para obtener T(t)
T_t = ilaplace(T_s);

% Mostrar la solución
disp('La solución T(t) es:');
pretty(T_t)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="code-math bg-gray-900 text-gray-300 font-mono p-6 rounded-md shadow-md space-x-5">
      <pre className="code-console whitespace-pre-wrap text-sm">
        <code>{data}</code>
      </pre>
      <button
        className={`copy-btn bg-blue-500 text-white px-4 py-2 rounded-md text-sm mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isCopied ? "bg-green-500 hover:bg-green-600" : ""
        }`}
        onClick={handleCopy}
      >
        {isCopied ? "Copiado!" : "Copiar"}
      </button>
    </div>
  );
};

export default CodeDos;
