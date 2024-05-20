import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import "./Settings.css";
import Header_Pages from '../../Components/Header_Pages/Header_Pages';
import ProfileCard from '../../Components/Settings/ProfileCard/ProfileCard';
import InfoCard from '../../Components/Settings/InfoCard/InfoCard';
import PasswordCard from '../../Components/Settings/PasswordCard/PasswordCard';

function Settings() {
  const [selectedCard, setSelectedCard] = useState('Info');
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === undefined || token === null) {
      navigate('/login');
    }

    async function fetchData() {
      try {
        const response = await getSettings();
        setUserData(response);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    }

    fetchData();
  }, [navigate]);

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

