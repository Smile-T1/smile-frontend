import React from 'react';
import "./Settings.css";
import Header_Pages from '../../Components/Header_Pages/Header_Pages';
import ProfileCard from '../../Components/Settings/ProfileCard/ProfileCard';
import InfoCard from '../../Components/Settings/InfoCard/InfoCard';

function Settings() {

  return (
    <div className='Dashboard-patient-portal'>
      <Header_Pages type='Patient' header='Settings'/>
      <div style={{
        display:'flex',
        flexDirection:'row',
        gap: '1.5rem'
      }}>
        <ProfileCard />
        <InfoCard />
      </div>
    </div>
  )
}

export default Settings

