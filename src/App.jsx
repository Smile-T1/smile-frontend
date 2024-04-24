import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <ChakraProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/patient/dashboard" element={<Dashboard_Patient />} /> 
          <Route path="/patient/registration" element={<Registration_Patient />} /> 
          <Route path="/patient/appointment" element={<Appointment_Patient />} /> 
          <Route path="/patient/book_appointment" element={<Book_appointment_Patient />} /> 
          <Route path="/patient/medical_records" element={<Medical_records_Patient />} /> 
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
