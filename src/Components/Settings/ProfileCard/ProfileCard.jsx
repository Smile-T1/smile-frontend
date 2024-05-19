import React, {useState} from 'react';
import "./ProfileCard.css";
import profilepic from '../../../assets/avatar_default_6.png';
import { Button } from '@chakra-ui/react';
import { IoMdPersonAdd } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

function ProfileCard({ onCardSelect }) {
    const [selectedButton, setSelectedButton] = useState('Info');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        onCardSelect(buttonName === "Info" ? "Info" : "Password");
    };

    return (
        <div className='ProfileCardConatainer'>
            <img src={profilepic} className="ProfilePicContainer" />
            <div className='ProfileCardInfo'>
                <h2 style={{
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem'
                }}>Omar Adel</h2>
                <span style={{
                    color: 'rgb(160 160 160)',
                    fontSize: '0.75rem',
                    lineHeight: '1rem'
                }}>omaradelhassan12@gmail.com</span>
                <span style={{
                    fontSize: '0.75rem',
                    lineHeight: '1rem'
                }}>01093774235</span>
            </div>
            <div className='ProfileCardButtons'>
                <Button
                    colorScheme='teal'
                    variant='outline'
                    className={`button-ProfileCard-method ${selectedButton === "Info" ? "button-selected" : "button-unselected"}`}
                    leftIcon={<IoMdPersonAdd />}
                    style={{
                        borderRadius: '0.25rem',
                        width: '100%'
                    }}
                    onClick={() => handleButtonClick("Info")}
                >
                    Personal Information
                </Button>
                <Button
                    colorScheme='teal' 
                    variant='outline'
                    className={`button-ProfileCard-method ${selectedButton === "Password" ? "button-selected" : "button-unselected"}`}
                    leftIcon={<RiLockPasswordFill />}
                    style={{
                        borderRadius: '0.25rem',
                        width: '100%',
                    }}
                    onClick={() => handleButtonClick("Password")}
                >
                    Change Password
                </Button>
            </div>
        </div>
    )
}

export default ProfileCard

