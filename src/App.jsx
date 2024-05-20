import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Signup from './Components/Signup/Signup.jsx';
import Login from './Components/Login/Login.jsx';
import Home from "./Pages/Home/Home.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard_Patient from "./Pages/Patient/Dashboard/Dashboard.jsx";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard.jsx";
import Appointment_Patient from "./Pages/Patient/Appointment/Appointment.jsx";
import Book_appointment_Patient from "./Pages/Patient/Book_appointment/Book_appointment.jsx";
import Medical_records_Patient from "./Pages/Patient/Medical_Records/Medical_Records.jsx";
import PatientRegistration from "./Pages/Admin/PatientRegistration/PatientRegistration.jsx";
import DoctorRegistration from "./Pages/Admin/DoctorRegistration/DoctorRegistration.jsx";
import RequestedAppointments from "./Pages/Admin/RequestedAppointments/RequestedAppointments.jsx";
import Patients from "./Pages/Admin/Patients/Patients.jsx";
import Doctors from "./Pages/Admin/Doctors/Doctors.jsx";
import styled from "styled-components";
import Settings from "./Pages/Settings/Settings.jsx";
import Dashboard from "./Pages/Doctor/layout/dashboard.jsx";
import MainDashboard from "./Components/dashboard/index.jsx";
import DoctorPatients from "./Components/patients/index.jsx";
import Schedule from "./Components/schedule/index.jsx";
import DoctorAppointments from "./Components/appointments/index.jsx";
import AllAppointments from "./Pages/Admin/AllAppointments/AllAppointments.jsx";
import Requests from "./Pages/Admin/Requests/Requests.jsx";

const PageContainer = styled.div`
  display: grid;
  height: 100%;
  overflow: hidden;
  grid-template-columns: 250px 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 70px 1fr;
  }
`;

function App() {
  const { pathname } = useLocation();
  const isDoctorPage = pathname.includes("doctor");
  const isLoginPage = pathname === "/login";
  const isHomePage = pathname === "/";

  const showPageContainer = !(isLoginPage || isHomePage);

  return (
    <div>
      {showPageContainer && (
        <PageContainer>
          <Sidebar />
          <ChakraProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/patient/dashboard" element={<Dashboard_Patient />} />
              <Route path="/patient/appointment" element={<Appointment_Patient />} />
              <Route path="/patient/book_appointment" element={<Book_appointment_Patient />} />
              <Route path="/:type/settings" element={<Settings />} />
              <Route path="/patient/medical_records" element={<Medical_records_Patient />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/patient_registration" element={<PatientRegistration />} />
              <Route path="/admin/doctor_registration" element={<DoctorRegistration />} />
              <Route path="/admin/appointments" element={<RequestedAppointments />} />
              <Route path="/admin/patients" element={<Patients />} />
              <Route path="/admin/doctors" element={<Doctors />} />
              <Route
                path="/admin/AllAppointments"
                element={<AllAppointments />}
              />
              <Route path="/admin/requests" element={<Requests />} />
              <Route
                path="/doctor/dashboard"
                element={
                  <Dashboard name="Dashboard">
                    <MainDashboard />
                  </Dashboard>
                }
              />
              <Route
                path="/doctor/appointment"
                element={
                  <Dashboard name="Appointments">
                    <DoctorAppointments />
                  </Dashboard>
                }
              />
              <Route
                path="/doctor/patients"
                element={
                  <Dashboard name="Patients">
                    <DoctorPatients />
                  </Dashboard>
                }
              />
              <Route
                path="/doctor/schedule"
                element={
                  <Dashboard name="Schedule">
                    <Schedule />
                  </Dashboard>
                }
              />
            </Routes>
          </ChakraProvider>
        </PageContainer>
      )}
      {isHomePage && (
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ChakraProvider>
      )}
      {isLoginPage && (
        <ChakraProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </ChakraProvider>
      )}
    </div>
  );
}

export default App;

