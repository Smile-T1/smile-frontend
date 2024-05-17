import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Medical_Records.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import MedicalRecords from "../../../Components/Patient_Page/MedicalRecords/MedicalRecords";

function Medical_Records() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === undefined || token === null) {
      navigate('/login');
    }
  }, []);
  return (
    <div className='patient-portal'>
      <Page_header type='Patient' header='Medical Records' />
      <section className='Medical-Records-Patient-container'>
        <div className='MedicalRecordPatientRowData'>
          <h1 style={{ fontSize: '20px' }}>Medical records</h1>
          <MedicalRecords />
        </div>
      </section>
    </div>
  )
}

export default Medical_Records
