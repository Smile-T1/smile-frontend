import React from 'react';
import "./Appointment.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import Appointment_Table from "../../../Components/Table_Data/Table_Data.jsx";

function Appointment() {

  return (
    <div className='Appointment_Patient_Page'>
      <div className='page-header'>
        <Page_header />
      </div>
      <div className='Appointment_Patient'>
        <Appointment_Table />
      </div>
    </div>
  )
}

export default Appointment
