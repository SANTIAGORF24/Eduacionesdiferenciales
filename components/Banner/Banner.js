import React from "react";
import { Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

export function Banner() {
  return (
    <>
      <div className="flex justify-center items-center bg-white">
        <div className="flex flex-col md:flex-row bg-white justify-center items-center w-full md:w-4/5 space-y-5 md:space-y-0 md:space-x-20 py-10 md:py-20">
          <div id="inicio">
            <Image
              width={400}
              height={200}
              alt="NextUI hero Image with delay"
              src="/assets/img/ecua.jpg"
            />
          </div>
          <div className="text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
                Proyecto Ecuaciones
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
                diferenciales
              </h1>
            </div>
            <div className="max-w-md py-5 md:py-10">
              <div className="space-y-1">
                <h4 className="text-medium font-medium ">Segunda entrega</h4>
                <p className="text-small text-default-400">
                  Edwin Julian Acuña Gomez
                </p>
              </div>
              <Divider className="my-2 md:my-4" />
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-small">
                <div>Santiago Ramírez</div>
                <Divider orientation="vertical" className="hidden md:block" />
                <div>Jonatan Gómez</div>
                <Divider orientation="vertical" className="hidden md:block" />
                <div>Sean Osorio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
