import React, {useState} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseList from '../ExpenseList/ExpenseList'

function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <ExpenseForm addExpense = {addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default ExpenseTracker;