import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function PasswordChangeModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Change Password</ModalHeader>
                <ModalCloseButton />
                <ModalBody style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <FormControl>
                        <FormLabel>New Password</FormLabel>
                        <Input type="password" placeholder="Enter new password" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Confirm New Password</FormLabel>
                        <Input type="password" placeholder="Confirm new password" />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button colorScheme="teal">Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default PasswordChangeModal;
