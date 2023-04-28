import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);

    const addExpenses = expense => {
        setExpenses([...expenses, expense])
    };

    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <ExpenseForm onAddExpense = {addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default ExpenseTracker;