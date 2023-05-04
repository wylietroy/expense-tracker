import React, {useState, useEffect} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseList from '../ExpenseList/ExpenseList'
import './ExpenseTracker.css';


function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch('/expenses');
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    try {
      const response = await fetch('/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expense)
      });

      const data = await response.json();
      setExpenses([...expenses, data]);
      setTransactions([...transactions, data]);
    } catch (error) {
      console.error(error);
    }
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
                {transaction.description} for {transaction.type === 'earning' ? '+' : '-'} ${transaction.amount}
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