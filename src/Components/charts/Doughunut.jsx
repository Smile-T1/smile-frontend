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
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  ArcElement,
  Tooltip
);

const Doughnutlabels = ["Consultations", "Surgeries", "Other Event"];

export const Doughnutdata = {
  responsive: true,

  labels: Doughnutlabels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#3E68FF", "#DC143C", "#FEEB97"],
      borderColor: ["#3E68FF", "#DC143C", "#FEEB97"],
      borderWidth: 1,
    },
  ],
};

const DoughunutChart = () => {
  return (
    <Doughnut
      options={{
        plugins: {
          legend: {
            display: true,
            maxWidth: 200,
            position: "bottom",
            labels: {
              usePointStyle: true,
              pointStyle: "rectRounded",
              boxWidth: 100,
            },
          },
        },
        cutout: "75%",
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
      }}
      data={Doughnutdata}
    />
  );
};

export default DoughunutChart;
