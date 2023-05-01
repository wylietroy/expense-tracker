import React, {useState} from "react";

// function ExpenseForm(props) {
//     const [title,setTitle] = useState('');
//     const [amount, setAmount] = useState('');

//     const handleSubmit = event => {
//         event.preventDefault();
//         const expense = {
//             title: title,
//             amount: amount,
//         };
//         setTitle('');
//         setAmount('');
//         props.onAddExpense(expense);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <label htmlFor="title">For</label>
//                 <input type="text" className="form-control" id="title" value={title} onChange={event => setTitle(event.target.value)} 
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="amount">Amount</label>
//                 <input type="text" className="form-control" id="amount" value={amount} onChange={event => setAmount(event.target.value)} 
//                 />
//             </div>
//             <button type="submit" className="btn btn-primary">Add</button>
//         </form>
//     );
// }

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
        <button type="submit">Add</button>
      </form>
    );
  }

export default ExpenseForm;