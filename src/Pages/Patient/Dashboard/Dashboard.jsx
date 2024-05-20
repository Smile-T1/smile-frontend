import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import Upcoming_appointment from '../../../Components/Patient_Page/Dashboard/Upcoming_appointment/Upcoming_appointment';
import Recent_Medications from "../../../Components/Patient_Page/Dashboard/Recent_Medications/Recent_Medications";
import Medical_History from '../../../Components/Patient_Page/Dashboard/Medical_History/Medical_History';
import Latest_reports from "../../../Components/Patient_Page/Dashboard/Latest_reports/Latest_reports";
import { newestAppointment, recentMedications } from '../PatientPortalEndPoints.js';

function Dashboard() {
  const [dashboard, setDashboard] = useState([]);
  const [recentMed, setRecentMedications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === undefined || token === null) {
      navigate('/login');
    }
    async function fetchData() {
      try {
        const response = await newestAppointment();
        setDashboard(response);
        const response2 = await recentMedications();
        setRecentMedications(response2.prescriptions || []);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='Dashboard-patient-portal'>
      <Page_header type='Patient' header='Dashboard' />
      <div className='Dashboard_Patient_container'>
        <div className='Dashboard-Patient-upperside'>
          <Upcoming_appointment
            doctorname={dashboard?.newestAppointment?.doctor?.user?.username}
            appointmentDate={dashboard?.newestAppointment?.appointmentDate}
            date={dashboard?.newestAppointment?.date}
          />
          {recentMed.map((prescription, index) => (
            <Recent_Medications key={index} 
            Medication={prescription.Medication} />
          ))}
        </div>
        <div className='Dashboard-Patient-downside'>
          <Medical_History />
          <Latest_reports />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

