import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";

const EditModal = ({ isOpen, onClose, selectedAppointmentId }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Appointment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Are you sure you want to delete this appointment?
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="gray" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="blue">
                        Save Changes
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default EditModal;
