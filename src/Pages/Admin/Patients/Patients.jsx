import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Users_table from "../../../Components/Users_table/Users_table";
import "./Patients.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";
import { Input } from "@chakra-ui/react";
const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

function Patients() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${VITE_SERVER_HOST}/api/admin/patients`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch patients");
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="patients">
      <Header_Pages type="Admin" header="Patients" />
      <div className="patients-container">
        <div className="search">
          <Input placeholder="Search" width="auto" />
        </div>
        <Users_table
          columns={["Name", "Email", "Mobile", "Address"]}
          data={data.patients}
          user="patient"
        />
      </div>
    </div>
  );
}

export default Patients;
