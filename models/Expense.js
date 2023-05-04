const mongoose = require('mongoose');
const Expense = mongoose.model('Expense', expenseSchema);
const Schema = mongoose.Schema;


const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['expense', 'income'],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  frequency: {
    type: String,
    enum: ['none', 'weekly', 'monthly'],
    required: true
  }
});


module.exports = Expense;