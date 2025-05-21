import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar, Line, Pie, Radar, Scatter, Bubble } from 'react-chartjs-2';
import { Download } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend
);

const DataChart = ({ data, chartType, xAxisIndex, yAxisIndex, fileName }) => {
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    if (!data || data.length < 2 || xAxisIndex < 0 || yAxisIndex < 0) return;

    const header = data[0];
    const xAxisName = header[xAxisIndex];
    const yAxisName = header[yAxisIndex];

    const labels = data.slice(1).map(row => row[xAxisIndex]?.toString() || '');
    const dataValues = data.slice(1).map(row => {
      const val = row[yAxisIndex];
      return typeof val === 'number' ? val : isNaN(Number(val)) ? 0 : Number(val);
    });

    const backgroundColors = labels.map(() =>
      `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, 0.7)`
    );

    let dataset;
    switch (chartType) {
      case 'bar':
        dataset = {
          label: yAxisName,
          data: dataValues,
          backgroundColor: 'rgba(79, 129, 247, 0.7)',
          borderColor: 'rgba(79, 129, 247, 1)',
          borderWidth: 1,
        };
        break;
      case 'line':
        dataset = {
          label: yAxisName,
          data: dataValues,
          borderColor: 'rgba(79, 129, 247, 1)',
          backgroundColor: 'rgba(79, 129, 247, 0.2)',
          tension: 0.3,
          fill: false,
        };
        break;
      case 'area':
        dataset = {
          label: yAxisName,
          data: dataValues,
          borderColor: 'rgba(79, 129, 247, 1)',
          backgroundColor: 'rgba(79, 129, 247, 0.2)',
          tension: 0.3,
          fill: true,
        };
        break;
      case 'pie':
        dataset = {
          label: yAxisName,
          data: dataValues,
          backgroundColor: backgroundColors,
          borderColor: backgroundColors.map(color => color.replace('0.7', '1')),
          borderWidth: 1,
        };
        break;
      case 'radar':
        dataset = {
          label: yAxisName,
          data: dataValues,
          backgroundColor: 'rgba(79, 129, 247, 0.2)',
          borderColor: 'rgba(79, 129, 247, 1)',
          pointBackgroundColor: 'rgba(79, 129, 247, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(79, 129, 247, 1)',
        };
        break;
      case 'scatter':
      case 'bubble':
        dataset = {
          label: yAxisName,
          data: dataValues.map((val, index) => ({
            x: labels[index],
            y: val,
            r: chartType === 'bubble' ? Math.abs(val) % 20 + 5 : 5,
          })),
          backgroundColor: 'rgba(79, 129, 247, 0.7)',
          borderColor: 'rgba(79, 129, 247, 1)',
        };
        break;
      case '3d-column':
        dataset = {
          label: yAxisName,
          data: dataValues,
          backgroundColor: dataValues.map((_, i) => `rgba(79, ${100 + i * 10}, 247, 0.7)`),
          borderColor: 'rgba(79, 129, 247, 1)',
          borderWidth: 1,
        };
        break;
      default:
        dataset = {
          label: yAxisName,
          data: dataValues,
          backgroundColor: 'rgba(79, 129, 247, 0.7)',
          borderColor: 'rgba(79, 129, 247, 1)',
          borderWidth: 1,
        };
    }

    setChartData({
      labels: labels,
      datasets: [dataset],
    });

    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              family: 'Inter, sans-serif',
            },
          },
        },
        title: {
          display: true,
          text: `${yAxisName} vs ${xAxisName}`,
          font: {
            family: 'Inter, sans-serif',
            size: 16,
          },
        },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false,
        },
      },
      scales:
        chartType !== 'pie' && chartType !== 'radar'
          ? {
              x: {
                title: {
                  display: true,
                  text: xAxisName,
                  font: {
                    family: 'Inter, sans-serif',
                  },
                },
                ticks: {
                  font: {
                    family: 'Inter, sans-serif',
                  },
                },
                grid: {
                  display: true,
                  drawBorder: true,
                },
              },
              y: {
                title: {
                  display: true,
                  text: yAxisName,
                  font: {
                    family: 'Inter, sans-serif',
                  },
                },
                ticks: {
                  font: {
                    family: 'Inter, sans-serif',
                  },
                },
                grid: {
                  display: true,
                  drawBorder: true,
                },
              },
            }
          : undefined,
      animation: {
        duration: 1000,
        easing: 'easeInOutQuad',
      },
    });
  }, [data, chartType, xAxisIndex, yAxisIndex]);

  const downloadChart = () => {
    const canvas = document.getElementById('data-chart');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${fileName.replace(/\.[^/.]+$/, '')}_${chartType}_chart.png`;
      link.href = url;
      link.click();
    }
  };

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
      case '3d-column':
        return <Bar data={chartData} options={chartOptions} id="data-chart" />;
      case 'line':
      case 'area':
        return <Line data={chartData} options={chartOptions} id="data-chart" />;
      case 'pie':
        return <Pie data={chartData} options={chartOptions} id="data-chart" />;
      case 'radar':
        return <Radar data={chartData} options={chartOptions} id="data-chart" />;
      case 'scatter':
        return <Scatter data={chartData} options={chartOptions} id="data-chart" />;
      case 'bubble':
        return <Bubble data={chartData} options={chartOptions} id="data-chart" />;
      default:
        return <Bar data={chartData} options={chartOptions} id="data-chart" />;
    }
  };

  if (!chartData || !chartOptions) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-80 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">
          Select both X and Y axes to generate a chart
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={downloadChart}
          className="flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
          title="Download Chart"
        >
          <Download size={20} />
        </button>
      </div>
      <div className="h-80">{renderChart()}</div>
    </div>
  );
};

export default DataChart;
