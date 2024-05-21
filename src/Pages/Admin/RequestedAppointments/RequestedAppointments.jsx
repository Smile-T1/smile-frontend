import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table_Data from "../../../Components/Table_Data/Table_Data";
import "./RequestedAppointments.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";

function RequestedAppointments() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  //   useEffect(() => {
  //     fetch("http://localhost:3001/appointments")
  //       .then((response) => response.json())
  //       .then((data) => setAppointments(data));
  //   }, []);

  return (
    <div className="appointment_admin">
      <Header_Pages type="Admin" header="Requested Appointments" />
      <div className="Book_appointment_Patient_Page">
        <Table_Data appointments={appointments} />
      </div>
    </div>
  );
}

export default RequestedAppointments;
