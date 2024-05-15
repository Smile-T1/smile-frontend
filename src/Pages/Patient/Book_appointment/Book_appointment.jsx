import React from 'react';
import axios from 'axios';
import "./Book_appointment.css";
import Book_app_Patient from "../../../Components/Patient_Page/Book_app_Patient/Book_app_Patient";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

const serverHost = import.meta.env.VITE_SERVER_HOST;

function Book_appointment() {

  const handleBooking = async (appointmentData) => {
    try {
      const response = await axios.post(`${serverHost}/api/patient/appointment`, appointmentData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('response',response)
      if (response.status === 200) {
        console.log("Appointment booked successfully");
      } else {
        console.error("Unexpected response:", response.status, response.statusText);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Doctor has appointment in the same time");
      } else {
        console.error("Error:", error.message);
      }
    }
  };
  

  return (
    <div className='Book_appointment_Patient_Page'>
      <Page_header type='Patient' header='Book appointment' />
      <div className='Book_appointment_Patient-container'>
        <div className='Book_appointment_Patient'>
        <Book_app_Patient handleBooking={handleBooking} />

        </div>
      </div>
    </div>
  )
}

export default Book_appointment;
