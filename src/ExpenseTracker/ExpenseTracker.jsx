import React, {useState} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseList from '../ExpenseList/ExpenseList'
import './ExpenseTracker.css';

function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);
    const [transactions, setTransactions] = useState([]);
  
    const addExpense = (expense) => {
      setExpenses([...expenses, expense]);
      setTransactions([...transactions, expense]);
    };
  
    return (
      <div className="container-et">
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <div className="transactions-container">
          <h2>Transaction History:</h2>
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.description} - {transaction.type === 'earning' ? '+' : '-'} ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>
        <div className="expenses-container">
          <h2>Expenses:</h2>
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    );
  }
export default ExpenseTracker;