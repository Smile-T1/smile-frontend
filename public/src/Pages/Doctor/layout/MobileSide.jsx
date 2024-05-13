import React from "react";
import { Link } from "react-router-dom";
import { DashboardIcon } from "./icons/dashboard";
import AppointmentsIcon from "./icons/appointments";
import PatientsIcon from "./icons/patients";
import ScheduleIcon from "./icons/schedule";

const MobileSide = ({ Menu, setMenu, name }) => {
  return (
    <div className={` opened ${Menu ? "active" : ""}`}>
      <div className="flex flex-col justify-between h-full  relative ">
        <div className="flex flex-col pl-4 items-center">
          <Link
            to={"/doctorDashboard"}
            className="hover:text-gray-400 transition-all duration-300 flex whitespace-nowrap gap-2 items-center mt-12 overflow-hidden w-full"
          >
            <DashboardIcon
              className="flex-shrink-0 w-6 h-6 cursor-pointer"
              fill={`${name == "Dashboard" ? "#034561" : "black"}`}
            />
            <p>Dashboard</p>
          </Link>
          <Link
            to={"/doctorAppointment"}
            className="hover:text-gray-400 transition-all duration-300 flex whitespace-nowrap gap-2 items-center mt-12 overflow-hidden w-full"
          >
            <AppointmentsIcon
              fill={`${name == "Appointments" ? "#034561" : "black"}`}
            />
            <p>Appointments</p>
          </Link>

          <Link
            to={"/doctorPatients"}
            className="hover:text-gray-400 transition-all duration-300 flex whitespace-nowrap gap-2 items-center mt-12 overflow-hidden w-full"
          >
            <PatientsIcon
              fill={`${name == "Patients" ? "#034561" : "black"}`}
            />
            <p>Patients</p>
          </Link>
          <Link
            to={"/doctorSchedule"}
            className="hover:text-gray-400 transition-all duration-300 flex whitespace-nowrap gap-2 items-center mt-12 overflow-hidden w-full"
          >
            <ScheduleIcon
              className="flex-shrink-0 w-6 h-6 cursor-pointer"
              fill={`${name == "Schedule" ? "#034561" : "black"}`}
            />
            <p>Schedule </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSide;
