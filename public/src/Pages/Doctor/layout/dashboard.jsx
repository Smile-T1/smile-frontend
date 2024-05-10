import React, { useState } from "react";
import { DashboardIcon } from "./icons/dashboard";
import AppointmentsIcon from "./icons/appointments";
import PatientsIcon from "./icons/patients";
import ScheduleIcon from "./icons/schedule";
import { Link } from "react-router-dom";
import { IconamoonArrowRight2Light } from "./icons/Arrow";
import { Hamburger } from "./icons/Hamburger";
import MobileSide from "./MobileSide";
import "./dashboard.css";

const Dashboard = ({ name, children }) => {
  const [Menu, setMenu] = useState(false);
  return (
    <div className="flex">
      <MobileSide Menu={Menu} name={name} setMenu={setMenu} />

      <aside
        className={`bg-white h-screen sticky top-0 p-2 min-w-[50px] dashboard-sidebar md:block hidden  w-1/5 `}
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
      </aside>
      <div className="w-full bg-white ">
        <div className="text-lg p-2 pt-4 pb-4 items-center flex gap-2 text-gray-500 sticky z-20 top-0 bg-white pl-8">
          <Hamburger
            className="md:hidden flex-shrink-0 w-6 h-6 cursor-pointer mr-4"
            onClick={() => setMenu(!Menu)}
          />
          <span className="font-bold text-black ">Doctor </span>{" "}
          <div>
            <IconamoonArrowRight2Light />
          </div>
          <span>{name}</span>
        </div>{" "}
        <div className=" min-h-dvh">{children}</div>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
