import React, { useState, useEffect } from "react";
import { DashboardIcon } from "./icons/dashboard";
import AppointmentsIcon from "./icons/appointments";
import PatientsIcon from "./icons/patients";
import ScheduleIcon from "./icons/schedule";
import { Link } from "react-router-dom";
import { IconamoonArrowRight2Light } from "./icons/Arrow";
import { Hamburger } from "./icons/Hamburger";
import MobileSide from "./MobileSide";
import "./dashboard.css";
import { useDataContext } from "../../../context/Context";
import PageHeader from "../../../Components/Header_Pages/Header_Pages";

const Dashboard = ({ name, children }) => {
  const [Menu, setMenu] = useState(false);
  const { doctor } = useDataContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);
  
  return (
    <div className="flex" style={{flexDirection: 'column', alignItems: 'center', overflow: 'hidden'}}>
      <MobileSide Menu={Menu} name={name} setMenu={setMenu} />
      <PageHeader type="Doctor" header="Dashboard"/>
      <div className="w-full bg-white ">
        {/* <div className="text-lg  p-2 pt-4 pb-4 items-center flex gap-2 text-gray-500 sticky z-20 top-0 bg-white pl-8">
          <Hamburger
            className="md:hidden flex-shrink-0 w-6 h-6 cursor-pointer mr-4"
            onClick={() => setMenu(!Menu)}
          />
          <span className="font-bold text-black ">Doctor </span>{" "}
          <div>
            <IconamoonArrowRight2Light />
          </div>
          <span>{name}</span>
        </div>{" "} */}
        <div className=" min-h-dvh">{children}</div>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
