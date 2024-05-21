import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table_Data from "../../../Components/Table_Data/Table_Data";
import "./Doctors.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";
import Users_table from "../../../Components/Users_table/Users_table";
const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;
function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${VITE_SERVER_HOST}/api/admin/doctors`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  if (localStorage.getItem("token") === null) {
    window.location.href = "/login";
  }

  return (
    <div className="doctors">
      <Header_Pages type="Admin" header="Doctors" />
      <div className="doctors-container">
        <div className="search">
          <input placeholder="Search" />
        </div>
        <Users_table
          columns={["Name", "Email", "Mobile", "Address", "Speciality"]}
          data={doctors.doctors}
          user="doctor"
        />
      </div>
    </div>
  );
}

export default Doctors;
