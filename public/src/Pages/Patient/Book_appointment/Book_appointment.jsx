import React from 'react';
import "./Book_appointment.css";
import Book_app_Patient from '../../../Components/Book_app_Patient/Book_app_Patient';
import Page_header from "../../../Components/Header_Pages/Header_Pages";

function Book_appointment() {
  return (
    <div className='Book_appointment_Patient_Page'>
      <div className='page-header'>
        <Page_header />
      </div>
      <div className='Book_appointment_Patient'>
        <Book_app_Patient/>
      </div>
    </div>
  )
}

export default Book_appointment;
