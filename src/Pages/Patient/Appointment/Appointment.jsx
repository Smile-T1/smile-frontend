import React from 'react';
import "./Appointment.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import Appointment_Table from "../../../Components/Table_Data/Table_Data.jsx";

function Appointment() {

  return (
    <div className='Appointment_Patient_Page'>
      <Page_header header='Appointment' />
      <div className='Appointment_Patient_Page-container'>
        <div className='Appointment_Patient'>
          <Appointment_Table />
        </div>
      </div>

    </div>
  )
}

export default Appointment
