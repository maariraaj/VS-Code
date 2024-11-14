const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

router.post('/expenseData', async (req, res) => {
    try {
        const newExpense = await Expense.create(req.body);
        res.json(newExpense);
    } catch (err) {
        console.log(err);
    }
});

router.get('/expenseData', async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.json(expenses);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/expenseData/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Expense.destroy({ where: { id } });
        res.json({ message: 'Expense Deleted' });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;