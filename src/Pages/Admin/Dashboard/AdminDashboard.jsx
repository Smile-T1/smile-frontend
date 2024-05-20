import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";
import OverviewCard from "../../../Components/OverviewCards/OverviewCard";
import NewRequestCard from "../../../Components/NewRequestCard/NewRequestCard";
import Table_Data from "../../../Components/Table_Data/Table_Data";
import Page_header from "../../../Components/Header_Pages/Header_Pages";
import Users_table from "../../../Components/Users_table/Users_table";
const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;
function AdminDashboard() {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = format(today, "MMMM do, yyyy");

  //use effect to fetch data from the server
  const [appointments, setAppointments] = useState("");
  const [doctors, setDoctors] = useState("");
  const [patients, setPatients] = useState("");
  const [surgeries, setSurgeries] = useState("0");
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [appointmentsData, setAppointmentsData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const fetchData = async () => {
      try {
        const response = await fetch(`${VITE_SERVER_HOST}/api/admin/totals`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setDoctors(data.totalDoctors);
        setPatients(data.totalPatients);
        setAppointments(data.totalAppointments);
        setSurgeries(0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchLatestAppointments = async () => {
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
        setAppointmentsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchRequests = async () => {
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
        setPatientName(
          data.data[0].patient.firstName + " " + data.data[0].patient.lastName
        );
        setDoctorName(
          data.data[0].doctor.user.firstName +
            " " +
            data.data[0].doctor.user.lastName
        );
        setDate(data.data[0].date);
        setType(data.data[0].Type);
        setNumber(data.data.length - 1);
        setTime(data.data[0].time);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    //call both functions parallelly
    fetchData();
    fetchLatestAppointments();
    fetchRequests();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin">
        <Page_header type="Admin" header="Dashboard" />
        <h2 id="ad_head">{formattedDate}</h2>
        <div className="cards-container">
          <div className="overview-cards1">
            <OverviewCard id="card1" header="Total Doctors" value={doctors} />
            <OverviewCard header="Appointments" value={appointments} />
          </div>
          <div className="overview-cards2">
            <OverviewCard header="Total Patients" value={patients} />
            <OverviewCard header="Total Surgeries" value={surgeries} />
          </div>
        </div>
        <div className="new">
          <h3>Newest Appointment request</h3>
          <div className="new-appointments">
            <NewRequestCard
              data={{
                patient: patientName,
                doctor: doctorName,
                date: date,
                time: time,
                type: type,
              }}
            />
          </div>
          <div className="view">
            <p id="requests">+{number} more requests</p>
            <button id="view-requests">
              <Link to="/admin/requests">View all</Link>
            </button>
          </div>
        </div>
        <div className="table-container">
          <h3 id="app">Booked Appointments list</h3>
          <div className="table">
            {appointmentsData && appointmentsData.data ? (
              <Users_table
                columns={[
                  "Patient Name",
                  "Doctor Name",
                  "Date",
                  "Time",
                  "Type",
                  "Status",
                ]}
                data={appointmentsData.data.slice(0, 5)}
                user="appointment"
              />
            ) : (
              <p>Loading...</p> // or some other loading indicator
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
