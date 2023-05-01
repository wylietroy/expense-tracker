import React from 'react';

// function ExpenseList(props) {
//     return (
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Amount</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {props.expense.map((expense, index) => (
//                     <tr key={index}>
//                         <td>{expense.title}</td>
//                         <td>{expense.amount}</td>
//                     </tr>
//                 ))}
                

//             </tbody>
//         </table>
//     );
// }

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