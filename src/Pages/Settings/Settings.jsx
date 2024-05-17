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
        console.log(response);
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
          firstName={userData?.patient?.user?.firstName}
          lastName={userData?.patient?.user?.lastName}
          email={userData?.patient?.user?.email}
          mobile={userData?.patient?.user?.mobile[0]}
          profilePic={userData?.patient?.user?.profilePic}
        />
        {selectedCard === "Info" &&
          <InfoCard
            firstName={userData?.patient?.user?.firstName}
            lastName={userData?.patient?.user?.lastName}
            username={userData?.patient?.user?.username}
            mobile={userData?.patient?.user?.mobile[0]}
            email={userData?.patient?.user?.email}
            address={userData?.patient?.user?.address}
            profilePic={userData?.patient?.user?.profilePic}
          />}
        {selectedCard === "Password" && <PasswordCard />}
      </div>
    </div>
  )
}

export default Settings;
