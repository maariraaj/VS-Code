const expenseForm = document.querySelector("#expense-form");
const amountInput = document.querySelector("#amount");
const descriptionInput = document.querySelector("#description");
const categoryInput = document.querySelector("#category");
const expensesTable = document.querySelector("#expenses-table tbody");

const fetchExpenses = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get("/expenses/expenses", {
            headers: { 'Authorization': token }
        });
        renderExpenses(response.data);
    } catch (error) {
        console.error("Error fetching expenses:", error);
    }
};

const renderExpenses = (expenses) => {
    expensesTable.innerHTML = "";
    expenses.forEach((expense) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td class="border px-4 py-2">${expense.amount}</td>
        <td class="border px-4 py-2">${expense.description}</td>
        <td class="border px-4 py-2">${expense.category}</td>
        <td class="border px-4 py-2">
            <button class="bg-rose-600 text-white px-4 py-2 rounded" onclick="deleteExpense(${expense.id})">
                Delete
            </button>
        </td>
    `;
        expensesTable.appendChild(row);
    });
};

const addExpense = async (amount, description, category) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post("/expenses/expense",
            {
                amount,
                description,
                category,
            },
            { headers: { 'Authorization': token } }
        );
        fetchExpenses();
    } catch (error) {
        console.error("Error adding expense:", error);
    }
};

async function deleteExpense(expenseId) {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.delete(`http://localhost:5000/expenses/${expenseId}`, {
            headers: { 'Authorization': token }
        });
        if (response.status === 200) {
            alert("Expense deleted successfully!");
            fetchExpenses();
        }
    } catch (error) {
        console.error("Error deleting expense:", error);
        alert("An error occurred while deleting the expense.");
    }
}

expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const amount = amountInput.value.trim();
    const description = descriptionInput.value.trim();
    const category = categoryInput.value;

    if (!amount || !description || !category) {
        alert("Please fill in all fields!");
        return;
    }

    addExpense(amount, description, category);
    expenseForm.reset();
});

document.addEventListener("DOMContentLoaded", fetchExpenses);