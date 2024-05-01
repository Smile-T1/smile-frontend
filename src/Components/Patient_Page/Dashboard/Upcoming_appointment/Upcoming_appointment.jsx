import React from 'react';
import "./Upcoming_appointment.css";
import {
    Text,
    Button,
} from '@chakra-ui/react'

function Upcoming_appointment() {

    return (
        <div className='Upcoming_appointment_Conainer'>
            <div className='Upcoming_appointment_Inner_Conainer'>
                <h2 className='Upcoming_appointment_header'>Upcoming appointment</h2>
                <div className='Appointments_table_container'>
                    <div className='left-side-upcoming-appointment'>
                        <Text className='guide-upcoming-appointment-left'>You next visit is arriving soon</Text>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            <span>April 20, 2023</span>
                            Monday
                        </div>
                        <Text>Dr. Xyz Sharma</Text>
                        <Button size="sm" colorScheme="blue" width='55%' minheight='35px'>
                            Reschedule
                        </Button>
                    </div>
                    <div className='right-side-upcoming-appointment'>
                        <h3 className='day-calendar-title'>April 2023</h3>
                        <div className='calendar-container'>
                            <div className='day-calendar'>
                                <span>Sun</span>
                                <span>Mon</span>
                                <span>Tue</span>
                                <span>Wed</span>
                                <span>Thu</span>
                                <span>Fri</span>
                                <span>Sat</span>
                            </div>
                            <div className='day-calendar'>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                                <span>7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming_appointment
