import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Settings.css";
import Header_Pages from '../../Components/Header_Pages/Header_Pages';
import ProfileCard from '../../Components/Settings/ProfileCard/ProfileCard';
import InfoCard from '../../Components/Settings/InfoCard/InfoCard';
import PasswordCard from '../../Components/Settings/PasswordCard/PasswordCard';
import { getSettings } from "../../Pages/Patient/PatientPortalEndPoints";

function Settings() {
  const [selectedCard, setSelectedCard] = useState('Info');
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
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
      <Header_Pages type='Patient' header='Settings' />
      <div className='settings-main-container-page'>
        <ProfileCard
          onCardSelect={handleCardSelection}
          firstName={userData?.doctor?.firstName || userData?.patient?.firstName}
          lastName={userData?.doctor?.lastName || userData?.patient?.lastName}
          email={userData?.doctor?.email || userData?.patient?.email}
          mobile={userData?.doctor?.mobile[0] || userData?.patient?.mobile[0]}
          profilePic={userData?.doctor?.profilePic || userData?.patient?.profilePic}
        />
        {selectedCard === "Info" &&
          <InfoCard
            firstName={userData?.doctor?.firstName || userData?.patient?.firstName}
            lastName={userData?.doctor?.lastName || userData?.patient?.lastName}
            username={userData?.doctor?.username || userData?.patient?.username}
            mobile={userData?.doctor?.mobile[0] || userData?.patient?.mobile[0]}
            email={userData?.doctor?.email || userData?.patient?.email}
            address={userData?.doctor?.address || userData?.patient?.address}
            profilePic={userData?.doctor?.profilePic || userData?.patient?.profilePic}
          />}
        {selectedCard === "Password" && <PasswordCard />}
      </div>
    </div>
  )
}

export default Settings;
