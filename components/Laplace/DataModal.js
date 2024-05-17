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
import { BlockMath } from "react-katex";

export function DataModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-orange-500 text-white">
        Propiedades
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Propiedades</ModalHeader>
          <ModalBody>
            <p>
              Usamos las siguientes propiedades de la transformada para
              resolverlas:
            </p>
            <BlockMath math="L\{X’\} = s \cdot L\{X\} - X_0" />
            <p>X₀ Condición inicial (temperatura)</p>
            <BlockMath math="L\{1\} = \frac{1}{s}" />
            <p>
              Por propiedades estas transformadas inversas son mucho más
              sencillas de resolver ya que se hallan directamente.
            </p>
            <BlockMath math="L^{-1} \left\{ \frac{1}{s} \right\} = 1" />
            <BlockMath math="L^{-1} \left\{ \frac{1}{s - a} \right\} = e^{at}" />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Salir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
