import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseChart from '../components/ExpenseChart';
import DashboardNavbar from '../components/DashboardNavbar';

const Investments = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, { ...expense, id: Date.now() }]);
    };

    return (
        <div className="min-h-screen bg-white text-black p-6 ml-14 mt-0">
         <div className="mt-[-24px] ml-[-70px]">
        <DashboardNavbar />
    </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ml-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold mb-4 ">Add New Expense</h2>
                <ExpenseForm onAddExpense={addExpense} />
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold mb-4">Expense Overview</h2>
                <ExpenseChart expenses={expenses} />
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
                <ExpenseList expenses={expenses} />
            </div>
        </div>
    </div>
    );
};

export default Investments;