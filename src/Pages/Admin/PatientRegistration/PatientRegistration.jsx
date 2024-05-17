import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./PatientRegistration.css";
import PatientRegistrationForm from "../../../Components/PatientRegistrationForm/PatientRegistrationForm";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

function PatientRegistration() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);
  
  return (
    <div className="Book_appointment_Patient_Page">
      <Page_header type="Admin" header="Patient registration" />
      <div className="Book_appointment_Patient-container">
        <div className="Book_appointment_Patient">
          <PatientRegistrationForm />
        </div>
      </div>
    </div>  
  );
}

export default PatientRegistration;
