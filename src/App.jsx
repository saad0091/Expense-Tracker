import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiDollarSign, FiPieChart, FiMenu, FiX } from 'react-icons/fi';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; 
import DashboardNavbar from './components/DashboardNavbar'; 
import DashboardSections from './components/DashboardSections';
import Investments from './pages/Investments';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; 
import AboutUs from './pages/AboutUs';
import { auth } from './firebase'; 
import { onAuthStateChanged } from 'firebase/auth';
import PricingSection from './components/PricingSection';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser); 
    });

    return () => unsubscribe(); 
  }, []);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  return (
    <Router>
      <div className="flex items-start">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex-grow">
          <AnimatePresence>
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Navbar user={user} hideNavbar={false} />
                    <Home user={user}/>
                  </motion.div>
                } 
              />
              <Route 
                path="/signin" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Navbar user={user} hideNavbar={false} />
                    <SignIn />
                  </motion.div>
                } 
              />
              <Route 
                path="/signup" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Navbar user={user} hideNavbar={false} />
                    <SignUp />
                  </motion.div>
                } 
              />
              <Route
                path="/dashboard"
                element={
                  <div className="min-h-screen bg-white text-black border-0">
                    <DashboardNavbar user={user} />
                    <main
                      className={`transition-all duration-300 flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-0'} max-w-full`}
                    >
                      <div className="container mx-auto px-4 py-8 max-w-full">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="grid gap-8"
                        >
                          <DashboardSections />
                        </motion.div>
                      </div>
                    </main>
                  </div>
                }
              />
              <Route path="/pricing" element={<PricingSection />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;