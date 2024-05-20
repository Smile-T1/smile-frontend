import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Logo from "../../assets/Smile.png";
import { Link } from "react-router-dom";
import Smile_without from "../../assets/Smile_without.png";
import profile_pic from "../../assets/avatar_default_6.png";
import { DashboardIcon } from "./icons/dashboard";
import AppointmentsIcon from "./icons/appointments";
import BookAppointmentsIcon from "./icons/bookappointments";
import MedicalRecordIcon from "./icons/medicalrecords";
import { CiLogout } from "react-icons/ci";
import { VscSettingsGear } from "react-icons/vsc";
import { FaUserDoctor } from "react-icons/fa6";
import ScheduleIcon from "./icons/Schedule";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
function Sidebar() {
  const userAccess = localStorage.getItem("userAccess");
  const [activeLink, setActiveLink] = useState(() => {
    switch (userAccess) {
      case "Patient":
        return "/patient/dashboard";
      case "Doctor":
        return "/doctor/dashboard";
      case "Admin":
        return "/admin/dashboard";
    }
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="sidebar-portal">
      <aside
        className="content-wrapper-sidebar bg-white h-screen sticky top-0 p-2 min-w-[50px] dashboard-sidebar block"
        style={{
          position: "relative",
        }}
      >
        <div className="sidebar-inner-container" style={{ position: "fixed" }}>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <a href="/" className="logo-link" style={{ alignItems: "center" }}>
              {screenWidth <= 900 ? (
                <img src={Smile_without} alt="Smile" className="logo" />
              ) : (
                <img src={Logo} alt="Smile" className="logo" />
              )}
            </a>
          </div>
          <div className="profile-pic-sidebar flex flex-col items-center gap-2">
            <img
              src={profile_pic}
              alt=""
              loading="lazy"
              className="Profile_picture"
            />
            <p className="Patient_name">Dr. Anushka Singh</p>
          </div>
          <div className="options-sidebar-list">
            <Link
              to={
                userAccess === "Patient"
                  ? "/patient/dashboard"
                  : userAccess === "Doctor"
                  ? "/doctor/dashboard"
                  : "/admin/dashboard"
              }
              className={`sidebar-link ${
                activeLink ===
                (userAccess === "Patient"
                  ? "/patient/dashboard"
                  : userAccess === "Doctor"
                  ? "/doctor/dashboard"
                  : "/admin/dashboard")
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveLink(
                  userAccess === "Patient"
                    ? "/patient/dashboard"
                    : userAccess === "Doctor"
                    ? "/doctor/dashboard"
                    : "/admin/dashboard"
                )
              }
            >
              <DashboardIcon
                className="flex-shrink-0 w-6 h-6 cursor-pointer"
                fill={`${
                  activeLink ===
                  (userAccess === "Patient"
                    ? "/patient/dashboard"
                    : userAccess === "Doctor"
                    ? "/doctor/dashboard"
                    : "/admin/dashboard")
                    ? "#034561"
                    : "black"
                }`}
              />
              <p
                className={`sidebar-text ${
                  activeLink ===
                  (userAccess === "Patient"
                    ? "/patient/dashboard"
                    : userAccess === "Doctor"
                    ? "/doctor/dashboard"
                    : "/admin/dashboard")
                    ? "active"
                    : ""
                }`}
              >
                Dashboard
              </p>
            </Link>
            {userAccess === "Patient" || userAccess === "Doctor" ? (
              <Link
                to={
                  userAccess === "Patient"
                    ? "/patient/appointment"
                    : userAccess === "Doctor"
                    ? "/doctor/appointment"
                    : null
                }
                className={`sidebar-link ${
                  activeLink ===
                  (userAccess === "Patient"
                    ? "/patient/appointment"
                    : userAccess === "Doctor"
                    ? "/doctor/appointment"
                    : null)
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveLink(
                    userAccess === "Patient"
                      ? "/patient/appointment"
                      : userAccess === "Doctor"
                      ? "/doctor/appointment"
                      : null
                  )
                }
              >
                <AppointmentsIcon
                  fill={`${
                    activeLink ===
                    (userAccess === "Patient"
                      ? "/patient/appointment"
                      : userAccess === "Doctor"
                      ? "/doctor/appointment"
                      : null)
                      ? "#034561"
                      : "black"
                  }`}
                />
                <p
                  className={`sidebar-text ${
                    activeLink ===
                    (userAccess === "Patient"
                      ? "/patient/appointment"
                      : userAccess === "Doctor"
                      ? "/doctor/appointment"
                      : null)
                      ? "active"
                      : ""
                  }`}
                >
                  Appointment
                </p>
              </Link>
            ) : null}
            {userAccess === "Admin" && (
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={`nav-link align-middle sidebar-link`}
                        style={{
                          paddingLeft: "16px",
                          paddingRight: "16px",
                        }}
                      >
                        <AppointmentsIcon fill={"black"} />
                        <span className={`sidebar-text`}>Appointment</span>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <>
                      <Link
                        to={"/admin/AllAppointments"}
                        className={`sidebar-link ${
                          activeLink === "/admin/AllAppointments"
                            ? "active"
                            : ""
                        } AccordionPanelitem`}
                        onClick={() => setActiveLink("/admin/AllAppointments")}
                      >
                        <AppointmentsIcon
                          fill={`${
                            activeLink == "/admin/appointments"
                              ? "#034561"
                              : "black"
                          }`}
                        />
                        <p
                          className={`sidebar-text ${
                            activeLink === "/admin/appointments" ? "active" : ""
                          }`}
                        >
                          Appointment list
                        </p>
                      </Link>
                      <Link
                        to="/admin/appointments"
                        className={`sidebar-link ${
                          activeLink === "/admin/appointments" ? "active" : ""
                        } AccordionPanelitem`}
                        onClick={() => setActiveLink("/admin/appointments")}
                      >
                        <AppointmentsIcon
                          fill={`${
                            activeLink == "/admin/appointments"
                              ? "#034561"
                              : "black"
                          }`}
                        />
                        <p
                          className={`sidebar-text ${
                            activeLink === "/admin/appointments" ? "active" : ""
                          }`}
                        >
                          Add appointments
                        </p>
                      </Link>
                      <Link
                        to="/admin/requests"
                        className={`sidebar-link ${
                          activeLink === "/admin/requests" ? "active" : ""
                        } AccordionPanelitem`}
                        onClick={() => setActiveLink("/admin/requests")}
                      >
                        <AppointmentsIcon
                          fill={`${
                            activeLink == "/admin/requests"
                              ? "#034561"
                              : "black"
                          }`}
                        />
                        <p
                          className={`sidebar-text ${
                            activeLink === "/admin/requests" ? "active" : ""
                          }`}
                        >
                          Appointment requests
                        </p>
                      </Link>
                    </>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={`nav-link align-middle sidebar-link`}
                        style={{
                          paddingLeft: "16px",
                          paddingRight: "16px",
                        }}
                      >
                        <AppointmentsIcon fill={"black"} />
                        <span className={`sidebar-text`}>Patients</span>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <>
                      <Link
                        to={"/admin/patients"}
                        className={`sidebar-link ${
                          activeLink === "/admin/patients" ? "active" : ""
                        } AccordionPanelitem`}
                        onClick={() => setActiveLink("/admin/patients")}
                      >
                        <AppointmentsIcon
                          fill={`${
                            activeLink == "/admin/patients"
                              ? "#034561"
                              : "black"
                          }`}
                        />
                        <p
                          className={`sidebar-text ${
                            activeLink === "/admin/patients" ? "active" : ""
                          }`}
                        >
                          View patients
                        </p>
                      </Link>
                      <Link
                        to="/admin/patient_registration"
                        className={`sidebar-link ${
                          activeLink === "/admin/patient_registration"
                            ? "active"
                            : ""
                        } AccordionPanelitem`}
                        onClick={() =>
                          setActiveLink("/admin/patient_registration")
                        }
                      >
                        <AppointmentsIcon
                          fill={`${
                            activeLink == "/admin/patient_registration"
                              ? "#034561"
                              : "black"
                          }`}
                        />
                        <p
                          className={`sidebar-text ${
                            activeLink === "/admin/patient_registration"
                              ? "active"
                              : ""
                          }`}
                        >
                          Add new patient
                        </p>
                      </Link>
                    </>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={`nav-link align-middle sidebar-link`}
                        style={{
                          paddingLeft: "16px",
                          paddingRight: "16px",
                        }}
                      >
                        <FaUserDoctor fill={"black"} />
                        <span className={`sidebar-text`}>Doctors</span>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <>
                      <Link
                        to={"/admin/doctors"}
                        className={`sidebar-link ${
                          activeLink === "/admin/doctors" ? "active" : ""
                        } AccordionPanelitem`}
                        onClick={() => setActiveLink("/admin/doctors")}
                      >
                        <FaUserDoctor
                          fill={`${
                            activeLink == "/admin/doctors" ? "#034561" : "black"
                          }`}
                        />
                        <p
                          className={`sidebar-text ${
                            activeLink === "/admin/doctors" ? "active" : ""
                          } `}
                        >
                          View doctors
                        </p>
                      </Link>
                      <Link
                        to="/admin/doctor_registration"
                        className={`sidebar-link ${
                          activeLink === "/admin/doctor_registration"
                            ? "active"
                            : ""
                        } AccordionPanelitem`}
                        onClick={() =>
                          setActiveLink("/admin/doctor_registration")
                        }
                      >
                        <FaUserDoctor
                          fill={`${
                            activeLink == "/admin/doctor_registration"
                              ? "#034561"
                              : "black"
                          }`}
                        />
                        <p
                          className={`sidebar-text ${
                            activeLink === "/admin/doctor_registration"
                              ? "active"
                              : ""
                          }`}
                        >
                          Add new doctor
                        </p>
                      </Link>
                    </>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            )}
            {userAccess === "Doctor" ? (
              <Link
                to={"/doctor/patients"}
                className={`sidebar-link ${
                  activeLink === "/doctor/patients" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/doctor/patients")}
              >
                <FaUserDoctor
                  fill={`${
                    activeLink === "/doctor/patients" ? "#034561" : "black"
                  }`}
                />
                <p
                  className={`sidebar-text ${
                    activeLink === "/doctor/patients" ? "active" : ""
                  }`}
                >
                  Patients
                </p>
              </Link>
            ) : null}
            {userAccess === "Patient" && (
              <Link
                to="/patient/book_appointment"
                className={`sidebar-link ${
                  activeLink === "/patient/book_appointment" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/patient/book_appointment")}
              >
                <BookAppointmentsIcon
                  fill={`${
                    activeLink == "/patient/book_appointment"
                      ? "#034561"
                      : "black"
                  }`}
                />
                <p
                  className={`sidebar-text ${
                    activeLink === "/patient/book_appointment" ? "active" : ""
                  }`}
                >
                  Book appointment
                </p>
              </Link>
            )}
            {userAccess === "Patient" && (
              <Link
                to="/patient/medical_records"
                className={`sidebar-link ${
                  activeLink === "/patient/medical_records" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/patient/medical_records")}
              >
                <MedicalRecordIcon
                  fill={`${
                    activeLink == "/patient/medical_records"
                      ? "#034561"
                      : "black"
                  }`}
                />
                <p
                  className={`sidebar-text ${
                    activeLink === "/patient/medical_records" ? "active" : ""
                  }`}
                >
                  Medical Records
                </p>
              </Link>
            )}
            {userAccess === "Doctor" && (
              <Link
                to="/doctor/schedule"
                className={`sidebar-link ${
                  activeLink === "/doctor/schedule" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/doctor/schedule")}
              >
                <ScheduleIcon
                  fill={`${
                    activeLink == "/doctor/schedule" ? "#034561" : "black"
                  }`}
                />
                <p
                  className={`sidebar-text ${
                    activeLink === "/doctor/schedule" ? "active" : ""
                  }`}
                >
                  Schedule
                </p>
              </Link>
            )}
            {userAccess !== "Admin" && (
              <Link
                to={
                  userAccess === "Patient"
                    ? "/patient/settings"
                    : userAccess === "Doctor"
                    ? "/doctor/settings"
                    : null
                }
                className={`sidebar-link ${
                  activeLink ===
                  (userAccess === "Patient"
                    ? "/patient/settings"
                    : userAccess === "Doctor"
                    ? "/doctor/settings"
                    : null)
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveLink(
                    userAccess === "Patient"
                      ? "/patient/settings"
                      : userAccess === "Doctor"
                      ? "/doctor/settings"
                      : null
                  )
                }
              >
                <VscSettingsGear
                  fill={
                    activeLink ===
                    (userAccess === "Patient"
                      ? "/patient/settings"
                      : userAccess === "Doctor"
                      ? "/doctor/settings"
                      : null)
                      ? "#034561"
                      : "black"
                  }
                />
                <p
                  className={`sidebar-text ${
                    activeLink ===
                    (userAccess === "Patient"
                      ? "/patient/settings"
                      : userAccess === "Doctor"
                      ? "/doctor/settings"
                      : null)
                      ? "active"
                      : ""
                  }`}
                >
                  Settings
                </p>
              </Link>
            )}
            <Link
              to="/"
              className={`sidebar-link ${activeLink === "/" ? "active" : ""}`}
            >
              <CiLogout />
              <p
                className={`sidebar-text ${activeLink === "/" ? "active" : ""}`}
              >
                Log out
              </p>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
