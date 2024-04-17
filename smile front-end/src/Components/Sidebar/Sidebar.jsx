import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import Logo from "../../assets/Smile.png";
import Logo_without from "../../assets/Smile_without.png"
import { Link } from 'react-router-dom';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeLink, setActiveLink] = useState('/patient/dashboard');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1250) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Listen to window resize event
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar-portal ${sidebarOpen ? 'open' : 'closed'}`}>
      <div className='content-wrapper-sidebar px-4'>
        <div className='image-container'>
          {sidebarOpen ? (
            <a href="/" className='logo-link'>
              <img src={Logo} alt="Smile" className='logo'/>
            </a>
          ) : (
            <div className="logo-wrapper">
              <img src={Logo_without} alt="Closed Logo" className='logo-closed'/>
            </div>
          )}
        </div>
        <div className={`options-sidebar-list ${sidebarOpen ? 'open' : 'closed'}`}>
          <Link to={'/patient/dashboard'} className={`sidebar-link ${activeLink === '/patient/dashboard' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/dashboard')}>
            <i className="fa-solid fa-house icon" viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Dashboard</p>
          </Link>
          <Link to="/patient/registration" className={`sidebar-link ${activeLink === '/patient/registration' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/registration')}>
            <i className="fa-solid fa-address-card icon" viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Registration</p>
          </Link>
          <Link to="/patient/appointment" className={`sidebar-link ${activeLink === '/patient/appointment' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/appointment')}>
            <i className="fa-regular fa-calendar-check icon" viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Appointment</p>
          </Link>
          <Link to="/patient/book_appointment" className={`sidebar-link ${activeLink === '/patient/book_appointment' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/book_appointment')}>
            <i className="fa-solid fa-book-medical icon" viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Book appointment</p>
          </Link>
          <Link to="/patient/medical_records" className={`sidebar-link ${activeLink === '/patient/medical_records' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/medical_records')}>
            <i className="fa-solid fa-notes-medical icon" viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Medical Records</p>
          </Link>
          <Link to="/" className='sidebar-link'>
            <i class="fa-solid fa-arrow-right-from-bracket icon" viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Log out</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
