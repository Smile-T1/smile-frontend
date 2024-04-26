import React from "react";
import { DashboardIcon } from "./icons/dashboard";
import AppointmentsIcon from "./icons/appointments";
import PatientsIcon from "./icons/patients";
import ScheduleIcon from "./icons/schedule";
import { Link } from "react-router-dom";
import { IconamoonArrowRight2Light } from "./icons/Arrow";

const Dashboard = ({ name, children }) => {
  return (
    <div className="flex">
      <aside
        className={`bg-white h-screen sticky top-0 p-2 min-w-[50px] dashboard-sidebar block  w-1/5 `}
      >
        <div className="flex flex-col gap-12 items-center h-full  ">
          <div>
            <h1 className="font-bold text-lg italic mt-2">Smile Clinic</h1>
            <div className="flex mt-12  items-center">
              <img
                src="/f998fc732e043ac75497dd13ac5c6171.png"
                loading="lazy"
                alt=""
                className="absolute top-0 -translate-x-8"
                width={165}
                height={165}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src="/f610dbc7c99a33f1696d0f526c33f2e3.jpg"
              alt=""
              loading="lazy"
              className="rounded-[50%] w-[100px] h-[100px]"
            />
            <p>Dr. Anushka Singh</p>
          </div>
          <div>
            <div className={`flex mt-2 flex-1 justify-end mr-3`}></div>
            <Link
              to={"/mainDashboard"}
              className="hover:text-gray-400 transition-all duration-300 flex whitespace-nowrap gap-2 items-center mt-12 overflow-hidden w-full"
            >
              <DashboardIcon
                className="flex-shrink-0 w-6 h-6 cursor-pointer"
                fill={`${name == "Dashboard" ? "#034561" : "black"}`}
              />
              <p>Dashboard</p>
            </Link>
            <Link
              to={"/appointment"}
              className="hover:text-gray-400 transition-all duration-300 flex whitespace-nowrap gap-2 items-center mt-12 overflow-hidden w-full"
            >
              <AppointmentsIcon
                fill={`${name == "Appointments" ? "#034561" : "black"}`}
              />
              <p>Appointments</p>
            </Link>

            <Link
              to={"/patients"}
              className="hover:text-gray-400 transition-all duration-300 flex whitespace-nowrap gap-2 items-center mt-12 overflow-hidden w-full"
            >
              <PatientsIcon
                fill={`${name == "Patients" ? "#034561" : "black"}`}
              />
              <p>Patients</p>
            </Link>
            <Link
              to={"/schedule"}
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
      </aside>
      <div className="w-full bg-white ">
        {" "}
        <div className=" min-h-dvh">{children}</div>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
