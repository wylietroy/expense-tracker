import React, {useState, useEffect} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseList from '../ExpenseList/ExpenseList'
import './ExpenseTracker.css';
import axios from 'axios';


// This is AFTER Implementing localStorage
// function ExpenseTracker() {
//   const [expenses, setExpenses] = useState(() => {
//     const savedExpenses = localStorage.getItem('expenses');
//     return savedExpenses ? JSON.parse(savedExpenses) : [];
//   });

//   const [transactions, setTransactions] = useState(() => {
//     const savedTransactions = localStorage.getItem('transactions');
//     return savedTransactions ? JSON.parse(savedTransactions) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('expenses', JSON.stringify(expenses));
//   }, [expenses]);

//   useEffect(() => {
//     localStorage.setItem('transactions', JSON.stringify(transactions));
//   }, [transactions]);

//   const addExpense = (expense) => {
//     setExpenses([...expenses, expense]);
//     setTransactions([...transactions, expense]);
//   };


// AJAX and localStorage
function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }

    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addExpense = (expense) => {
    axios
      .post('/api/expenses', expense)
      .then((response) => {
        setExpenses([...expenses, expense]);
        setTransactions([...transactions, expense]);
      })
      .catch((error) => {
        console.error(error);
      });
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
          {/* <h2>Expenses:</h2> */}
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    );
  }
  
export default ExpenseTracker;