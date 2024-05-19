import react from "react";
import { useEffect, useState } from "react";
import Table_Data from "../../../Components/Table_Data/Table_Data";
import "./AllAppointments.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";
const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

function AllAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${VITE_SERVER_HOST}/api/admin/appointments`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        // console.log(data.appointments);
        // setAppointments(data.appointments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    await fetchData();
  }, []);

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
