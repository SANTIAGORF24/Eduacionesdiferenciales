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

export function SecondDataModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-orange-500 text-white">
        Informacion
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
                Informacion
              </ModalHeader>
              <ModalBody>
                <p>
                  Usamos las siguientes propiedades de la transformada para
                  resolverlas:
                </p>
                <BlockMath math="L\{X’\} = s \cdot L\{X\} - X_0" />
                <p>X₀ Condición inicial (temperatura)</p>
                <BlockMath math="L\{1\} = \frac{1}{s}" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Salir
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
