const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Expense = require('./models/Expense')
const favicon = require('serve-favicon');
const logger = require('morgan');
// Always require and configure near the top
require('dotenv').config();
// Connect to the database
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

const port = process.env.PORT || 3000;

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

const expensesRouter = require('./routes/expenses');
app.use('/routes/expenses', expensesRouter);

// app.use('/models/Expense', require('./models/Expense'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3001, function() {
  console.log(`Express app running on port 3001`);
});

app.post('/expenses', (req, res) => {
  const newExpense = req.body;
  res.status(201).json(newExpense); // send a response back to the client
});

mongoose.connect('mongodb+srv://wyliesebtroy:wylietroy@cluster0.4mb0mlc.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

  // app.post('/expenses', (req, res) => {
  //   const { description, amount, type, date, frequency } = req.body;
  //   const expense = new Expense({
  //     description,
  //     amount,
  //     type,
  //     date,
  //     frequency
  //   });
  
  //   expense.save()
  //     .then((result) => res.json(result))
  //     .catch((err) => console.error(err));
  // });

  app.post("/expenses", (req, res) => {
    const { description, amount, type, date, frequency } = req.body;
    const newExpense = new Expense({
      description,
      amount,
      type,
      date,
      frequency,
    });
    newExpense.save((err, savedExpense) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving expense to database");
      } else {
        console.log("Expense saved:", savedExpense);
        res.send(savedExpense);
      }
    });
  });


// app.get('/', async (req, res) => {
//   try {
//     const expenses = await Expense.find({});
//     res.json(expenses);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

app.get("/expenses", (req, res) => {
  Expense.find((err, expenses) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error getting expenses from database");
    } else {
      console.log("Expenses retrieved:", expenses);
      res.send(expenses);
    }
  });
});