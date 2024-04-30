import React from 'react';
import "./Upcoming_appointment.css";
import {
    Box,
    Text,
    Heading,
    VStack,
    Grid,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    HStack,
    Button,
    Flex,
    Divider,
} from '@chakra-ui/react'

function Upcoming_appointment() {

    return (
        <div className='Upcoming_appointment_Conainer'>
            <div className='Upcoming_appointment_Inner_Conainer'>
                <h2 className='Upcoming_appointment_header'>Upcoming appointment</h2>
                <div className='Appointments_table_container'>
                    <div className='left-side-upcoming-appointment'>
                        <Text className='guide-upcoming-appointment-left'>You next visit is arriving soon</Text>
                        <div style={{display:'flex', flexDirection:'column',gap:'0'}}>
                            <span>April 20, 2023</span>
                            Monday
                        </div>
                        <Text>Dr. Xyz Sharma</Text>
                        <Button size="sm" colorScheme="blue" width='55%' height='35px'>
                            Reschedule
                        </Button>
                    </div>
                    <div className='left-side-upcoming-appointment'>
                        <Text className='guide-upcoming-appointment-left'>You next visit is arriving soon</Text>
                        <Text>April 20, 2023 Monday</Text>
                        <Text>Dr. Xyz Sharma</Text>
                        <Button size="sm" colorScheme="blue">
                            Reschedule
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming_appointment
