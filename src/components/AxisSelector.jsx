import React from 'react';

function AxisSelector({ columns, xAxis, yAxis, onChangeXAxis, onChangeYAxis }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Select Data Axes</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="x-axis" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            X-Axis
          </label>
          <select
            id="x-axis"
            value={xAxis}
            onChange={(e) => onChangeXAxis(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select X-Axis</option>
            {columns.map((column) => (
              <option key={`x-${column}`} value={column}>
                {column}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="y-axis" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Y-Axis
          </label>
          <select
            id="y-axis"
            value={yAxis}
            onChange={(e) => onChangeYAxis(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Y-Axis</option>
            {columns.map((column) => (
              <option key={`y-${column}`} value={column}>
                {column}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default AxisSelector;
