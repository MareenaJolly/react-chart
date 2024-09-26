import React from 'react';
import './App.css';
import { Chart, defaults, registerables } from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import sourceData from "./data/sourceData.json";
import revenueData from "./data/revenueData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

// Define the defaults.plugins.title object
defaults.plugins.title = {
  display: true,
  align: "start",
  font: {
    size: 20,
  },
  color: "black",
};

Chart.register(...registerables);

export const App = () => {
  return (
    <div className='App'>
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: '#064FF0',
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: '#FF3030',
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements:{
              line:{
                tension:0.5,
              },
            },
            plugins: {
              title: {
                display: true,
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>
      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  'rgba(43, 63, 229, 0.8)',
                  'rgba(250, 192, 19, 0.8)',
                  'rgba(253, 135, 135, 0.8)',
                  'rgba(200, 112, 200, 0.8)',
                  'rgba(96, 219, 235, 0.8)',
                ],
                borderRadius: 5,
              },
            ],
          }}
          options ={{
          plugins: {
            title: {
              display: true,
              text: "Revenue Sources",
            },
          },
        }}
        />
      </div>
      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  'rgba(43, 63, 229, 0.8)',
                  'rgba(250, 192, 19, 0.8)',
                  'rgba(253, 135, 135, 0.8)',
                  'rgba(200, 112, 200, 0.8)',
                  'rgba(96, 219, 235, 0.8)',
                ],
                borderColor: [
                  'rgba(43, 63, 229, 0.8)',
                  'rgba(250, 192, 19, 0.8)',
                  'rgba(253, 135, 135, 0.8)',
                  'rgba(200, 112, 200, 0.8)',
                  'rgba(96, 219, 235, 0.8)',
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Revenue Sources',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default App;