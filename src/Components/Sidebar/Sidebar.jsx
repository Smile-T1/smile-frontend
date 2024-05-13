import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import Logo from "../../assets/Smile.png";
import { Link } from 'react-router-dom';
import Smile_without from "../../assets/Smile_without.png";
import profile_pic from "../../assets/avatar_default_6.png";
import { DashboardIcon } from "./icons/dashboard";
import AppointmentsIcon from "./icons/appointments";
import BookAppointmentsIcon from "./icons/bookappointments";
import MedicalRecordIcon from "./icons/medicalrecords";
import ProfileModal from '../ModalInfo/ProfileModal ';

function Sidebar() {
  const [activeLink, setActiveLink] = useState('/patient/dashboard');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='sidebar-portal'>
      <aside className='content-wrapper-sidebar bg-white h-screen sticky top-0 p-2 min-w-[50px] dashboard-sidebar block  w-1/5'>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <a href="/" className='logo-link' style={{ alignItems: 'center' }}>
            {screenWidth <= 900 ? (
              <img src={Smile_without} alt="Smile" className='logo' />
            ) : (
              <img src={Logo} alt="Smile" className='logo' />
            )}
          </a>
        </div>

        <div className="profile-pic-sidebar flex flex-col items-center gap-2">
          <img
            src={profile_pic}
            alt=""
            loading="lazy"
            className='Profile_picture'
            onClick={() => setIsProfileModalOpen(true)}
          />
          <p className='Patient_name'>Dr. Anushka Singh</p>
        </div>
        <div className='options-sidebar-list'>
          <Link to={'/patient/dashboard'} className={`sidebar-link ${activeLink === '/patient/dashboard' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/dashboard')}>
            <DashboardIcon
              className="flex-shrink-0 w-6 h-6 cursor-pointer"
              fill={`${activeLink === '/patient/dashboard' ? "#034561" : "black"}`}
            />
            <p className={`sidebar-text ${activeLink === '/patient/dashboard' ? 'active' : ''}`}>Dashboard</p>
          </Link>
          <Link to="/patient/appointment" className={`sidebar-link ${activeLink === '/patient/appointment' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/appointment')}>
            <AppointmentsIcon
              fill={`${activeLink == "/patient/appointment" ? "#034561" : "black"}`}
            />
            <p className={`sidebar-text ${activeLink === '/patient/appointment' ? 'active' : ''}`}>Appointment</p>
          </Link>
          <Link to="/patient/book_appointment" className={`sidebar-link ${activeLink === '/patient/book_appointment' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/book_appointment')}>
            <BookAppointmentsIcon
              fill={`${activeLink == "/patient/book_appointment" ? "#034561" : "black"}`}
            />
            <p className={`sidebar-text ${activeLink === '/patient/book_appointment' ? 'active' : ''}`}>Book appointment</p>
          </Link>
          <Link to="/patient/medical_records" className={`sidebar-link ${activeLink === '/patient/medical_records' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/medical_records')}>
            <MedicalRecordIcon
              fill={`${activeLink == "/patient/medical_records" ? "#034561" : "black"}`}
            />
            <p className={`sidebar-text ${activeLink === '/patient/medical_records' ? 'active' : ''}`}>Medical Records</p>
          </Link>
          <ProfileModal
            isOpen={isProfileModalOpen}
            onClose={() => setIsProfileModalOpen(false)}
            profile_pic={profile_pic} />
        </div>
      </aside>
    </div>
  )
}

export default Sidebar;
