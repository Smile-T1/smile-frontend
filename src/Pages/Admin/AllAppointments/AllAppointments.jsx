import react from "react";
import { useEffect, useState } from "react";
import Table_Data from "../../../Components/Table_Data/Table_Data";
import "./AllAppointments.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";

function AllAppointments() {
  const [appointments, setAppointments] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:3001/appointments")
  //       .then((response) => response.json())
  //       .then((data) => setAppointments(data));
  //   }, []);

  return (
    <div className="appointment_admin">
      <Header_Pages type="Admin" header="Appointments List" />
      <div className="app-container">
        <div className="Appointments-admin">
          <Table_Data appointments={appointments} />
        </div>
      </div>
    </div>
  );
}

export default AllAppointments;
