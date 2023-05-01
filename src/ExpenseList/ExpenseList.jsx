import React from 'react';

function ExpenseList(props) {
    return (
      <div>
        <h2>Expense List</h2>
        <ul>
          {props.expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description} - {expense.amount}
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default ExpenseList;