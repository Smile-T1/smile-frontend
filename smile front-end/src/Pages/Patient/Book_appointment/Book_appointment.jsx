import React from 'react';
import "./Book_appointment.css";
import Sidebar from '../../../Components/Sidebar/Sidebar';
import Book_app_Patient from '../../../Components/Book_app_Patient/Book_app_Patient';

function Book_appointment() {
  return (
    <div className='Book_appointment_Page'>
         <div className='Book_appointment'>
            <Book_app_Patient/>
         </div>
    </div>
    // <>
    //     <Sidebar />
    //     <div className='Book_app_Patient_Page'>
    //   <div className='container_123'>
    //     <div className='Book_appointment'>
    //       <Book_app_Patient/>
    //     </div>
    //   </div>
    // </div>
    // </>
  )
}

export default Book_appointment;
