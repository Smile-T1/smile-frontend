import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";

const DeleteModal = ({ isOpen, onClose, onDelete, selectedAppointmentId }) => {
    const handleDelete = () => {
        onDelete(selectedAppointmentId);
        onClose(); 
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirm Delete</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Are you sure you want to delete this appointment?
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="red" onClick={handleDelete}>
                        Delete
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DeleteModal;
