import React, { useState, useEffect } from 'react';
import { ArrowUpRight, RefreshCcw, Wallet, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardSections = () => {
    const [paymentMethods, setPaymentMethods] = useState([{ method: '', amount: '0' }]);
    const [availableBalance, setAvailableBalance] = useState('');
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState([{ category: '', amount: '0' }]);
    const [chartData, setChartData] = useState([]);
    const [showSpendingBreakdown, setShowSpendingBreakdown] = useState(false);

    useEffect(() => {
        const newChartData = [
            { name: 'Jan', income: parseFloat(income) || 0, expenses: expenses.reduce((acc, exp) => acc + (parseFloat(exp.amount) || 0), 0) },
            { name: 'Feb', income: (parseFloat(income) || 0) * 1.1, expenses: expenses.reduce((acc, exp) => acc + (parseFloat(exp.amount) || 0), 0) * 1.05 },
            { name: 'Mar', income: (parseFloat(income) || 0) * 1.2, expenses: expenses.reduce((acc, exp) => acc + (parseFloat(exp.amount) || 0), 0) * 1.1 },
        ];
        setChartData(newChartData);
    }, [income, expenses]);

    const handlePaymentChange = (index, field, value) => {
        const newPaymentMethods = [...paymentMethods];
        newPaymentMethods[index][field] = value;
        setPaymentMethods(newPaymentMethods);
    };

    const addPaymentMethod = () => {
        setPaymentMethods([...paymentMethods, { method: '', amount: '0' }]);
    };

    const handleBalanceChange = (e) => {
        setAvailableBalance(e.target.value);
    };

    const handleIncomeChange = (e) => {
        setIncome(e.target.value);
    };

    const handleExpenseChange = (index, field, value) => {
        const newExpenses = [...expenses];
        newExpenses[index][field] = value;
        setExpenses(newExpenses);
    };

    const handleSubmit = () => {
        setShowSpendingBreakdown(true);
    };

    const addExpense = () => {
        setExpenses([...expenses, { category: '', amount: '0' }]);
    };

    return (
        <div className="flex flex-col">
            <div className="p-6 bg-black min-h-fit -mt-8 -mb-12 -ml-[215px] -mr-5 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg border border-gray-700">
                                <RefreshCcw className="h-5 w-5 text-teal-400" />
                            </div>
                            <span className="text-gray-400">Available Balance</span>
                        </div>
                        <input 
                            type="number" 
                            value={availableBalance} 
                            onChange={handleBalanceChange} 
                            className="text-2xl font-semibold text-white bg-[#242424] border border-gray-700 rounded-md px-2 py-1"
                            placeholder="0$"
                        />
                    </div>

                    <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg border border-gray-700">
                                <ArrowUpRight className="h-5 w-5 text-teal-400" />
                            </div>
                            <span className="text-gray-400">Income</span>
                        </div>
                        <input 
                            type="number" 
                            value={income} 
                            onChange={handleIncomeChange} 
                            className="text-2xl font-semibold text-white bg-[#242424] border border-gray-700 rounded-md px-2 py-1"
                            placeholder="0$"
                        />
                    </div>

                    <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg border border-gray-700">
                                <Wallet className="h-5 w-5 text-teal-400" />
                            </div>
                            <span className="text-gray-400">Expense</span>
                        </div>
                        <div className="text-2xl font-semibold text-white">${expenses.reduce((acc, exp) => acc + (parseFloat(exp.amount) || 0), 0).toFixed(2) || '0'}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-white text-lg font-semibold">Analytics</h2>
                                <select className="bg-transparent text-teal-400 border border-gray-700 rounded-md px-3 py-1 text-sm">
                                    <option>Monthly</option>
                                </select>
                            </div>
                            <div className="h-[300px] relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="income" stroke="#8884d8" />
                                        <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-white text-lg font-semibold">Account Overview</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">User</span>
                                    <span className="text-white">guest</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Invested</span>
                                    <span className="text-white">${((parseFloat(availableBalance) || 0) * 0.6).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Spent</span>
                                    <span className="text-white">${expenses.reduce((acc, exp) => acc + (parseFloat(exp.amount) || 0), 0).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Saved</span>
                                    <span className="text-white">
                                        ${((parseFloat(availableBalance) || 0) - expenses.reduce((acc, exp) => acc + (parseFloat(exp.amount) || 0), 0)).toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Available Funds</span>
                                    <span className="text-white">${(parseFloat(availableBalance) || 0).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-white text-lg font-semibold">Statistics</h2>
                        </div>

                        {!showSpendingBreakdown ? (
                            <>
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-white">Payment Modes</h3>
                                        <button 
                                            className="flex items-center gap-1 text-sm bg-[#242424] text-teal-400 px-3 py-1 rounded-md border border-gray-700"
                                            onClick={addPaymentMethod}
                                        >
                                            <Plus className="h-4 w-4" />
                                            Add New
                                        </button>
                                    </div>
                                    <div className="space-y-3">
                                        {paymentMethods.map((payment, index) => (
                                            <div key={index} className="flex justify-between items-center p-3 bg-[#242424] rounded-lg border border-gray-700">
                                                <input 
                                                    type="text" 
                                                    value={payment.method} 
                                                    onChange={(e) => handlePaymentChange(index, 'method', e.target.value)} 
                                                    className="text-2xl font-semibold text-white bg-[#242424] border border-gray-700 rounded-md px-2 py-1"
                                                />
                                                <input 
                                                    type="number" 
                                                    value={payment.amount} 
                                                    onChange={(e) => handlePaymentChange(index, 'amount', e.target.value)} 
                                                    className="text-2xl font-semibold text-white bg-[#242424] border border-gray-700 rounded-md px-2 py-1"
                                                    placeholder="$0"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-white">Expenditure [Where You Spend Your Money]</h3>
                                        <select className="bg-transparent text-teal-400 border border-gray-700 rounded-md px-3 py-1 text-sm">
                                            <option>Monthly</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        {expenses.map((expense, index) => (
                                            <div key={index} className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <input 
                                                        type="text" 
                                                        value={expense.category} 
                                                        onChange={(e) => handleExpenseChange(index, 'category', e.target.value)} 
                                                        className="text-2xl font-semibold text-white bg-[#242424] border border-gray-700 rounded-md px-2 py-1"
                                                        placeholder="Category"
                                                    />
                                                    <input 
                                                        type="number" 
                                                        value={expense.amount} 
                                                        onChange={(e) => handleExpenseChange(index, 'amount', e.target.value)} 
                                                        className="text-2xl font-semibold text-white bg-[#242424] border border-gray-700 rounded-md px-2 py-1"
                                                        placeholder="$0"
                                                    />
                                                </div>
                                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full bg-teal-400 rounded-full"
                                                        style={{ width: `${expense.amount}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        
                                        <button 
                                            className="flex items-center gap-1 text-sm bg-[#242424] text-teal-400 px-3 py-1 rounded-md border border-gray-700"
                                            onClick={addExpense}
                                        >
                                            <Plus className="h-4 w-4" />
                                            Add New
                                        </button>
                                        <button 
                                            className="flex items-center gap-1 text-sm bg-[#242424] text-teal-400 px-3 py-1 rounded-md border border-gray-700"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                        <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                                            <span className="text-gray-400">TOTAL</span>
                                            <span className="text-white">${expenses.reduce((acc, exp) => acc + (parseFloat(exp.amount) || 0), 0).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="bg-black text-white p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
                                <h3 className="text-xl font-bold mb-4 text-vercel-blue">Spending Breakdown</h3>
                                <div className="space-y-4">
                                    {expenses.map((expense, index) => (
                                        <div key={index} className="flex justify-between items-center animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                                            <span className="font-medium">{expense.category || 'Uncategorized'}</span>
                                            <div className="flex items-center">
                                                <span className="mr-2">${parseFloat(expense.amount || '0').toFixed(2)}</span>
                                                <div className="w-32 bg-gray-700 rounded-full h-2">
                                                    <div
                                                        className="bg-vercel-blue rounded-full h-2 transition-all duration-500 ease-in-out"
                                                        style={{
                                                            width: `${(parseFloat(expense.amount || '0') / expenses.reduce((acc, exp) => acc + parseFloat(exp.amount || '0'), 0)) * 100}%`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between items-center">
                                    <span className="font-bold">Total</span>
                                    <span className="font-bold">
                                        ${expenses.reduce((acc, exp) => acc + parseFloat(exp.amount || '0'), 0).toFixed(2)}
                                    </span>
                                </div>
                                <button 
                                    className="mt-4 bg-vercel-blue text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105"
                                    onClick={() => setShowSpendingBreakdown(false)}
                                >
                                    Back to Statistics
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSections;

<style jsx global>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out forwards;
  }
  .text-vercel-blue {
    color: #0070f3;
  }
  .bg-vercel-blue {
    background-color: #0070f3;
  }
`}</style>

