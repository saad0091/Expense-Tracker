import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { FiDollarSign, FiShoppingBag, FiCoffee, FiTruck, FiTv, FiFileText, FiMoreHorizontal } from 'react-icons/fi'

const categoryIcons = {
  'Food & Dining': FiCoffee,
  'Transportation': FiTruck,
  'Shopping': FiShoppingBag,
  'Entertainment': FiTv,
  'Bills & Utilities': FiFileText,
  'Others': FiMoreHorizontal
}

function ExpenseList({ expenses }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black rounded-xl p-6 shadow-2xl border border-gray-800"
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Recent Expenses</h2>
      <div className="space-y-4">
        <AnimatePresence>
          {expenses.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 text-center py-8"
            >
              No expenses added yet
            </motion.p>
          ) : (
            expenses.map((expense, index) => (
              <motion.div
                key={expense.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg">
                    {React.createElement(categoryIcons[expense.category] || FiDollarSign, {
                      className: "text-blue-500 text-xl"
                    })}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{expense.title}</h3>
                    <p className="text-sm text-gray-400">{expense.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <motion.p 
                    className="font-medium text-white"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    ${expense.amount.toFixed(2)}
                  </motion.p>
                  <p className="text-sm text-gray-400">{expense.date}</p>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ExpenseList
