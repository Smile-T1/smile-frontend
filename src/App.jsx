import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Pages/Home/Home.jsx";
import Dashboard_Patient from "./Pages/Patient/Dashboard/Dashboard.jsx";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard.jsx";
import Registration_Patient from "./Pages/Patient/Registration/Registration.jsx";
import Appointment_Patient from "./Pages/Patient/Appointment/Appointment.jsx";
import Book_appointment_Patient from "./Pages/Patient/Book_appointment/Book_appointment.jsx";
import Medical_records_Patient from "./Pages/Patient/Medical_Records/Medical_Records.jsx";


function App() {
  return (
    <div>
      <div className="d-flex">
        <div style={{ position: "fixed", zIndex: "99" }}>
          <Sidebar />
        </div>
      </div>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient/dashboard" element={<Dashboard_Patient />} />
          <Route path="/patient/registration" element={<Registration_Patient />} />
          <Route path="/patient/appointment" element={<Appointment_Patient />} />
          <Route path="/patient/book_appointment" element={<Book_appointment_Patient />} />
          <Route path="/patient/medical_records" element={<Medical_records_Patient />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
