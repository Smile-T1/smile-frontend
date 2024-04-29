import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import Logo from "../../assets/Smile.png";
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import Smile_without from "../../assets/Smile_without.png";

function Sidebar() {
  const [activeLink, setActiveLink] = useState('/patient/dashboard');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      <div className='content-wrapper-sidebar'>
        <a href="/" className='logo-link'>
          {screenWidth <= 800 ? (
            <img src={Smile_without} alt="Smile" className='logo' />
          ) : (
            <img src={Logo} alt="Smile" className='logo' />
          )}
        </a>
        <div className='options-sidebar-list'>
          <Link to={'/patient/dashboard'} className={`sidebar-link ${activeLink === '/patient/dashboard' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/dashboard')}>
            <MdDashboard className='icon' />
            <p className='sidebar-text'>Dashboard</p>
          </Link>
          <Link to="/patient/registration" className={`sidebar-link ${activeLink === '/patient/registration' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/registration')}>
            <i className="fa-solid fa-address-card icon" viewBox="0 0 24 24" />
            <p className='sidebar-text'>Registration</p>
          </Link>
          <Link to="/patient/appointment" className={`sidebar-link ${activeLink === '/patient/appointment' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/appointment')}>
            <i className="fa-regular fa-calendar-check icon" viewBox="0 0 24 24" />
            <p className='sidebar-text'>Appointment</p>
          </Link>
          <Link to="/patient/book_appointment" className={`sidebar-link ${activeLink === '/patient/book_appointment' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/book_appointment')}>
            <i className="fa-solid fa-book-medical icon" viewBox="0 0 24 24" />
            <p className='sidebar-text'>Book appointment</p>
          </Link>
          <Link to="/patient/medical_records" className={`sidebar-link ${activeLink === '/patient/medical_records' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/medical_records')}>
            <i className="fa-solid fa-notes-medical icon" viewBox="0 0 24 24" />
            <p className='sidebar-text'>Medical Records</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;