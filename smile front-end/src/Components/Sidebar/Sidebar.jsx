import React from 'react';
import "./Sidebar.css";
import Logo from "../../assets/Smile.png"

function Sidebar() {

  return (
    <div className='sidebar-portal'>
      <div className='content-wrapper-sidebar  px-4'>
        <a href="/" className='logo-link'>
          <img src={Logo} alt="Smile" className='logo'/>
        </a>
        <div className='options-sidebar-list'>
          <a href="/" className='sidebar-link'>
            <i className="fa-solid fa-house icon" style={{height: '1em',width: '1em'}} viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Dashboard</p>
          </a>
          <a href="/" className='sidebar-link'>
            <i className="fa-solid fa-address-card icon" style={{height: '1em',width: '1em'}} viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Registration</p>
          </a>
          <a href="/" className='sidebar-link'>
            <i className="fa-regular fa-calendar-check icon" style={{height: '1em',width: '1em'}} viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Appointment</p>
          </a>
          <a href="/" className='sidebar-link'>
            <i className="fa-solid fa-book-medical icon" style={{height: '1em',width: '1em'}} viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Book appointment</p>
          </a>
          <a href="/" className='sidebar-link'>
            <i className="fa-solid fa-notes-medical icon" style={{height: '1em',width: '1em'}} viewBox="0 0 24 24"/>
            <p className='sidebar-text'>Medical Records</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
