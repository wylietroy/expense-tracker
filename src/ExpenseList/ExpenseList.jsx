import React from 'react';

function ExpenseList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {/* {props.expense.map((expense, index) => (
                    <tr key={index}>
                        <td>{expense.title}</td>
                        <td>{expense.amount}</td>
                    </tr>
                ))}
                 */}

            </tbody>
        </table>
    );
}

export default ExpenseList;