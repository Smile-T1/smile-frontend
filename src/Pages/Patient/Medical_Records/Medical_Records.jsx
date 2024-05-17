import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Medical_Records.css";
import Page_header from "../../../Components/Header_Pages/Header_Pages";

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
      <Page_header type='Patient' header='Medical Records'/>
      <div className='Medical_Records_Patient-container'>
        <div className='Medical_Recordst_Patient'>
          {/* <Book_app_Patient /> */}
        </div>
      </div>
    </div>
  )
}

export default Medical_Records
