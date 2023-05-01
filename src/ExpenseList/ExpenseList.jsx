import React from 'react';

function ExpenseList({ expenses }) {
    const earnings = expenses.filter((expense) => expense.type === 'earning');
    const expensesList = expenses.filter((expense) => expense.type === 'expense');
  
    const calculateTotal = (transactions) => {
      return transactions.reduce((total, transaction) => {
        return total + parseInt(transaction.amount);
      }, 0);
    };
  
    const totalEarnings = calculateTotal(earnings);
    const totalExpenses = calculateTotal(expensesList);
    const total = totalEarnings - totalExpenses;
  
    return (
        
      <div>
        
        <h2>Total:</h2>
        <p>${total}</p>

        <h2>Earnings:</h2>
        <ul>
          {earnings.map((expense) => (
            <li key={expense.id}>
              {expense.description}: ${expense.amount}
            </li>
          ))}
        </ul>
        <p>Total Earnings: ${totalEarnings}</p>
  
        <h2>Expenses:</h2>
        <ul>
          {expensesList.map((expense) => (
            <li key={expense.id}>
              {expense.description}: ${expense.amount}
            </li>
          ))}
        </ul>
        <p>Total Expenses: ${totalExpenses}</p>
  
        
      </div>
    );
  }

export default ExpenseList;