import React, {useState} from "react";

function ExpenseForm({ addExpense }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('expense');
  
    function handleSubmit(evt) {
      evt.preventDefault();
      const expense = { description, amount, type };
      addExpense(expense);
      setDescription('');
      setAmount(0);
      setType('expense');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Description
          <input type="text" value={description} onChange={(evt) => setDescription(evt.target.value)} />
        </label>
        <br />
        <label>
          Amount
          <input type="number" value={amount} onChange={(evt) => setAmount(evt.target.value)} />
        </label>
        <br />
        <label>
          Type
          <select value={type} onChange={(evt) => setType(evt.target.value)}>
            <option value="expense">Expense</option>
            <option value="earning">Earning</option>
          </select>
        </label>
        <br />
        <button className="efbtn" type="submit">Add</button>
      </form>
    );
  }

export default ExpenseForm;