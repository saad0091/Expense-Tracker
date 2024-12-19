import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, ChevronDown, LogOut, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const DashboardNavbar = ({ user }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLinks, setFilteredLinks] = useState([]);
  const notificationRef = useRef(null);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  // Navigation links for search
  const navigationLinks = [
    { path: '/', name: 'Home', icon: 'Home' },
    { path: '/investments', name: 'Investments', icon: 'Dollar' },
    { path: '/statistics', name: 'Statistics', icon: 'Chart' },
    { path: '/users', name: 'Users', icon: 'Users' },
    { path: '/settings', name: 'Settings', icon: 'Settings' }
  ];

  // Handle search functionality
  useEffect(() => {
    if (searchTerm) {
      const filtered = navigationLinks.filter(link =>
        link.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLinks(filtered);
    } else {
      setFilteredLinks([]);
    }
  }, [searchTerm]);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    setHasUnreadNotification(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-16 items-center justify-between border-b border-gray-700 bg-black px-4"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-semibold text-white ml-20"
      >
        {user ? `Welcome Back, ${user.displayName || user.email.split('@')[0]}` : 'Welcome Back'}
      </motion.h1>
      
      <div className="flex flex-1 items-center justify-center px-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative w-full max-w-xl"
        >
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search navigation..."
            className="w-full rounded-md border border-gray-700 bg-gray-900 py-2 pl-10 pr-4 text-sm text-gray-200 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          />
          {filteredLinks.length > 0 && (
            <div className="absolute mt-2 w-full rounded-md bg-gray-900 shadow-lg">
              {filteredLinks.map((link) => (
                <div
                  key={link.path}
                  onClick={() => {
                    navigate(link.path);
                    setSearchTerm('');
                  }}
                  className="cursor-pointer px-4 py-2 text-sm text-gray-200 hover:bg-gray-800"
                >
                  {link.name}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative" ref={notificationRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNotificationClick}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-full p-1 transition-colors duration-300"
          >
            <Bell className="h-6 w-6" />
            {hasUnreadNotification && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                1
              </span>
            )}
          </motion.button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-80 rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-200">Notifications</h3>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="py-2">
                    <p className="text-sm text-gray-300">
                      Thanks for using our expense tracking tool! We hope it helps you manage your finances better.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="relative" ref={userMenuRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 rounded-md hover:bg-gray-800 px-2 py-1 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 ease-in-out"
            >
              <div className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-gray-700">
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="User avatar" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-gray-600 flex items-center justify-center text-white">
                    {user ? user.email[0].toUpperCase() : '?'}
                  </div>
                )}
              </div>
              <span className="font-medium">
                {user ? (user.displayName || user.email.split('@')[0]) : 'Guest'}
              </span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1">
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardNavbar;