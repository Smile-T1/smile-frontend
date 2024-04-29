import React from "react";
import "./DoctorRegistration.css";
import DoctorRegistrationForm from "../../../Components/DoctorRegistrationForm/DoctorRegistrationForm";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

function DoctorRegistration() {
  return (
    <div className="Book_appointment_Patient_Page">
      <Page_header type='Admin' header='Doctor registration' />
      <div className='Book_appointment_Patient-container'>
        <div className="Book_appointment_Patient">
          <DoctorRegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default DoctorRegistration;
