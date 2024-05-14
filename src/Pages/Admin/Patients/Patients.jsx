import React from "react";
import { useEffect, useState } from "react";
import Users_table from "../../../Components/Users_table/Users_table";
import "./Patients.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";
import { Input } from "@chakra-ui/react";

function Patients() {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  // const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/appointments")
  //     .then((response) => response.json())
  //     .then((data) => setAppointments(data));
  // }, []);
  const appointments = [
    {
      id: 1,
      name: "Metawaly",
      email: "dfdf",
      mobile: "010101010",
      address: "Cairo",
    },
    {
      id: 2,
      name: "Metawaly",
      email: "dfdf",
      mobile: "010101010",
      address: "Cairo",
    },
    {
      id: 3,
      name: "Metawaly",
      email: "dfdf",
      mobile: "010101010",
      address: "Cairo",
    },
    {
      id: 4,
      name: "Metawaly",
      email: "dfdf",
      mobile: "010101010",
      address: "Cairo",
    },
  ];

  return (
    <div className="patients">
      <Header_Pages type="Admin" header="Patients" />
      <div className="patients-container">
        <div className="search">
          <Input placeholder="Search" width="auto" />
        </div>
        <Users_table
          columns={["ID", "Name", "Email", "Mobile", "Address"]}
          data={appointments}
        />
      </div>
    </div>
  );
}

export default Patients;
