import React, { useState } from 'react';
import "./PasswordCard.css";
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'

function PasswordCard() {
    return (
        <div className='PasswordCardConatainer'>
            <div className='PasswordCardInnerConatainer'>
                <FormControl>
                    <FormLabel>New Password</FormLabel>
                    <Input size='lg' type="password" placeholder="Enter your password" />
                </FormControl>
                <FormControl>
                    <FormLabel>New Password</FormLabel>
                    <Input size='lg' type="password" placeholder="Enter new password" />
                </FormControl>
                <FormControl>
                    <FormLabel>Confirm New Password</FormLabel>
                    <Input size='lg' type="password" placeholder="Confirm new password" />
                </FormControl>
                <Button rightIcon={<CheckIcon />} colorScheme='teal' variant='solid' style={{ width: '100%', marginTop: '20px' }}>
                    Save Changes
                </Button>
            </div>
        </div>
    )
}

export default PasswordCard

