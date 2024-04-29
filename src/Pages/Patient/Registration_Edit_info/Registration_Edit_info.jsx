import React from 'react';
import "./Registration_Edit_info.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import Registration_Edit_info_Com from "../../../Components/Registration_Edit_info/Registration_Edit_info_Com";

function Registration_Edit_info() {

  return (
    <div className='Registration_Edit_Page'>
    <div className='page-header'>
      <Page_header />
    </div>
    <div className='Registration_Edit_Patient'>
      {/* <Appointment_Table /> */}
      <Registration_Edit_info_Com />
    </div>
  </div>
  )
}

export default Registration_Edit_info
