const express = require('express');
const expensesController = require('../controllers/expenses');

const router = express.Router();

router.post('/expense', expensesController.postAddExpense);

router.get('/expenses', expensesController.getExpenses);

router.delete("/:id", expensesController.deleteExpense);

module.exports = router;