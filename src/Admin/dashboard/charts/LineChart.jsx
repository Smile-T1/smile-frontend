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
import {
  Chart,
  Line,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
  Doughnut,
} from "react-chartjs-2";

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

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: true,
  },

  stacked: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
    legend: {
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
      grid: {
        drawOnChartArea: true,
      },
    },
    y1: {
      type: "linear",
      display: false,
      position: "right",
      grid: {
        drawOnChartArea: true,
      },
    },
    y2: {
      type: "linear",
      display: false,
      position: "right",
      grid: {
        drawOnChartArea: true,
      },
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
      label: "Consultion",
      data: [10, 29, 85, 21, 56, 51, 10, 20, 30],
      borderColor: "#409D9B",
      backgroundColor: "#409D9B",
      cubicInterpolationMode: "monotone",
      yAxisID: "y",
    },
    {
      label: "Catracts",
      data: [65, 59, 80, 81, 10, 55, 40, 20, 30],
      borderColor: "#FFE679",
      backgroundColor: "#FFE679",
      cubicInterpolationMode: "monotone", // Smoothly curved line

      yAxisID: "y",
    },
    {
      label: "LASIK surgery",
      data: [25, 39, 50, 10, 56, 55, 40, 20, 30],
      borderColor: "#DC143C",
      backgroundColor: "#DC143C",
      cubicInterpolationMode: "monotone", // Smoothly curved line

      yAxisID: "y",
    },
    {
      label: "Glaucoma",
      data: [65, 59, 80, 81, 56, 55, 40, 20, 30],
      borderColor: "#3E68FF",
      backgroundColor: "#3E68FF",
      cubicInterpolationMode: "monotone", // Smoothly curved line

      yAxisID: "y",
    },
  ],
};
const LineChart = () => {
  return <Line options={options} data={data} width="700px" height={300} />;
};

export default LineChart;
