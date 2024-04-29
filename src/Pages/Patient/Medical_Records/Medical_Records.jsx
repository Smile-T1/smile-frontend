import React from 'react';
import "./Medical_Records.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

function Medical_Records() {

  return (
    <div className='patient-portal'>
      <Page_header type='Patient' header='Medical Records'/>
    </div>
  )
}

export default Medical_Records
