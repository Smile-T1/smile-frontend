import React, { useState, useRef } from 'react';
import "./Book_app_Patient.css";
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Flex,
    useToast
} from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import {
    getDoctorsWithSpeciality,
    handleBooking
} from '../../../Pages/Patient/PatientPortalEndPoints';

function Book_app_Patient() {
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [appointmentFor, setAppointmentFor] = useState('');
    const [selectedAppointmentDate, setSelectedAppointmentDate] = useState('');
    const [selectedformattedAppointmentDate, setSelectedFormattedAppointmentDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [note, setNote] = useState('');
    const [selectedDoctorArray, setSelectedDoctorArray] = useState([]);
    const [files, setFiles] = useState([]);
    const [bookingData, setBookingData] = useState(null);
    const fileInputRef = useRef(null);
    const toast = useToast();

    function Toast(message, state) {
        toast({
            description: message,
            status: state,
            duration: 3000,
            isClosable: true,
        })
    }

    const handleSelectedDoctorChange = (e) => {
        setSelectedDoctor(e.target.value);
    };

    const handleAppointmentForChange = async (e) => {
        setAppointmentFor(e.target.value);
        try {
            const selectedDoctorArray = await getDoctorsWithSpeciality(e.target.value);
            console.log(selectedDoctorArray)
            setSelectedDoctorArray(selectedDoctorArray);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSelectedAppointmentDateChange = (date) => {
        setSelectedAppointmentDate(date);
        setSelectedFormattedAppointmentDate(format(new Date(date), "dd-MM-yyyy"));
    };

    const handleSelectedTimeChange = (time) => {
        setSelectedTime(time);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleFileUpload = (e) => {
        if (files.length > 0) {
            setFiles([]);
        } else {
            fileInputRef.current.click();
        }
    };

    const handleBookingRequest = async () => {
        const formData = new FormData();
        const appointmentDetails = JSON.stringify({
            doctorUser: selectedDoctor,
            dateappointment: selectedformattedAppointmentDate,
            appointmentTime: selectedTime,
            appointmentNotes: note,
            Report: files,
            appointmentType: appointmentFor
        });
        formData.append("appointmentDetails", appointmentDetails);
        formData.append("report", files[0]);
        try {
            const response = await handleBooking(formData);
            if (response && response.status === "success") {
                Toast(response.message, response.status);
            } else if (response && response.status === "error") {
                Toast(response.message, response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCancel = () => {
        setSelectedDoctor('');
        setAppointmentFor('');
        setSelectedAppointmentDate('');
        setSelectedFormattedAppointmentDate('');
        setSelectedTime('');
        setNote('');
        setSelectedDoctorArray([]);
        setFiles([]);
    };

    return (
        <div>
            <div className='Book-appoin-header'>
                <h4>Book an appointment</h4>
            </div>
            <div className='book-form-patient'>
                <div className='row-fill-book-data'>
                    <FormControl>
                        <FormLabel>Appointment for</FormLabel>
                        <Select placeholder="Appointment for"
                            value={appointmentFor}
                            style={{ background: '#f6f6f6' }}
                            onChange={handleAppointmentForChange}
                        >
                            <option value="Routine Check-up and Cleaning">Routine Check-up and Cleaning</option>
                            <option value="Dental Filling">Dental Filling</option>
                            <option value="Root Canal Therapy">Root Canal Therapy</option>
                            <option value="Tooth Extraction">Tooth Extraction</option>
                            <option value="Orthodontic Consultation">Orthodontic Consultation</option>
                            <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                            <option value="Emergency Dental Care">Emergency Dental Care</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Appointment date</FormLabel>
                        <Input
                            type="date"
                            value={selectedAppointmentDate}
                            onChange={(e) => handleSelectedAppointmentDateChange(e.target.value)}
                            style={{ background: '#f6f6f6' }}
                        />
                    </FormControl>
                </div>
                {selectedDoctorArray.length > 0 && appointmentFor !== '' && (
                    <div className='row-fill-book-data'>
                        <FormControl>
                            <FormLabel>Doctor</FormLabel>
                            <Select placeholder="Choose doctor" style={{ background: '#f6f6f6' }} onChange={handleSelectedDoctorChange}>
                                {selectedDoctorArray.map((doctor, index) => (
                                    <option key={index} value={doctor}>Dr.{doctor}</option>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                )}
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
                                        background: selectedTime === time ? 'lightblue' : '', // Apply blue color if the time is selected
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
                        <Input
                            placeholder='Note (Optional)'
                            size='lg'
                            style={{ background: '#f6f6f6' }}
                            onChange={handleNoteChange}
                            value={note}
                        />
                    </FormControl>
                </div>
                <div style={{ width: '100%' }}>
                    <FormControl>
                        <FormLabel>Report / files</FormLabel>
                        <div className='report-files-patient'>
                            <Input
                                type="file"
                                onChange={(e) => setFiles(e.target.files)}
                                style={{ display: "none" }}
                                ref={fileInputRef}
                                accept="image/*, .pdf, .doc, .docx"
                            />
                            <Button
                                colorScheme={files.length > 0 ? 'red' : 'blue'}
                                style={{
                                    borderRadius: '9999px',
                                    width: '100px', fontFamily:
                                        'Noto Sans, Arial, sans-serif',
                                    fontSize: '14px',
                                    margin: '8px 2px',
                                    marginLeft: '1rem'
                                }}
                                onClick={() => handleFileUpload()}
                            >
                                {files.length > 0 ? 'Remove' : 'Upload'}
                            </Button>
                            {files.length > 0 ? (
                                <p style={{ marginTop: '16px' }}>
                                    <span>{files[0].name}</span>
                                </p>
                            ) : (
                                <p style={{ marginTop: '16px' }}> or drag and drop files</p>
                            )}
                        </div>
                    </FormControl>
                    <div className='row-button-book-data' style={{ marginTop: '10px' }}>
                        <div className='book-cancel-buttons'>
                            <Button colorScheme='blue' mr={3} style={{ borderRadius: '9999px', width: '115px' }} onClick={handleBookingRequest}>Book</Button>
                            <Button variant='outline' colorScheme='blue' style={{ borderRadius: '9999px', width: '115px' }} onClick={handleCancel}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book_app_Patient;