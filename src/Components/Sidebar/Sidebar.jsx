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
import { CiLogout } from "react-icons/ci";
import { VscSettingsGear } from "react-icons/vsc";
import { FaUserDoctor } from "react-icons/fa6";

function Sidebar() {
  const userAccess = localStorage.getItem('userAccess');
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
      <aside className='content-wrapper-sidebar bg-white h-screen sticky top-0 p-2 min-w-[50px] dashboard-sidebar block  w-1/5'
        style={{
          position: 'relative'
        }
        }>
        <div className='sidebar-inner-container' style={{ position: 'fixed' }}>
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
            />
            <p className='Patient_name'>Dr. Anushka Singh</p>
          </div>
          <div className='options-sidebar-list'>
            <Link to={userAccess === 'Patient' ? '/patient/dashboard' : userAccess === 'Doctor' ? '/doctor/dashboard' : '/admin/dashboard'}
              className={`sidebar-link ${activeLink === (userAccess === 'Patient' ? '/patient/dashboard' : userAccess === 'Doctor' ? '/doctor/dashboard' : '/admin/dashboard') ? 'active' : ''}`}
              onClick={() => setActiveLink(userAccess === 'Patient' ? '/patient/dashboard' : userAccess === 'Doctor' ? '/doctor/dashboard' : '/admin/dashboard')}
            >
              <DashboardIcon
                className="flex-shrink-0 w-6 h-6 cursor-pointer"
                fill={`${activeLink === (userAccess === 'Patient' ? '/patient/dashboard' : userAccess === 'Doctor' ? '/doctor/dashboard' : '/admin/dashboard') ? "#034561" : "black"}`}
              />
              <p className={`sidebar-text ${activeLink === (userAccess === 'Patient' ? '/patient/dashboard' : userAccess === 'Doctor' ? '/doctor/dashboard' : '/admin/dashboard') ? 'active' : ''}`}>Dashboard</p>
            </Link>
            {userAccess === "Patient" || userAccess === "Doctor" ? (
              <Link to={userAccess === 'Patient' ? '/patient/appointment' : userAccess === 'Doctor' ? '/doctor/appointment' : null}
                className={`sidebar-link ${activeLink === (userAccess === 'Patient' ? '/patient/appointment' : userAccess === 'Doctor' ? '/doctor/appointment' : null) ? 'active' : ''}`}
                onClick={() => setActiveLink(userAccess === 'Patient' ? '/patient/appointment' : userAccess === 'Doctor' ? '/doctor/appointment' : null)}
              >
                <AppointmentsIcon
                  fill={`${activeLink === (userAccess === 'Patient' ? '/patient/appointment' : userAccess === 'Doctor' ? '/doctor/appointment' : null) ? "#034561" : "black"}`}
                />
                <p className={`sidebar-text ${activeLink === (userAccess === 'Patient' ? '/patient/appointment' : userAccess === 'Doctor' ? '/doctor/appointment' : null) ? 'active' : ''}`}>Appointment</p>
              </Link>
            ) : null}
            {userAccess === "Admin" && (
              <>
                <a href="#submenu1" data-bs-toggle="collapse" className={`nav-link align-middle sidebar-link ${activeLink === '/patient/appointment' ? 'active' : ''}`}
                  style={{
                    paddingLeft: '16px',
                    paddingRight: '16px',
                  }}>
                  <AppointmentsIcon
                    fill={`${activeLink == "/patient/appointment" ? "#034561" : "black"}`}
                  /> <span className={`sidebar-text ${activeLink === '/patient/appointment' ? 'active' : ''}`}>Appointment</span>
                </a>
                <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                  <li class="w-100">
                    <Link href="#" className="nav-link px-0" onClick={() => setActiveLink('/patient/appointment')}>
                      <span className={`sidebar-text ${activeLink === '/patient/appointment' ? 'active' : ''}`}>Appointment list</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" class="nav-link px-0" onClick={() => setActiveLink('/patient/appointment')}>
                      <span className={`sidebar-text ${activeLink === '/patient/appointment' ? 'active' : ''}`}>Add appointments</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" class="nav-link px-0" onClick={() => setActiveLink('/patient/appointment')}>
                      <span className={`sidebar-text ${activeLink === '/patient/appointment' ? 'active' : ''}`}>Appointment requests</span>
                    </Link>
                  </li>
                </ul>
              </>
            )}
            {userAccess === "Admin" || userAccess === "Doctor" ? (
              <Link to={userAccess === 'Admin' ? '/admin/patients' : userAccess === 'Doctor' ? '/doctor/patients' : null}
                className={`sidebar-link ${activeLink === (userAccess === 'Admin' ? '/admin/patients' : userAccess === 'Doctor' ? '/doctor/patients' : null) ? 'active' : ''}`}
                onClick={() => setActiveLink(userAccess === 'Admin' ? '/admin/patients' : userAccess === 'Doctor' ? '/doctor/patients' : null)}
              >
                <FaUserDoctor
                  fill={`${activeLink === (userAccess === 'Admin' ? '/admin/patients' : userAccess === 'Doctor' ? '/doctor/patients' : null) ? "#034561" : "black"}`}
                />
                <p className={`sidebar-text ${activeLink === (userAccess === 'Admin' ? '/admin/patients' : userAccess === 'Doctor' ? '/doctor/patients' : null) ? 'active' : ''}`}>Patients</p>
              </Link>
            ) : null}
            {userAccess === "Admin" && (
              <Link to="/admin/doctors" className={`sidebar-link ${activeLink === '/admin/doctors' ? 'active' : ''}`} onClick={() => setActiveLink('/admin/doctors')}>
                <FaUserDoctor
                  fill={`${activeLink === "/admin/doctors" ? "#034561" : "black"}`}
                />
                <p className={`sidebar-text ${activeLink === '/admin/doctors' ? 'active' : ''}`}>Doctors</p>
              </Link>
            )}
            {userAccess === "Patient" && (
              <Link to="/patient/book_appointment" className={`sidebar-link ${activeLink === '/patient/book_appointment' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/book_appointment')}>
                <BookAppointmentsIcon
                  fill={`${activeLink == "/patient/book_appointment" ? "#034561" : "black"}`}
                />
                <p className={`sidebar-text ${activeLink === '/patient/book_appointment' ? 'active' : ''}`}>Book appointment</p>
              </Link>
            )}
            {userAccess === "Patient" && (
              <Link to="/patient/medical_records" className={`sidebar-link ${activeLink === '/patient/medical_records' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/medical_records')}>
                <MedicalRecordIcon
                  fill={`${activeLink == "/patient/medical_records" ? "#034561" : "black"}`}
                />
                <p className={`sidebar-text ${activeLink === '/patient/medical_records' ? 'active' : ''}`}>Medical Records</p>
              </Link>
            )}
            <Link to="userAccess === 'Patient' ? '/patient/settings' : userAccess === 'Doctor' ? '/doctor/settings' : '/admin/settings'"
              className={`sidebar-link ${activeLink === (userAccess === 'Patient' ? '/patient/settings' : userAccess === 'Doctor' ? '/doctor/settings' : '/admin/settings') ? 'active' : ''}`}
              onClick={() => setActiveLink(userAccess === 'Patient' ? '/patient/settings' : userAccess === 'Doctor' ? '/doctor/settings' : '/admin/settings')}
            >
              <VscSettingsGear
                fill={`${activeLink === (userAccess === 'Patient' ? '/patient/settings' : userAccess === 'Doctor' ? '/doctor/settings' : '/admin/settings') ? "#034561" : "black"}`}
              />
              <p className={`sidebar-text ${activeLink === (userAccess === 'Patient' ? '/patient/settings' : userAccess === 'Doctor' ? '/doctor/settings' : '/admin/settings') ? 'active' : ''}`}>Settings</p>
            </Link>
            <Link to="/" className={`sidebar-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => setActiveLink('/patient/settings')}>
              <CiLogout />
              <p className={`sidebar-text ${activeLink === '/' ? 'active' : ''}`}>Log out</p>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar;
