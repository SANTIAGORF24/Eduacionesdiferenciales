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

export function Respuesta() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-orange-500 text-white">
        Respuesta
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
                Respuesta
              </ModalHeader>
              <ModalBody>
                <p>
                  Así quedaría nuestra ecuación de temperatura con respecto al
                  tiempo finalmente por transformada de Laplace, si queremos
                  asegurarnos del resultado podemos comparar con nuestro
                  procedimiento por variables separables y nos damos cuenta de
                  que es el mismo resultado
                </p>
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
