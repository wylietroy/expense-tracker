import React, {useState, useEffect} from "react";

function ExpenseForm({ addExpense}) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('expense');
    const [date, setDate] = useState('');
    const [frequency, setFrequency] = useState('none')
  
    function handleSubmit(evt) {
      evt.preventDefault();
      const expense = { description, amount, type, date, frequency };
      addExpense(expense);
      setDescription('');
      setAmount(0);
      setType('expense');
      setDate('');
    }

return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <label>
           Type
           <select value={type} onChange={(evt) => setType(evt.target.value)}>
             <option value="expense">Expense</option>
             <option value="earning">Earning</option>
           </select>
         </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Frequency:
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="none">None</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </label>
      <button className="efbtn" type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;