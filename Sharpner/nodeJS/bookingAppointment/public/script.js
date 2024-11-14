function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };
    axios
        .post("http://localhost:3000/appointmentData", userDetails)
        .then((response) => displayUserOnScreen(response.data))
        .catch((error) => console.log(error));

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}

window.addEventListener("DOMContentLoaded", () => {
    axios
        .get("http://localhost:3000/appointmentData")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                displayUserOnScreen(response.data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        });
});

function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
        document.createTextNode(
            `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
        )
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);

    const userList = document.querySelector("ul");
    userList.appendChild(userItem);

    deleteBtn.addEventListener("click", function (event) {
        userList.removeChild(event.target.parentElement);
        axios
            .delete(`http://localhost:3000/appointmentData/${userDetails.id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    });

    editBtn.addEventListener("click", function (event) {
        userList.removeChild(event.target.parentElement);
        axios
            .delete(`http://localhost:3000/appointmentData/${userDetails.id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        document.getElementById("username").value = userDetails.username;
        document.getElementById("email").value = userDetails.email;
        document.getElementById("phone").value = userDetails.phone;
    });
}