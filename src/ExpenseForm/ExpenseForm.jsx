import React, {useState} from "react";

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [date, setDate] = useState("");
  const [frequency, setFrequency] = useState("none");

  function handleSubmit(evt) {
    evt.preventDefault();
    const expense = { description, amount, type, date, frequency };
    fetch("/expenses", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        addExpense(data);
        // console.log("Expense added:", data);
        setDescription("");
        setAmount("");
        setType("expense");
        setDate("");
        setFrequency("none");
      })
      .catch((error) => console.error(error));
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