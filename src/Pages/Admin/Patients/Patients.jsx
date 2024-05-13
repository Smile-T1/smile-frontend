import React from "react";
import { useEffect, useState } from "react";
import Table_Data from "../../../Components/Table_Data/Table_Data";
import "./Patients.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";

function Patients() {
  const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/appointments")
  //     .then((response) => response.json())
  //     .then((data) => setAppointments(data));
  // }, []);

  return (
    <div className="patients">
      <Header_Pages type="Admin" header="Patients" />
      <div className="patients-container">
        <Table_Data appointments={appointments} />
      </div>
    </div>
  );
}

export default Patients;
