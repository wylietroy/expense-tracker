const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  type: {
    type: String,
    enum: ['expense', 'income'],
  },
  date: {
    type: Date,
  },
  frequency: {
    type: String,
    enum: ['none', 'daily', 'weekly', 'monthly'],
  }
});

module.exports = mongoose.model('Expense', expenseSchema);

// module.exports = Expense;