import React from 'react';
import "./Book_appointment.css";
import Book_app_Patient from "../../../Components/Patient_Page/Book_app_Patient/Book_app_Patient";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

const serverHost = import.meta.env.VITE_SERVER_HOST;
function Book_appointment() {

  const handleBooking = (appointmentData) => {
    axios.post(`${serverHost}/api/patient/appointment`, appointmentData, {
      headers: {
        'Authorization': 'Bearer <token>' 
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.response.data);
    });
  };

  return (
    <div className='Book_appointment_Patient_Page'>
      <Page_header type='Patient' header='Book appointment'/>
      <div className='Book_appointment_Patient-container'>
        <div className='Book_appointment_Patient'>
          <Book_app_Patient handleBooking={handleBooking}/>
        </div>
      </div>
    </div>
  )
}

export default Book_appointment;
