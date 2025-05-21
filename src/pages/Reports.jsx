import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, LineChart, PieChart, Download, Calendar, ArrowRight } from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  const periods = [
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' },
  ];
  
  const reports = [
    {
      id: 1,
      title: 'Sales Performance',
      description: 'Compare sales data across regions',
      icon: <BarChart2 size={20} />,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      id: 2,
      title: 'Customer Demographics',
      description: 'Analyze customer age groups and preferences',
      icon: <PieChart size={20} />,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
      id: 3,
      title: 'Revenue Trends',
      description: 'Track revenue changes over time',
      icon: <LineChart size={20} />,
      color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      id: 4,
      title: 'Inventory Analysis',
      description: 'Monitor stock levels and turnover rates',
      icon: <BarChart2 size={20} />,
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
    },
    {
      id: 5,
      title: 'Marketing Campaign Results',
      description: 'Measure effectiveness of marketing efforts',
      icon: <LineChart size={20} />,
      color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
    },
    {
      id: 6,
      title: 'Employee Performance',
      description: 'Compare productivity metrics across teams',
      icon: <PieChart size={20} />,
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Reports</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Access and generate analytical reports from your data
        </p>
      </motion.div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">
            Available Reports
          </h2>
          
          <div className="flex items-center space-x-2">
            <Calendar size={18} className="text-gray-500 dark:text-gray-400" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="block rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
            >
              {periods.map((period) => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-full ${report.color} mb-4`}>
                {report.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {report.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {report.description}
              </p>
              <div className="flex justify-between items-center">
                <button className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                  Generate
                  <ArrowRight size={16} className="ml-1" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <Download size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            View All Reports
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Custom Report Builder
        </h2>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mb-4">
                <BarChart2 size={32} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Build a Custom Report
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Select data sources and visualizations to create your custom report
              </p>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Start Building
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
