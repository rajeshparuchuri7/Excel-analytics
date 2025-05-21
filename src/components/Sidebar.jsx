import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  BarChart2, 
  FileText, 
  History, 
  Settings, 
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <Home size={20} /> },
    { path: '/profile', name: 'Profile', icon: <User size={20} /> },
    { path: '/reports', name: 'Reports', icon: <BarChart2 size={20} /> },
    { path: '/history', name: 'Upload History', icon: <History size={20} /> },
    { path: '/settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  const sidebarVariants = {
    open: { 
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30 
      } 
    },
    closed: { 
      x: '-100%',
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30 
      } 
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        <motion.aside
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={sidebarVariants}
          className={`fixed md:static w-64 h-full bg-primary-950 text-white z-30 flex flex-col transition-all duration-300 ${
            isOpen ? 'left-0' : '-left-64 md:left-0'
          }`}
        >
          {/* Close button - mobile only */}
          <button 
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white md:hidden"
          >
            <X size={20} />
          </button>

          {/* Logo */}
          <div className="flex items-center justify-center p-6 border-b border-gray-700">
            <FileText size={24} className="text-accent-500 mr-2" />
            <span className="text-xl font-semibold">Excel Analytics</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors relative ${
                    isActive 
                      ? 'bg-primary-900 text-accent-400' 
                      : 'text-gray-300 hover:bg-primary-900 hover:text-white'
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      toggleSidebar();
                    }
                  }}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-0 w-1 h-8 bg-accent-500 rounded-l-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom section */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-sm text-gray-400">
              Excel Analytics v0.1.0
            </div>
          </div>
        </motion.aside>
      </AnimatePresence>
    </>
  );
};

export default Sidebar;