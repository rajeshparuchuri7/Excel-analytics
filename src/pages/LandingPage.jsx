import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, FileUp, LineChart, PieChart, Download, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const LandingPage = () => {
  const { currentUser } = useAuth();

  const features = [
    {
      title: 'Interactive Charts',
      description: 'Create stunning 2D and 3D visualizations from your Excel data',
      icon: <BarChart2 size={24} />,
    },
    {
      title: 'Easy Upload',
      description: 'Simply drag and drop your Excel files to get started',
      icon: <FileUp size={24} />,
    },
    {
      title: 'Dynamic Mapping',
      description: 'Select any columns for X and Y axes to create custom charts',
      icon: <LineChart size={24} />,
    },
    {
      title: 'Multiple Chart Types',
      description: 'Choose from bar, line, pie, area, scatter and more',
      icon: <PieChart size={24} />,
    },
    {
      title: 'Download Results',
      description: 'Export your visualizations in PNG format for presentations',
      icon: <Download size={24} />,
    },
    {
      title: 'User Analytics',
      description: 'Track your upload history and analyze patterns over time',
      icon: <Users size={24} />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BarChart2 size={24} className="text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Excel Analytics</span>
            </div>
            <div className="flex space-x-4">
              {currentUser ? (
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-primary-950 to-primary-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold mb-6"
              >
                Transform Your Excel Data Into Beautiful Visualizations
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-gray-300 mb-8"
              >
                Upload your Excel files, choose your chart types, and get interactive
                visualizations instantly. No coding required.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to={currentUser ? "/dashboard" : "/signup"}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <a 
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform rotate-3 translate-y-4">
                  <div className="p-2 bg-gray-100 border-b">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="h-40 bg-primary-100 rounded flex items-center justify-center">
                      <PieChart size={80} className="text-primary-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform -rotate-2 -translate-y-2">
                  <div className="p-2 bg-gray-100 border-b">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="h-40 bg-secondary-100 rounded flex items-center justify-center">
                      <BarChart2 size={80} className="text-secondary-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform -rotate-3 translate-y-2 col-span-2">
                  <div className="p-2 bg-gray-100 border-b">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="h-32 bg-accent-100 rounded flex items-center justify-center">
                      <LineChart size={80} className="text-accent-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Powerful Excel Analysis Tools</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Everything you need to analyze and visualize your Excel data
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4 inline-flex p-3 rounded-full bg-primary-100 dark:bg-primary-900/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 text-center"
            >
              <FileUp size={40} className="mx-auto text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-700 dark:text-primary-300">Upload Excel</h3>
              <p className="text-gray-700 dark:text-gray-300">Drag & drop your Excel file or browse to upload.</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 text-center"
            >
              <LineChart size={40} className="mx-auto text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-700 dark:text-primary-300">Select Chart</h3>
              <p className="text-gray-700 dark:text-gray-300">Choose the columns and chart type you want.</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 text-center"
            >
              <Download size={40} className="mx-auto text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-700 dark:text-primary-300">Download</h3>
              <p className="text-gray-700 dark:text-gray-300">Export your chart as PNG to use anywhere.</p>
            </motion.div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="py-16 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Excel Data?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already getting insights from their Excel data with our powerful analytics platform.
          </p>
          <Link
            to={currentUser ? "/dashboard" : "/signup"}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Get Started Now
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BarChart2 size={24} className="text-primary-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Excel Analytics</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Terms
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Privacy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Excel Analytics. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


