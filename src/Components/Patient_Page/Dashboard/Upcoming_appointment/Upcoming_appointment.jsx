import React, { useState } from 'react';
import "./Upcoming_appointment.css";
import {
    Text,
    Button,
} from '@chakra-ui/react'

function Upcoming_appointment() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    }

    const getMonthName = (monthIndex) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[monthIndex];
    }

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    }

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    }

    return (
        <div className='Upcoming_appointment_Conainer'>
            <div className='Upcoming_appointment_Inner_Conainer'>
                <h2 className='Upcoming_appointment_header'>Upcoming appointment</h2>
                <div className='Appointments_table_container'>
                    <div className='left-side-upcoming-appointment'>
                        <Text className='guide-upcoming-appointment-left'>You next visit is arriving soon</Text>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            <span className="appointment-details">April 20, 2023</span>
                            <span className="appointment-details">  Monday </span>
                        </div>
                        <Text className="appointment-details">Dr. Xyz Sharma</Text>
                        <Button className="Reschedule_button_appointment" colorScheme="blue">
                            Reschedule
                        </Button>
                    </div>
                    <div className='right-side-upcoming-appointment'>
                        <div className='month-navigation' style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem' }}>
                            <Button onClick={prevMonth}>Prev</Button>
                            <h3 className='day-calendar-title' style={{ marginLeft: '0' }}>{getMonthName(currentMonth)} {currentYear}</h3>
                            <Button onClick={nextMonth}>Next</Button>
                        </div>
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
                            {[...Array(Math.ceil(daysInMonth(currentMonth, currentYear) / 7)).keys()].map(row => (
                                <div className='day-calendar' key={row}>
                                    {[...Array(7).keys()].map(col => (
                                        <span key={row * 7 + col + 1}>
                                            {(row * 7 + col + 1) <= daysInMonth(currentMonth, currentYear) &&
                                                (row * 7 + col + 1)}
                                        </span>
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

export default Upcoming_appointment;
