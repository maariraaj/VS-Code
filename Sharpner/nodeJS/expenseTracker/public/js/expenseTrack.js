const expenseForm = document.querySelector("#expense-form");
const amountInput = document.querySelector("#amount");
const descriptionInput = document.querySelector("#description");
const categoryInput = document.querySelector("#category");
const expensesTable = document.querySelector("#expenses-table tbody");
const premiumButton = document.getElementById("rzp-button1");

const fetchExpenses = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/auth/logIn.html';
    }
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

const premiumStatusText = document.createElement("div");
premiumStatusText.textContent = "You are a premium user!";
premiumStatusText.classList.add(
    "text-4xl",
    "font-bold",
    "text-transparent",
    "bg-clip-text",
    "bg-gradient-to-r",
    "from-teal-400",
    "via-pink-500",
    "to-purple-600"
);

const checkPremiumStatus = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get('/purchase/orders', {
            headers: { 'Authorization': token },
        });

        const orders = response.data.orders;

        const isPremiumUser = orders.some(order => order.status === 'SUCCESSFUL');

        if (isPremiumUser) {
            premiumButton.replaceWith(premiumStatusText);
        }
    } catch (error) {
        console.error("Error checking premium status:", error);
    }
};

premiumButton.onclick = async (e) => {
    const token = localStorage.getItem('token');
    const response = await axios.get('/purchase/premiumMembership', {
        headers: { Authorization: token },
    });
    const options = {
        key: response.data.key_id,
        order_id: response.data.order.id,
        handler: async function (response) {
            await axios.post('/purchase/updateTransactionStatus', {
                order_id: options.order_id,
                payment_id: response.razorpay_payment_id,
                status: 'SUCCESSFUL',
            }, {
                headers: { Authorization: token },
            });
            checkPremiumStatus();
        },
        'modal': {
            'ondismiss': async function () {
                await axios.post('http://localhost:5000/purchase/updateTransactionStatus',
                    {
                        order_id: options.order_id,
                        status: 'FAILED',
                    },
                    { headers: { "Authorization": token } }
                );
                alert("Transaction Failed or Cancelled!");
            }
        }
    };
    const razorpay = new Razorpay(options);
    razorpay.open();
};

document.addEventListener("DOMContentLoaded", () => {
    fetchExpenses();
    checkPremiumStatus();
});