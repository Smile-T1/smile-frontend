import React from 'react';
import "./Dashboard.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import Upcoming_appointment from '../../../Components/Patient_Page/Dashboard/Upcoming_appointment/Upcoming_appointment';
import Recent_Medications from "../../../Components/Patient_Page/Dashboard/Recent_Medications/Recent_Medications";
function Dashboard() {

  return (
    <div className='Dashboard-patient-portal'>
      <Page_header type='Patient' header='Dashboard'/>
      <div className='Dashboard_Patient-container'>
        <div className='Dashboard-Patient-upperside'>
          <Upcoming_appointment />
          <Recent_Medications />
        </div>
        <div className='Dashboard-Patient-downside'>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard

