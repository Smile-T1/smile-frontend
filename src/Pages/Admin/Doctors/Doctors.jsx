import React from "react";
import { useEffect, useState } from "react";
import Table_Data from "../../../Components/Table_Data/Table_Data";
import "./Doctors.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:3001/doctors")
  //       .then((response) => response.json())
  //       .then((data) => setDoctors(data));
  //   }, []);

  return (
    <div className="doctors">
      <Header_Pages type="Admin" header="Doctors" />
      <div className="doctors-container">
        <Table_Data doctors={doctors} />
      </div>
    </div>
  );
}

export default Doctors;
