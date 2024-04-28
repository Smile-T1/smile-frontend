import React from "react";
import "./PatientRegistration.css";
import PatientRegistrationForm from "../../../Components/PatientRegistrationForm/PatientRegistrationForm";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

function PatientRegistration() {
  return (
    <div className="Book_appointment_Patient_Page">
      <div className="page-header">
        <Page_header />
      </div>
      <div className="Book_appointment_Patient">
        <PatientRegistrationForm />
      </div>
    </div>
  );
}

export default PatientRegistration;
