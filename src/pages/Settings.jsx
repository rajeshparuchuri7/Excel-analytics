import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Bell, Lock, Globe,  Database , Save} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    successMessages: true,
    errorMessages: true,
    updateNotifications: false,
  });
  
  const [dataSettings, setDataSettings] = useState({
    autoSaveInterval: 5,
    maxHistoryItems: 20,
    persistFilters: true,
    compressExports: false,
  });

  const handleNotificationChange = (setting) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleDataSettingChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setDataSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Customize your experience and preferences
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* Appearance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Appearance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Toggle between light and dark theme
                  </p>
                </div>
                <button 
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    darkMode ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span className="sr-only">Toggle dark mode</span>
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      darkMode ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
            
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Language
              </label>
              <div className="mt-1 flex items-center">
                <Globe size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                <select
                  id="language"
                  name="language"
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="ja">Japanese</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
              <Bell size={20} />
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Notifications
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Alerts</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive notifications about your account via email
                </p>
              </div>
              <button 
                onClick={() => handleNotificationChange('emailAlerts')}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  notifications.emailAlerts ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className="sr-only">Toggle email alerts</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    notifications.emailAlerts ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Success Messages</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Show success notifications when operations complete
                </p>
              </div>
              <button 
                onClick={() => handleNotificationChange('successMessages')}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  notifications.successMessages ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className="sr-only">Toggle success messages</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    notifications.successMessages ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Error Messages</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Show error notifications when operations fail
                </p>
              </div>
              <button 
                onClick={() => handleNotificationChange('errorMessages')}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  notifications.errorMessages ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className="sr-only">Toggle error messages</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    notifications.errorMessages ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Product Updates</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive notifications about new features and updates
                </p>
              </div>
              <button 
                onClick={() => handleNotificationChange('updateNotifications')}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  notifications.updateNotifications ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className="sr-only">Toggle product updates</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    notifications.updateNotifications ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Data Handling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
              <Database size={20} />
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Data Handling
            </h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="autoSaveInterval" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Auto-save Interval (minutes)
              </label>
              <input
                type="number"
                id="autoSaveInterval"
                name="autoSaveInterval"
                value={dataSettings.autoSaveInterval}
                onChange={handleDataSettingChange}
                min={1}
                max={60}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="maxHistoryItems" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Max History Items
              </label>
              <input
                type="number"
                id="maxHistoryItems"
                name="maxHistoryItems"
                value={dataSettings.maxHistoryItems}
                onChange={handleDataSettingChange}
                min={5}
                max={100}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
              />
            </div>

            <div className="flex items-center">
              <input
                id="persistFilters"
                name="persistFilters"
                type="checkbox"
                checked={dataSettings.persistFilters}
                onChange={handleDataSettingChange}
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="persistFilters" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Persist filters and views between sessions
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="compressExports"
                name="compressExports"
                type="checkbox"
                checked={dataSettings.compressExports}
                onChange={handleDataSettingChange}
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="compressExports" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Compress data exports for faster downloads
              </label>
            </div>
          </div>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
              <Lock size={20} />
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Security
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Change Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter new password"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
              />
            </div>

            <div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Save Password
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
