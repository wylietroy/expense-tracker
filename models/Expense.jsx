const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
  frequency: { type: String, required: true },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;