const Expense = require('../models/expense');

exports.postAddExpense = async (req, res) => {
    try {
        const { amount, description, category } = req.body;
        const newExpense = await Expense.create({ amount, description, category });
        res.status(201).json(newExpense);
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const expense = await Expense.findByPk(id);
        if (!expense) {
            return res.status(404).json({ error: "Expense not found" });
        }
        await expense.destroy();
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        console.error("Error deleting expense:", error);
        res.status(500).json({ error: "Failed to delete expense" });
    }
}