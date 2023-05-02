let expenses = [];

module.exports = {
    getAll: (req, res) => {
        res.json(expenses);
    },

    create: (req, res) => {
        const { descrition, amount } = req.body;
        const newExpense = { description, amount};
        expenses.push(newExpense);
        res.status(201).json(newExpense);
    },

    update: (req, res) => {
        const id = req.params.id;
        const expense = expense.find((e) => e.id === id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        const { description, amount } = req.body;
        expense.description = description;
        expense.amount = amount;

        res.json(expense);
    },

    delete: (req, res) => {
        const id = req.params.id;
        expenses = expenses.filter((e) => e.id !== id);
        res.status(204).end();
    },
};