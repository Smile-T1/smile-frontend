import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";
import OverviewCard from "../../../Components/OverviewCards/OverviewCard";

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
      <div className="admin-actions">
        <Link to="/admin/patients" className="admin-action">
          Patients
        </Link>
        <Link to="/admin/appointments" className="admin-action">
          Appointments
        </Link>
        <Link to="/admin/doctors" className="admin-action">
          Doctors
        </Link>
        <Link to="/admin/nurses" className="admin-action">
          Nurses
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
