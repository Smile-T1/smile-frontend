import React from "react";
import { format } from "date-fns";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement,
  Filler,
} from "chart.js";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import LineChart from "./charts/LineChart";
import DoughunutChart from "./charts/Doughunut";
import { Line } from "react-chartjs-2";
import PieChart from "./charts/PieChart";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  ArcElement,
  Tooltip,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
];
export const data = {
  labels,
  datasets: [
    {
      label: "New Patient Added",
      data: [10, 29, 85, 21, 56, 51, 10, 20, 30],
      backgroundColor: "#4FB783BC",
      cubicInterpolationMode: "monotone",
      fill: true,
    },
  ],
};

const MainDashboard = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "d MMMM, yyyy");
  const formattedTime = format(currentDate, "h:mm a");

  return (
    <div className="container mt-8 bg-[#F6F6F6] rounded-lg h-full p-6">
      <div className=" grid grid-cols-3 gap-4 ">
        <div className="border-[#4483FD] border rounded-xl p-3 bg-[#EBFFF5] flex justify-between ">
          <p className="text-xl font-semibold">345</p>
          <div className="flex justify-end flex-col gap-4">
            <p className="text-end text-lg font-medium">Total Patients</p>
            <p className="text-[#409D9B]">15% Increased than last month</p>
          </div>
        </div>
        <div className="border-[#4483FD] border rounded-xl p-3 bg-[#EBFFF5] flex justify-between h-[150px] w-[370px]">
          <p className="text-xl font-semibold">123</p>
          <div className="flex justify-end flex-col gap-4">
            <p className="text-end text-lg font-medium">Todays Appointments</p>
            <p className="text-[#409D9B]">7% more than Yesterday</p>
          </div>
        </div>{" "}
        <div className="border-[#4483FD] border rounded-xl p-3 bg-[#EBFFF5] flex justify-between h-[150px] w-[370px]">
          <p className="text-xl font-semibold">345</p>
          <div className="flex justify-end flex-col gap-4">
            <p className="text-end  text-lg font-medium">Total Surgeries</p>
            <p className="text-[#409D9B]">34% more than last month</p>
          </div>
        </div>{" "}
      </div>
      <div className="flex mt-4 bg-white p-4 rounded-lg">
        <div className="w-2/3 border-r border-[#DDDDDD]">
          <h2 className="text-xl font-medium">Yearly Survey</h2>
          <LineChart />
        </div>
        <div className="w-1/3 relative">
          <h2 className="text-xl font-medium">Today`s scheduled tasks</h2>
          <div className="flex items-center justify-center w-full absolute mt-5">
            <img
              src="/f998fc732e043ac75497dd13ac5c6171.png"
              alt=""
              className=" "
              width={300}
            />
          </div>
          <DoughunutChart />
        </div>
      </div>
      <div className="mt-4 ">
        <Line options={options} data={data} />
      </div>
      <div className="mt-4  rounded-xl p-4 gap-4 flex w-full">
        <div className="w-1/2 bg-white rounded-xl p-4">
          <h3>Patient group</h3>
          <ul className="flex flex-col">
            <li className="border-b border-[#DDDDDD] p-3 flex items-center justify-between">
              <span>xxxxxxxxxxx</span>
              <span>124 Patient</span>
            </li>
            <li className="border-b border-[#DDDDDD] p-3 flex items-center justify-between">
              <span>xxxxxxxxxxx</span>
              <span>124 Patient</span>
            </li>{" "}
            <li className="border-b border-[#DDDDDD] p-3 flex items-center justify-between">
              <span>xxxxxxxxxxx</span>
              <span>124 Patient</span>
            </li>{" "}
            <li className="border-b border-[#DDDDDD] p-3 flex items-center justify-between">
              <span>xxxxxxxxxxx</span>
              <span>124 Patient</span>
            </li>{" "}
            <li className="border-b border-[#DDDDDD] p-3 flex items-center justify-between">
              <span>xxxxxxxxxxx</span>
              <span>124 Patient</span>
            </li>{" "}
          </ul>
        </div>
        <div className="bg-white w-1/2 flex justify-center items-center flex-col">
          <h3 className="text-xl font-medium">Age wise patient survey</h3>
          <div>
            <PieChart />
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 p-4 rounded-xl">
        <h3 className=" text-xl font-medium">Recent appointments list</h3>
        <TableContainer className="mt-12 p-2">
          <Table variant="">
            <Thead>
              <Tr>
                <Th>Sr no</Th>
                <Th>Name</Th>
                <Th isNumeric>Mobile</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td isNumeric>1.</Td>
                <Td>Name</Td>
                <Td isNumeric>1********0</Td>
                <Td>{formattedDate}</Td>
                <Td>{formattedTime}</Td>
                <Td className="text-blue-500">upcoming</Td>
              </Tr>
              <Tr>
                <Td>2.</Td>
                <Td>Name</Td>
                <Td isNumeric>1********0</Td>
                <Td>{formattedDate}</Td>
                <Td>{formattedTime}</Td>
                <Td className="text-blue-500">upcoming</Td>
              </Tr>
              <Tr>
                <Td>3.</Td>
                <Td>Name</Td>
                <Td isNumeric>1********0</Td>
                <Td>{formattedDate}</Td>
                <Td>{formattedTime}</Td>
                <Td className="text-blue-500">upcoming</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MainDashboard;
