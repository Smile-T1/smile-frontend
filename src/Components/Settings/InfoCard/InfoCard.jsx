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
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons'

function InfoCard({ firstName, lastName, username, mobile, email, address, profilePic }) {
    const [addressvalue, setAddressValue] = useState(address);
    const [isAddressEditable, setIsAddressEditable] = useState(false);
    const [isChangesMade, setIsChangesMade] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(profilePic);

    const handleAddressEdit = () => {
        setIsAddressEditable(!isAddressEditable);
        setIsChangesMade(true);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
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
                            <input
                                type="file"
                                style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                onChange={handleImageUpload}
                                accept=".jpeg,.png"
                            />
                            <span style={{
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: '25px',
                                fontWeight: '900'
                            }}><UploadIcon /></span>
                            <p className='description-title-image-settings'>Drop/Drag your image here</p>
                            <span className='description-image-settings'>
                                (Only *.jpeg and *.png images will be accepted)
                            </span>
                        </div>
                        <div className='uploadprofilepicsectionright'>
                            <img src={uploadedImage ? uploadedImage : InitialPic} style={{ height: '8rem', width: '100%', borderRadius: '0.25rem' }} />
                        </div>
                    </div>
                </div>
                <div class="form-group-settings">
                    <FormControl>
                        <FormLabel>First name</FormLabel>
                        <Input value={firstName} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last name</FormLabel>
                        <Input value={lastName} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                </div>
                <div class="form-group-settings">
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input value={username} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Phone number</FormLabel>
                        <Input value={mobile} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                </div>
                <div class="form-group-settings">
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input value={email} isReadOnly style={{ background: '#f6f6f6' }} />
                    </FormControl>
                </div>
                <div className='row-modal-info' style={{ width: '100%' }}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <InputGroup>
                            <Textarea
                                value={address}
                                isReadOnly={!isAddressEditable}
                                onChange={(e) => setAddressValue(e.target.value)}
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

