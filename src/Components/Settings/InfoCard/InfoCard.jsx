import React, { useState } from 'react';
import "./InfoCard.css";
import UploadIcon from '../icons/uploadicon';
import InitialPic from '../../../assets/InitialPic300.png';
import {
    Stack,
    FormLabel,
    Input,
    FormControl,
    InputGroup,
    Button,
    InputRightElement,
    Textarea
} from '@chakra-ui/react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons'

function InfoCard() {
    const [address, setAddress] = useState("Faculty of Engineering");
    const [isAddressEditable, setIsAddressEditable] = useState(false);
    const [isChangesMade, setIsChangesMade] = useState(false);


    const handleAddressEdit = () => {
        setIsAddressEditable(!isAddressEditable);
        setIsChangesMade(true);
    };
    return (
        <div className='InfoCardConatainer'>
            <div className='InfoCardInnerConatainer'>
                <div className='uploadprofilepicsection'>
                    <p style={{
                        fontSize: '.875rem',
                        lineHeight: '1.25rem',
                        margin: '0'
                    }}>Profile Image</p>
                    <div className='uploadprofilepicsection2'>
                        <div className='uploadprofilepicsectionleft'>
                            <input type="file" tabIndex='-1' style={{ display: 'none' }} />
                            <span style={{
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: '25px',
                                fontWeight: '900'
                            }}><UploadIcon /></span>
                            <p style={{ marginTop: '8px', fontSize: '.875rem', lineHeight: '1.25rem' }}>Drop/Drag your image here</p>
                            <span style={{
                                color: 'rgb(156 163 175)',
                                fontSize: '.75rem',
                                lineHeight: '1rem'
                            }}>(Only *.jpeg and *.png images will be accepted)</span>
                        </div>
                        <div className='uploadprofilepicsectionright'>
                            <img src={InitialPic} style={{ height: '8rem', width: '100%', borderRadius: '0.25rem' }} />
                        </div>
                    </div>
                </div>
                <div class="form-group" style={{ display: 'flex', flexDirection: 'row', gap: '1em', width: '100%' }}>
                    <FormControl>
                        <FormLabel>First name</FormLabel>
                        <Input value={"Omar"} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last name</FormLabel>
                        <Input value={"Adel"} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                </div>
                <div class="form-group" style={{ display: 'flex', flexDirection: 'row', gap: '1em', width: '100%' }}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input value={"suiiiiiiiii"} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Phone number</FormLabel>
                        <Input value={"01093774235"} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                </div>
                <div class="form-group" style={{ display: 'flex', flexDirection: 'row', gap: '1em', width: '100%' }}>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input value={"omaradelhassan12@gmail.com"} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                </div>
                <div className='row-modal-info' style={{ width: '100%' }}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <InputGroup>
                            <Textarea
                                value={address}
                                isReadOnly={!isAddressEditable}
                                onChange={(e) => setAddress(e.target.value)}
                                style={{ background: '#f6f6f6', minHeight: '70px' }} />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleAddressEdit} background='white'>
                                    <i className={`fa-regular ${isAddressEditable ? 'fa-check' : 'fa-pen-to-square'}`} />
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </div>
                <Stack direction='row' spacing={4} style={{ width: '100%', justifyContent: 'center' }}>
                    <Button leftIcon={<DeleteIcon />} colorScheme='teal' variant='solid' style={{ width: '100%' }}>
                        Delete Account
                    </Button>
                    <Button rightIcon={<CheckIcon />} colorScheme='teal' variant='solid' style={{ width: '100%' }}>
                        Save Changes
                    </Button>
                </Stack>
            </div>
        </div>
    )
}

export default InfoCard

