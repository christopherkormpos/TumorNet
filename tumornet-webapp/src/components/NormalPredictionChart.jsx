import React from 'react';
import '../predictionChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const NormalPredictionChart = ({ prediction }) => {
  let normal, tumorous;
  if (prediction > 0.5) {
    tumorous = Math.floor((prediction * 100)) / 100;
    normal = Math.floor((1 - tumorous) * 100) / 100;
  } else {
    normal = Math.floor(((1 - prediction) * 100)) / 100;
    tumorous = Math.floor((1 - normal) * 100) / 100;
  }

  const data = {
    labels: ['Normal', 'Tumorous'],
    datasets: [
      {
        label: 'Prediction',
        data: [normal, tumorous],
        backgroundColor: ['rgba(5, 172, 69, 0.95)', 'rgba(145, 0, 0, 0.95)'],
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 1,
        grid: {
          color: '#e2e5ef',
        },
        ticks: {
          color: '#e2e5ef',
          font: {
            size: 16,
          },
        },
      },
      y: {
        grid: {
          color: '#e2e5ef',
        },
        ticks: {
          color: '#e2e5ef',
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            if (value !== null && value !== undefined) {
              return ` ${tooltipItem.label}: ${value}`;
            }
            return null;
          }
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default NormalPredictionChart;