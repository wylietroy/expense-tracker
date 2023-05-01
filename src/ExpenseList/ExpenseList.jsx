import React from 'react';

function ExpenseList({ expenses }) {
    const earnings = expenses.filter((expense) => expense.type === 'earning');
    const expensesList = expenses.filter((expense) => expense.type === 'expense');
  
    
    const calculateTotal = (transactions) => {
    return transactions.reduce((total, transaction) => {
        return total + parseFloat(transaction.amount);
    }, 0);
    };
  
    const totalEarnings = calculateTotal(earnings);
    const totalExpenses = calculateTotal(expensesList);
  
    return (
      <div>
        <h3>Total: ${totalEarnings - totalExpenses}</h3>
        <h4>Total Earnings: ${totalEarnings}</h4>
        <h4>Total Expenses: ${totalExpenses}</h4>
      </div>
    );
  }

export default ExpenseList;