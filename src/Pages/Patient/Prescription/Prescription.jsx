import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Page_header from "../../../Components/Header_Pages/Header_Pages";
// import {editappointment} from "../PatientPortalEndPoints"
import PrescriptionData from '../../../Components/Patient_Page/Prescription/Prescription';

function Prescription() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);
  
  return (
    <div className='Appointment_Patient_Page'>
    <Page_header type='Patient' header='Prescription' />
    <div className='Appointment_Patient_Page-container'>
      <div className='Appointment_Patient'>
        <PrescriptionData />
      </div>
    </div>
  </div>
  )   
}

export default Prescription