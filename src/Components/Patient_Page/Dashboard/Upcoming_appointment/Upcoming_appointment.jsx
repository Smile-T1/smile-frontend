import React from 'react';
import "./Upcoming_appointment.css";
import {
    Text,
    Button,
} from '@chakra-ui/react'
import { formatDate } from "../../../Dates/Dates";

const days = [1, 2, 3, 4, 5, 6, 7];
const weeks = 4;

function Upcoming_appointment({ doctorname, appointmentDate, date }) {

    return (
        <div className='Upcoming_appointment_Conainer'>
            <div className='Upcoming_appointment_Inner_Conainer'>
                <h2 className='Upcoming_appointment_header'>Upcoming appointment</h2>
                <div className='Appointments_table_container'>
                    <div className='left-side-upcoming-appointment'>
                        <Text className='guide-upcoming-appointment-left'>You next visit is arriving soon</Text>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            <span className="appointment-details">{formatDate(appointmentDate)}</span>
                            {/* <span className="appointment-details">  {getDayName(date)} </span> */}
                        </div>
                        <Text className="appointment-details">Dr. {doctorname}</Text>
                        <Button className="Reschedule_button_appointment" colorScheme="blue">
                            Reschedule
                        </Button>
                    </div>
                    <div className='right-side-upcoming-appointment'>
                        <h3 className='day-calendar-title'>{formatDate(appointmentDate)}</h3>
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
                            {Array.from({ length: weeks }, (_, index) => (
                                <div className='day-calendar' key={index}>
                                    {days.map(day => (
                                        <span key={day}>{day}</span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming_appointment
