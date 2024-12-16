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

const BenOrMalPredictionChart = ({ prediction }) => {
  let benign, malignant;
  if (prediction > 0.5) {
    malignant = Math.floor((prediction * 100)) / 100;
    benign = Math.floor((1 - malignant) * 100) / 100;
  } else {
    benign = Math.floor(((1 - prediction) * 100)) / 100;
    malignant = Math.floor((1 - benign) * 100) / 100;
  }

  const data = {
    labels: ['Benign', 'Malignant'],
    datasets: [
      {
        label: 'Prediction',
        data: [benign, malignant],
        backgroundColor: ['rgba(83, 157, 231, 0.95)', 'rgba(125, 0, 0, 0.95)'],
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

export default BenOrMalPredictionChart;