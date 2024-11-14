function handleFormSubmit(event) {
    event.preventDefault();

    if (event.target.category.value !== "select") {
        let expObj = {
            exAmount: event.target.exAmount.value,
            description: event.target.description.value,
            category: event.target.category.value
        }
        axios.post('http://localhost:8000/expenseData', expObj)
            .then(response => showExpenses(response.data))
            .catch(err => console.log(err));

        event.target.exAmount.value = "";
        event.target.description.value = "";
        event.target.category.value = "select";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:8000/expenseData')
        .then(response => {
            for (let expense of response.data) {
                showExpenses(expense);
            }
        })
        .catch(err => console.log(err));
});

function showExpenses(expense) {
    const uList = document.getElementById('myList');
    const liList = document.createElement('li');

    const space1 = document.createTextNode(' ');
    const space2 = document.createTextNode(' ');
    const amount = document.createTextNode(expense.exAmount);
    const desc = document.createTextNode(expense.description);
    const cate = document.createTextNode(expense.category);

    liList.appendChild(amount);
    liList.appendChild(space1);
    liList.appendChild(desc);
    liList.appendChild(space2);
    liList.appendChild(cate);
    liList.setAttribute("class", "list-group-item text-white bg-dark");

    uList.appendChild(liList);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Expense";
    deleteButton.onclick = function () {
        axios.delete(`http://localhost:8000/expenseData/${expense.id}`)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        liList.remove();
    };
    deleteButton.setAttribute("class", "btn btn-danger m-3")
    liList.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit Expense";
    editButton.onclick = function () {
        document.getElementById('exAmount').value = expense.exAmount;
        document.getElementById('description').value = expense.description;
        document.getElementById('category').value = expense.category;
        axios.delete(`http://localhost:8000/expenseData/${expense.id}`)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        liList.remove();
    };
    editButton.setAttribute("class", "btn btn-info m-3");
    liList.appendChild(editButton);
};