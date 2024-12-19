import React, { useState } from 'react';
import OverviewCard from '../components/OverviewCard';
import LineChart from '../components/Line';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSections from '../components/DashboardSections'; 

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-vercel-dark text-white">
            {/* Sidebar Toggle Button */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 left-4 z-50 p-2 bg-vercel-gray rounded-lg md:hidden"
            >
                {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        className="fixed left-0 top-0 h-full w-64 bg-vercel-gray p-6 shadow-lg"
                    >
                        <div className="grid gap-8">
                            <h1 className="text-2xl font-bold text-vercel-highlight">Expense Tracker</h1>
                            <nav className="grid gap-4">
                                <a href="#" className="grid items-center gap-3 text-lg hover:text-vercel-highlight transition-colors">
                                    <FiHome /> Home
                                </a>
                                <a href="#" className="grid items-center gap-3 text-lg hover:text-vercel-highlight transition-colors">
                                    <FiDollarSign /> Expenses
                                </a>
                                <a href="#" className="grid items-center gap-3 text-lg hover:text-vercel-highlight transition-colors">
                                    <FiPieChart /> Analytics
                                </a>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className={`transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}> 
                <DashboardNavbar />
                <div className="container mx-auto px-6 py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid gap-8"
                    >
                        <h2>Your Financial Overview</h2>
                        <div className="cards">
                            <OverviewCard title="Available Balance" amount="$2500" />
                            <OverviewCard title="Income" amount="$6000" />
                            <OverviewCard title="Expense" amount="$3500" />
                        </div>
                        <LineChart data={{ income: [6000, 7000, 8000], expenses: [3500, 3000, 4000] }} />
                        <DashboardSections />
                        {/* Removed ExpenseForm, ExpenseChart, and ExpenseList components */}
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
