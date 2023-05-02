const express = require('express');
const router = express.Router();
const expensesCtrl = require('../controllers/expenses')

router.get('/', expensesCtrl.getAll);
router.post('/', expensesCtrl.create);
router.put('/:id', expensesCtrl.update);
router.delete('/:id', expensesCtrl.delete);

module.exports = router;