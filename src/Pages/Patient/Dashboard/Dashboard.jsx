import React from 'react';
import "./Dashboard.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

function Dashboard() {

  return (
    <div className='patient-portal'>
      <Page_header type='Patient' header='Dashboard'/>
    </div>
  )
}

export default Dashboard
