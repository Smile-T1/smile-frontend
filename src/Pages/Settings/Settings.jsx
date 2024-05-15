import React, { useState } from 'react';
import "./Settings.css";
import Header_Pages from '../../Components/Header_Pages/Header_Pages';
import ProfileCard from '../../Components/Settings/ProfileCard/ProfileCard';
import InfoCard from '../../Components/Settings/InfoCard/InfoCard';
import PasswordCard from '../../Components/Settings/PasswordCard/PasswordCard';

function Settings() {
  const [selectedCard, setSelectedCard] = useState('Info');

  const handleCardSelection = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className='Dashboard-patient-portal'>
      <Header_Pages type='Patient' header='Settings'/>
      <div className='settings-main-container-page'>
        <ProfileCard onCardSelect={handleCardSelection} />
        {selectedCard === "Info" && <InfoCard />}
        {selectedCard === "Password" && <PasswordCard />}
      </div>
    </div>
  )
}

export default Settings

