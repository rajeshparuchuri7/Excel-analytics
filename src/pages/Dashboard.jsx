import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import ChartSelector from '../components/ChartSelectior';
import AxisSelector from '../components/AxisSelector';
import DataChart from '../components/DataChart';
import { motion } from 'framer-motion';
import { LineChart, Info } from 'lucide-react';

const Dashboard = () => {
  const [excelData, setExcelData] = useState(null);
  const [fileName, setFileName] = useState('');
  const [selectedChartType, setSelectedChartType] = useState('bar');
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');

  const handleDataParsed = (data, fileName) => {
    setExcelData(data);
    setFileName(fileName);
    setXAxis('');
    setYAxis('');
    setSelectedChartType('bar');
  };

  const columns = excelData && excelData.length > 0
    ? excelData[0].map((col, index) => (col ? col.toString() : `Column ${index + 1}`))
    : [];

  const xAxisIndex = xAxis ? columns.indexOf(xAxis) : -1;
  const yAxisIndex = yAxis ? columns.indexOf(yAxis) : -1;

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Upload your Excel file and create interactive visualizations
        </p>
      </motion.div>

      {!excelData ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-4">
              <LineChart size={32} className="text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Upload Your Excel File
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Drag and drop your Excel file or click to browse and start analyzing your data
            </p>
          </div>
          
          <FileUploader onDataParsed={handleDataParsed} />
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-900">
            <div className="flex items-start">
              <Info size={20} className="text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">Pro Tip</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                  Make sure your Excel file has headers in the first row. This will make it easier to select data for your charts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900 rounded-lg p-4 mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-primary-900 dark:text-primary-400">
                {fileName}
              </h2>
              <p className="text-sm text-primary-700 dark:text-primary-500">
                {excelData.length} rows • {columns.length} columns
              </p>
            </div>
            <button
              onClick={() => {
                setExcelData(null);
                setFileName('');
              }}
              className="px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
            >
              Upload New File
            </button>
          </div>

          <ChartSelector
            selectedChart={selectedChartType}
            onSelectChart={setSelectedChartType}
          />

          <AxisSelector
            columns={columns}
            xAxis={xAxis}
            yAxis={yAxis}
            onChangeXAxis={setXAxis}
            onChangeYAxis={setYAxis}
          />

          <DataChart
            data={excelData}
            chartType={selectedChartType}
            xAxisIndex={xAxisIndex}
            yAxisIndex={yAxisIndex}
            fileName={fileName}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;
