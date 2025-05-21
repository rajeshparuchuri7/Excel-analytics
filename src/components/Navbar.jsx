import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, User, LogOut, Sun, Moon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = ({ toggleSidebar }) => {
  const { currentUser, signOut } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
          >
            <Menu size={24} />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">
            Excel Analytics
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="relative">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {currentUser?.name}
                </span>
                <User size={20} className="text-gray-600 dark:text-gray-400" />
              </div>
              <button 
                onClick={handleSignOut}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 focus:outline-none"
                aria-label="Sign out"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
