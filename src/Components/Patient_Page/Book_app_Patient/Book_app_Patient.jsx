import React, { useState } from 'react';
import "./Book_app_Patient.css";
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Flex,
} from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';

function Book_app_Patient() {
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [appointmentFor, setAppointmentFor] = useState('');
    const [selectedAppointmentDate, setSelectedAppointmentDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [note, setNote] = useState('');
    const [files, setFiles] = useState([]);

    const handleSelectedDoctorChange = (e) => {
        setSelectedDoctor(e.target.value);
    };

    const handleAppointmentForChange = (e) => {
        setAppointmentFor(e.target.value);
    };

    const handleSelectedAppointmentDateChange = (date) => {
        setSelectedAppointmentDate(date);
    };

    const handleSelectedTimeChange = (time) => {
        setSelectedTime(time);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleFileUpload = (e) => {
        // Handle file upload logic here
    };

    const handleBooking = () => {
        const appointmentData = {
            doctor: selectedDoctor,
            date: selectedAppointmentDate,
            time: selectedTime,
            notes: note,
            files: files
        };

        // console.log(appointmentData)
        handleBooking(appointmentData); 
    };

    const handleCancel = () => {
        // Handle cancel logic here
    };

    return (
        <div>
            <div className='Book-appoin-header'>
                <h4>Book an appointment</h4>
            </div>
            <div className='book-form-patient'>
                <div className='row-fill-book-data'>
                    <FormControl>
                        <FormLabel>Doctor</FormLabel>
                        <Select placeholder="Choose doctor" style={{ background: '#f6f6f6' }} onChange={handleSelectedDoctorChange}>
                            <option value="Omar">Dr.Omar</option>
                            <option value="Hassan">Dr.Hassan</option>
                            <option value="Hana">Dr.Hana</option>
                            <option value="Ahmed">Dr.Ahmed</option>
                        </Select>
                    </FormControl>
                </div>
                <div className='row-fill-book-data'>
                    <FormControl>
                        <FormLabel>Appointment for</FormLabel>
                        <Select placeholder="Appointment for" style={{ background: '#f6f6f6' }} onChange={handleAppointmentForChange}>
                            <option value="Omar">Routine Check-up and Cleaning</option>
                            <option value="Omar">Dental Filling</option>
                            <option value="Omar">Root Canal Therapy</option>
                            <option value="Omar">Tooth Extraction</option>
                            <option value="Omar">Orthodontic Consultation</option>
                            <option value="Omar">Cosmetic Dentistry</option>
                            <option value="Omar">Emergency Dental Care</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Appointment date</FormLabel>
                        <Input type={'date'} selected={selectedAppointmentDate} onChange={handleSelectedAppointmentDateChange} style={{ background: '#f6f6f6' }} />
                    </FormControl>
                </div>
                <div style={{ width: '100%' }}>
                    <FormControl>
                        <FormLabel> Time</FormLabel>
                        <Flex className='post-methods'>
                            {['10:45PM', '11:00AM', '11:30AM', '12:30PM', '2:00PM', '3:30PM', '4:45PM', '5:00PM'].map((time, index, array) => (
                                <Button
                                    key={index}
                                    className='button-post-method'
                                    size={(window.innerWidth <= 1166 && window.innerWidth > 750) ? 'sm' : 'md'}
                                    variant='ghost'
                                    style={{
                                        borderWidth: `1px 0 1px ${index === array.length - 1 ? '1px' : '0'}`,
                                        borderStyle: 'solid',
                                        borderRadius: '0',
                                        borderRightWidth: index !== array.length ? '1px' : '0',
                                        borderLeftWidth: index === 0 ? '1px' : '0',
                                        width: '100%',
                                        fontSize: '14px',
                                    }}
                                    onClick={() => handleSelectedTimeChange(time)}
                                >
                                    {time}
                                </Button>
                            ))}
                        </Flex>
                    </FormControl>
                </div>
                <div style={{ width: '100%' }}>
                    <FormControl>
                        <FormLabel>Note</FormLabel>
                        <Input placeholder='Note (Optional)' size='lg' style={{ background: '#f6f6f6' }} onChange={handleNoteChange} />
                    </FormControl>
                </div>
                <div style={{ width: '100%' }}>
                    <FormControl>
                        <FormLabel>Report / files</FormLabel>
                        <div className='report-files-patient'>
                            <Button colorScheme='blue' style={{ borderRadius: '9999px', width: '100px', fontFamily: 'Noto Sans, Arial, sans-serif', fontSize: '14px', margin: '8px 2px', marginLeft: '1rem' }} onClick={handleFileUpload}>Upload</Button>
                            <p style={{ marginTop: '16px' }}> or drag and drop files</p>
                        </div>
                    </FormControl>
                    <div className='row-button-book-data' style={{ marginTop: '10px' }}>
                        <div className='book-cancel-buttons'>
                            <Button colorScheme='blue' mr={3} style={{ borderRadius: '9999px', width: '115px' }} onClick={handleBooking}>Book</Button>
                            <Button variant='outline' colorScheme='blue' style={{ borderRadius: '9999px', width: '115px' }} onClick={handleCancel}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book_app_Patient;
