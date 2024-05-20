import react from "react";
import { useEffect, useState } from "react";
import Users_table from "../../../Components/Users_table/Users_table";
import "./Requests.css";
import Header_Pages from "../../../Components/Header_Pages/Header_Pages";
const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

function Requests() {
  const [Requests, setRequests] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${VITE_SERVER_HOST}/api/admin/pendingAppoitments`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setRequests(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="patients-r">
      <Header_Pages type="Admin" header="Appointment Requests" />
      <div className="requests-container">
        <div className="search">
          <input placeholder="Search" />
        </div>
        <Users_table
          columns={["Patient Name", "Doctor Name", "Date", "Time", "Type"]}
          data={Requests.data}
          user="requests"
        />
      </div>
    </div>
  );
}

export default Requests;
