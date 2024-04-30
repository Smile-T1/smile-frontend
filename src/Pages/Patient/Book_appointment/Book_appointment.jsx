import React from 'react';
import "./Book_appointment.css";
// import Book_app_Patient from '../../../Components/Book_app_Patient/Book_app_Patient';
import Book_app_Patient from "../../../Components/Patient_Page/Book_app_Patient/Book_app_Patient";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

function Book_appointment() {
  return (
    <div className='Book_appointment_Patient_Page'>
      <Page_header type='Patient' header='Book appointment'/>
      <div className='Book_appointment_Patient-container'>
        <div className='Book_appointment_Patient'>
          <Book_app_Patient />
        </div>
      </div>
    </div>
  )
}

export default Book_appointment;
