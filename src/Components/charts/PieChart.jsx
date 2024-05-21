import React from "react";
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
import { Pie } from "react-chartjs-2";

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
export const data = {
  labels: ["Under 10", "Under 18", "Under 30", "Under 50", "Above 50"],
  datasets: [
    {
      label: "Age",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["#034561", "#DC143C", "#4483FD", "#3E68FF", "#FEEB97"],
      borderColor: ["#034561", "#DC143C", "#4483FD", "#3E68FF", "#FEEB97"],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <Pie
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
        },
      }}
      data={data}
      width={400}
    />
  );
};

export default PieChart;
