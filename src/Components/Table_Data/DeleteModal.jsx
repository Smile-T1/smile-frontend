import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast
} from "@chakra-ui/react";
import { DeleteAppointmnetPatientByID } from "../../Pages/Patient/PatientPortalEndPoints";
const DeleteModal = ({ isOpen, onClose, onDelete, selectedAppointmentId }) => {
    const toast = useToast();

    function Toast(message, state) {
        toast({
            description: message,
            status: state,
            duration: 3000,
            isClosable: true,
        })
    }

    const handleDelete = async () => {
        onDelete(selectedAppointmentId);
        try {
            const response = await DeleteAppointmnetPatientByID(selectedAppointmentId);
            if (response && response.status === "success") {
                Toast(response.message, response.status);
            } else if (response && response.status === "error") {
                Toast(response.message, response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
