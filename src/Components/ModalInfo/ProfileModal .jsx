import React, { useState } from 'react';
import "./ProfileModal.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormLabel,
    Input,
    FormControl,
    InputGroup,
    Button,
    InputRightElement,
    Textarea
} from '@chakra-ui/react';
import PasswordChangeModal from "./PasswordChangeModal"


function ProfileModal({ isOpen, onClose, profile_pic }) {
    const [isPasswordChangeModal, setIsPasswordChangeModal] = useState(false);
    const [address, setAddress] = useState("Faculty of Engineering");
    const [isAddressEditable, setIsAddressEditable] = useState(false);
    const [isChangesMade, setIsChangesMade] = useState(false);


    const handleAddressEdit = () => {
        setIsAddressEditable(!isAddressEditable);
        setIsChangesMade(true);
    };

    const handleSaveChanges = () => {
        setIsChangesMade(false); 
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xxl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px'
                }}>
                    <div className='row-modal-info'>
                        <div>
                            <img src={profile_pic} alt="" className='Profile_picture' />
                        </div>
                        <div className='name-info-input'>
                            <div class="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                                <FormControl>
                                    <FormLabel>First name</FormLabel>
                                    <Input value={"Omar"} isReadOnly style={{ background: '#f6f6f6' }} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Last name</FormLabel>
                                    <Input value={"Adel"} isReadOnly style={{ background: '#f6f6f6' }} />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className='row-modal-info'>
                        <div className='name-info-input'>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input value={"omar.adel"} isReadOnly style={{ background: '#f6f6f6' }} />
                            </FormControl>
                        </div>
                        <div className='name-info-input'>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input value={"example@gmail.com"} isReadOnly style={{ background: '#f6f6f6' }} />
                            </FormControl>
                        </div>
                    </div>
                    <div className='row-modal-info'>
                        <div className='name-info-input'>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    isReadOnly
                                    value={"06/30/2002"}
                                    pr='4.5rem'
                                    type='password'
                                    style={{ background: '#f6f6f6' }}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' background='white' onClick={() => setIsPasswordChangeModal(true)}>
                                        <i className="fa-regular fa-pen-to-square" />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </div>
                    </div>
                    <div className='row-modal-info'>
                        <div className='name-info-input'>
                            <FormControl>
                                <FormLabel>Date of birth</FormLabel>
                                <Input value={"06/30/2002"} isReadOnly style={{ background: '#f6f6f6', width: '100%' }} />
                            </FormControl>
                        </div>
                        <div className='name-info-input'>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <Input value={"Male"} isReadOnly style={{ background: '#f6f6f6' }} />
                            </FormControl>
                        </div>
                    </div>
                    <div className='row-modal-info'>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <InputGroup>
                                <Textarea
                                    value={address}
                                    isReadOnly={!isAddressEditable}
                                    onChange={(e) => setAddress(e.target.value)}
                                    style={{ background: '#f6f6f6', minHeight: '96px' }} />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleAddressEdit} background='white'>
                                        <i className={`fa-regular ${isAddressEditable ? 'fa-check' : 'fa-pen-to-square'}`} />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </div>
                </ModalBody>
                <ModalFooter>
                    {isChangesMade && ( // Conditionally render Save Changes button if changes are made
                        <Button colorScheme="teal" onClick={handleSaveChanges}>Save Changes</Button>
                    )}
                </ModalFooter>
                {isPasswordChangeModal && (
                    <PasswordChangeModal
                        isOpen={isPasswordChangeModal}
                        onClose={() => setIsPasswordChangeModal(false)}
                    />
                )}
            </ModalContent>
        </Modal>
    );
};

export default ProfileModal;
