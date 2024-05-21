import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Appointment.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import Appointment_Table from "../../../Components/Table_Data/Table_Data.jsx";

function Appointment() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === undefined || token === null) {
      navigate('/login');
    }
  }, []);

  return (
    <div className='Appointment_Patient_Page'>
      <Page_header type='Patient' header='Appointment' />
      <div className='Appointment_Patient_Page-container'>
        <div className='Appointment_Patient'>
          <Appointment_Table />
        </div>
      </div>
    </div>
  )
}

export default Appointment
