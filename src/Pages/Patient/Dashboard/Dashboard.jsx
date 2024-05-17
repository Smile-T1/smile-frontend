import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Dashboard.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import Upcoming_appointment from '../../../Components/Patient_Page/Dashboard/Upcoming_appointment/Upcoming_appointment';
import Recent_Medications from "../../../Components/Patient_Page/Dashboard/Recent_Medications/Recent_Medications";
import Medical_History from '../../../Components/Patient_Page/Dashboard/Medical_History/Medical_History';
import Latest_reports from "../../../Components/Patient_Page/Dashboard/Latest_reports/Latest_reports";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === undefined || token === null) {
      navigate('/login');
    }
  }, []);

  return (
    <div className='Dashboard-patient-portal'>
      <Page_header type='Patient' header='Dashboard'/>
      <div className='Dashboard_Patient_container'>
        <div className='Dashboard-Patient-upperside'>
          <Upcoming_appointment />
          <Recent_Medications />
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

