import React from 'react';
import { BarChart, LineChart, PieChart, AreaChart } from 'lucide-react';

const ChartSelector = ({ selectedChart, onSelectChart }) => {
  const chartOptions = [
    { type: 'bar', label: 'Bar Chart', icon: <BarChart size={24} /> },
    { type: 'line', label: 'Line Chart', icon: <LineChart size={24} /> },
    { type: 'pie', label: 'Pie Chart', icon: <PieChart size={24} /> },
    { type: 'area', label: 'Area Chart', icon: <AreaChart size={24} /> },
    { type: 'scatter', label: 'Scatter Plot', icon: <BarChart size={24} className="rotate-90" /> },
    { type: 'radar', label: 'Radar Chart', icon: <PieChart size={24} className="rotate-45" /> },
    { type: '3d-column', label: '3D Column', icon: <BarChart size={24} className="transform skew-x-12" /> },
    { type: 'bubble', label: 'Bubble Chart', icon: <AreaChart size={24} className="transform rotate-45" /> },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Select Chart Type</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {chartOptions.map((option) => (
          <button
            key={option.type}
            onClick={() => onSelectChart(option.type)}
            className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors ${
              selectedChart === option.type
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-2 border-blue-500'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div
              className={`mb-2 ${
                selectedChart === option.type
                  ? 'text-blue-600'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {option.icon}
            </div>
            <span className="text-xs text-center">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartSelector;
