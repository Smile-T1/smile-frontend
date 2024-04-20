import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";


function Page_header() {
  return (
    <div 
    style={{display:'flex',
    marginTop:'40px',
    marginLeft:'30px'
    }}>
      <b style={{width:'68px', height:'25px'}}>
        Patient 
      </b>
      <RiArrowRightSLine style={{fontSize:'20px'}}/>
      <p>Book appointment</p>
    </div>
  )
}

export default Page_header;