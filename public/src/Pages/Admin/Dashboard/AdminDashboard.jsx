import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";
import OverviewCard from "../../../Components/OverviewCards/OverviewCard";
import NewRequestCard from "../../../Components/NewRequestCard/NewRequestCard";
import Table_Data from "../../../Components/Table_Data/Table_Data";

function AdminDashboard() {
  const today = new Date();
  const formattedDate = format(today, "MMMM do, yyyy");

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <h2>{formattedDate}</h2>
      <div className="overview-cards">
        <OverviewCard title="Total Patients" value="100" />
        <OverviewCard title="Total Appointments" value="200" />
        <OverviewCard title="Total Doctors" value="10" />
        <OverviewCard title="Total Nurses" value="20" />
      </div>
      <div className="new">
        <h3>Newest Appointment request</h3>
        <div className="new-appointments">
          <NewRequestCard />
        </div>
        <div className="view">
          <p id="requests">+15 more requests</p>
          <button id="view-requests">
            <Link to="/admin/requests">View all</Link>
          </button>
        </div>
      </div>
      <div className="table">
        <Table_Data />
      </div>
    </div>
  );
}

export default AdminDashboard;