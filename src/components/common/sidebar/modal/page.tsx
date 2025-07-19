import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@heroui/react";
import React from "react";

interface ModalPopUPProps {
  isOpen?: boolean;
  onOpenChange?: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: boolean;
}

const ModalPopUP: React.FC<ModalPopUPProps> = ({
  isOpen = false,
  onOpenChange = () => {},
  title = "Modal Title",
  children = null,
  footer = false,
}) => {
  return (
    <div className="">
      <Modal
        isOpen={isOpen}
        className="w-[300rem]"
        placement="center"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="p-0 bg-transparent shadow-none">
          {(onClose) => (
            <>
              <h2 className="text-lg font-bold">{title}</h2>
              <ModalBody>{children}</ModalBody>
              {footer && (
                <ModalFooter>
                  <Button
                    className="text-red-500"
                    color="danger"
                    variant="light"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalPopUP;
