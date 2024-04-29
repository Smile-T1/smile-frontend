import React from 'react';
import "./Registration_Edit_info.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import Registration_Edit_info_Com from "../../../Components/Registration_Edit_info/Registration_Edit_info_Com";

function Registration_Edit_info() {
  return (
    <div className='Registration_Edit_Page'>
      <Page_header header='Edit information'/>
      <div className='Registration_Edit_Patient-container'>
        <div className='Registration_Edit_Patient'>
          <Registration_Edit_info_Com />
        </div>
      </div>
    </div>
  )
}

export default Registration_Edit_info
