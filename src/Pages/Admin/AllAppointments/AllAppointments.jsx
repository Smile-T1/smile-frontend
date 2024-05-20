import react from "react";
import { useEffect, useState } from "react";
import Table_Data from "../../../Components/Table_Data/Table_Data";
import Users_table from "../../../Components/Users_table/Users_table";
import "./AllAppointments.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";
const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

// const [upcomingAppointments, setUpcomingAppointments] = useState([]);
// const getUpcomingAppointments = async () => {
//   try {
//     const response = await fetch(
//       `${VITE_SERVER_HOST}/api/admin/appointment/Upcoming`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch appointments");
//     }
//     const data = await response.json();
//     setUpcomingAppointments(data);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching appointments:", error);
//   }
// };

function AllAppointments() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${VITE_SERVER_HOST}/api/admin/latestAppointment`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setAppointments(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="appointment_admin">
      <Header_Pages type="Admin" header="Appointments List" />
      <div className="app-container">
        <div className="Appointments-admin">
          <Users_table
            columns={[
              "Patient Name",
              "Doctor Name",
              "Date",
              "Time",
              "Type",
              "Status",
            ]}
            data={appointments.data}
            user="appointment"
          />
        </div>
      </div>
    </div>
  );
}

export default AllAppointments;
