import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Cinem } from "../Cinem/Cinem";

export function Liquido() {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-white">
      <div className="w-4/6">
        <div className="flex flex-col">
          <Tabs
            aria-label="Options"
            key="solid"
            variant="solid"
            color="warning"
          >
            <Tab key="Liquido" title="Liquido">
              <Card>
                <CardBody>
                  El liquido utilizado para el proyecto de ecuaciones
                  diferenciales fue una mezcla de agua potable con gelatina
                  normal, la cual esta contaba con un 98% de colágeno, la
                  denotamos como gelatina liquida.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="Ambiente" title="Ambiente">
              <Card>
                <CardBody>
                  El ambiente utilizado fue una cocina donde su temperatura del
                  medio era de unos 20.3 C° y se mantuvo siempre en esa
                  temperatura como se muestra en la imagen
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div>
        <Cinem />
      </div>
    </div>
  );
}
