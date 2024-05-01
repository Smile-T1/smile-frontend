import React, { useState } from 'react';
// import "./ProfileModal.css";
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
    InputRightElement
} from '@chakra-ui/react';

function ProfileModal({ isOpen, onClose, profile_pic }) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'25px'
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
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <i class="fa-regular fa-eye-slash" /> : <i class="fa-regular fa-eye" />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        </div>
                    </div>
                    <div className='row-modal-info'>
                        <div className='name-info-input'>
                            <FormControl>
                                <FormLabel>Date of birth</FormLabel>
                                <Input value={"06/30/2002"} isReadOnly style={{ background: '#f6f6f6' , width: '100%' }} />
                            </FormControl>
                        </div>
                        <div className='name-info-input'>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <Input value={"Male"} isReadOnly style={{ background: '#f6f6f6' }} />
                            </FormControl>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    {/* Add any additional buttons or actions here */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ProfileModal;
