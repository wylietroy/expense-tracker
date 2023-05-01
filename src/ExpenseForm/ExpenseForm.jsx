import React, {useState} from "react";

function ExpenseForm(props) {
    const [title,setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const expense = {
            title: title,
            amount: amount,
        };
        setTitle('');
        setAmount('');
        props.onAddExpense(expense);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">For</label>
                <input type="text" className="form-control" id="title" value={title} onChange={event => setTitle(event.target.value)} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input type="text" className="form-control" id="amount" value={amount} onChange={event => setAmount(event.target.value)} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
}

export default ExpenseForm;