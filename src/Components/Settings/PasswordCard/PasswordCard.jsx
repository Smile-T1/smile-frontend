import React, { useState } from 'react';
import "./PasswordCard.css";
import { FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import { changePassword } from "../../../Pages/Patient/PatientPortalEndPoints";

function PasswordCard() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const toast = useToast();

    function Toast(message, state) {
        toast({
            description: message,
            status: state,
            duration: 3000,
            isClosable: true,
        })
    }

    const handleSaveChanges = async () => {
        if (newPassword !== confirmPassword) {
            Toast('Confirm password must match new password', 'error');
            return;
        }else{
            const changePassworddata = JSON.stringify({
                currentPassword: password,
                newPassword: newPassword,
                // confirmPassword: confirmPassword,
            });
            console.log(changePassworddata)
            try {
                const response = await changePassword(changePassworddata);
                if (response && response.status === "success") {
                    Toast(response.message, response.status);
                } else if (response && response.status === "error") {
                    Toast(response.message, response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className='PasswordCardConatainer'>
            <div className='PasswordCardInnerConatainer'>
                <FormControl>
                    <FormLabel>Your Password</FormLabel>
                    <Input
                        size='lg'
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>New Password</FormLabel>
                    <Input
                        size='lg'
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Confirm New Password</FormLabel>
                    <Input
                        size='lg'
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </FormControl>
                <Button
                    rightIcon={<CheckIcon />}
                    colorScheme='teal'
                    variant='solid'
                    style={{ width: '100%', marginTop: '20px' }}
                    onClick={handleSaveChanges}
                >
                    Save Changes
                </Button>
            </div>
        </div>
    );
}

export default PasswordCard;
