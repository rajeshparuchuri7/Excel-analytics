import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Download, BarChart2, Clock, Eye, Trash2 } from 'lucide-react';

const History = () => {
  // Mock data for upload history
  const uploads = [
    {
      id: 1,
      fileName: 'sales_data_2023.xlsx',
      uploadDate: '2023-10-15',
      fileSize: '1.2 MB',
      charts: 4,
      lastAccessed: '2 hours ago',
    },
    {
      id: 2,
      fileName: 'customer_survey_results.xlsx',
      uploadDate: '2023-10-10',
      fileSize: '845 KB',
      charts: 2,
      lastAccessed: '3 days ago',
    },
    {
      id: 3,
      fileName: 'marketing_campaign_metrics.xlsx',
      uploadDate: '2023-09-28',
      fileSize: '2.1 MB',
      charts: 7,
      lastAccessed: '1 week ago',
    },
    {
      id: 4,
      fileName: 'inventory_q3_2023.xlsx',
      uploadDate: '2023-09-15',
      fileSize: '1.7 MB',
      charts: 5,
      lastAccessed: '2 weeks ago',
    },
    {
      id: 5,
      fileName: 'employee_performance_review.xlsx',
      uploadDate: '2023-08-22',
      fileSize: '980 KB',
      charts: 3,
      lastAccessed: '1 month ago',
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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Upload History</h1>
        <p className="text-gray-600 dark:text-gray-400">
          View and manage your previously uploaded Excel files
        </p>
      </motion.div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">
              Recent Uploads
            </h2>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search files..."
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <select className="block rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm">
                <option>All time</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  File Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Upload Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Charts
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Last Accessed
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {uploads.map((upload, index) => (
                <motion.tr 
                  key={upload.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        <FileText size={20} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {upload.fileName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {upload.uploadDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {upload.fileSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <BarChart2 size={16} className="mr-2" />
                      {upload.charts} charts
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock size={16} className="mr-2" />
                      {upload.lastAccessed}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300" title="View">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300" title="Download">
                        <Download size={18} />
                      </button>
                      <button className="p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-medium">5</span> of <span className="font-medium">12</span> files
            </div>
            
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                Previous
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;