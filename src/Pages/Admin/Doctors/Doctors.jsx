import React from "react";
import { useEffect, useState } from "react";
import Table_Data from "../../../Components/Table_Data/Table_Data";
import "./Doctors.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";
import Users_table from "../../../Components/Users_table/Users_table";
function Doctors() {
  const [doctors, setDoctors] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:3001/doctors")
  //       .then((response) => response.json())
  //       .then((data) => setDoctors(data));
  //   }, []);
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
          data={doctors}
        />
      </div>
    </div>
  );
}

export default Doctors;
