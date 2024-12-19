import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FiDollarSign, FiUser, FiChevronDown, FiGrid, FiSettings, FiLogOut } from 'react-icons/fi'
import { auth } from '../firebase'

function Navbar({ user, hideNavbar }) {
  if (hideNavbar) return null;

  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user)
    })
    return () => unsubscribe()
  }, [])

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      setIsAuthenticated(false)
      setIsProfileMenuOpen(false)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const profileButtonVariants = {
    hover: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 }
    }
  }

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  }

  const menuItemVariants = {
    hover: {
      x: 6,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-shadow ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-black p-2 rounded-lg">
              <FiDollarSign className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-black">ExpTracker</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors">
              About Us
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-black transition-colors">
              Pricing
            </Link>
            
            {isAuthenticated && user ? (
              <div className="relative">
                <motion.button
                  onClick={toggleProfileMenu}
                  variants={profileButtonVariants}
                  whileHover="hover"
                  className="flex items-center space-x-3 px-4 py-2 rounded-xl transition-all"
                >
                  {user.photoURL ? (
                    <motion.img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-9 h-9 rounded-full ring-2 ring-black/5"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  ) : (
                    <motion.div
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ring-2 ring-black/5"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiUser className="w-4 h-4 text-gray-700" />
                    </motion.div>
                  )}
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-white">{user.displayName || user.email}</span>
                    <motion.div
                      animate={{ rotate: isProfileMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown className="w-4 h-4 text-gray-600" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {isProfileMenuOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={menuVariants}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 py-1"
                    >
                      <motion.div
                        variants={menuItemVariants}
                        whileHover="hover"
                        className="px-4 py-3 border-b border-gray-100"
                      >
                        <p className="text-sm text-gray-500">Signed in as</p>
                        <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                      </motion.div>
                      
                      <div className="py-1">
                        <Link to="/dashboard">
                          <motion.div
                            variants={menuItemVariants}
                            whileHover="hover"
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            <FiGrid className="w-4 h-4" />
                            <span>Dashboard</span>
                          </motion.div>
                        </Link>
                        
                        <Link to="/profile">
                          <motion.div
                            variants={menuItemVariants}
                            whileHover="hover"
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            <FiSettings className="w-4 h-4" />
                            <span>Settings</span>
                          </motion.div>
                        </Link>
                        
                        <motion.button
                          onClick={handleSignOut}
                          variants={menuItemVariants}
                          whileHover="hover"
                          className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                        >
                          <FiLogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/signIn"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile menu button remains the same */}
          <button className="md:hidden bg-gray-100 p-2 rounded-lg">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu remains the same */}
      <div className="md:hidden">
        {/* ... existing mobile menu code ... */}
      </div>
    </motion.header>
  )
}

export default Navbar