import React from "react";
import "./DoctorRegistration.css";
import DoctorRegistrationForm from "../../../Components/DoctorRegistrationForm/DoctorRegistrationForm";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

function DoctorRegistration() {
  return (
    <div className="Book_appointment_Patient_Page">
      <div className="page-header">
        <Page_header />
      </div>
      <div className="Book_appointment_Patient">
        <DoctorRegistrationForm />
      </div>
    </div>
  );
}

export default DoctorRegistration;
