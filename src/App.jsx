import React from "react";
import { Route, Routes } from "react-router-dom";
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
  return (
    <div>
      <PageContainer>
        <ChakraProvider>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient/dashboard" element={<Dashboard_Patient />} />
            <Route path="/patient/appointment" element={<Appointment_Patient />} />
            <Route path="/patient/book_appointment" element={<Book_appointment_Patient />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/patient/medical_records" element={<Medical_records_Patient />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/patient_registration" element={<PatientRegistration />} />
            <Route path="/admin/doctor_registration" element={<DoctorRegistration />} />
            <Route path="/admin/appointments" element={<RequestedAppointments />} />
            <Route path="/admin/patients" element={<Patients />} />
            <Route path="/admin/doctors" element={<Doctors />} />
          </Routes>
        </ChakraProvider>
      </PageContainer>
    </div>
  );
}

export default App;
