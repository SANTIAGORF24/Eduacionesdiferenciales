"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

export function GraficaDada() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (typeof window === "undefined") {
    // No estamos en el navegador, retornar algo apropiado para el servidor o renderizado estático
    return null;
  }

  return (
    <>
      <Button onPress={onOpen} className="bg-orange-500 text-white">
        Imagen gráfica dada por Matlab
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Imagen gráfica dada por Matlab
              </ModalHeader>
              <ModalBody>
                <Image
                  src="/assets/img/Grafica.jpg"
                  alt="Imagen gráfica"
                  width={500}
                  height={500}
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  color="error"
                  variant="light"
                  onPress={onClose}
                  css={{
                    backgroundColor: "orange-500",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "orange-600",
                    },
                  }}
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
