function handleFormSubmit(event) {
    event.preventDefault();

    let myObj = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };
    let myObj_new = JSON.stringify(myObj);

    localStorage.setItem(event.target.email.value, myObj_new);

    let getObj = localStorage.getItem(event.target.email.value);

    let obj_get = JSON.parse(getObj);

    const uList = document.getElementById("myList");
    const liList = document.createElement("li");
    const nameText = document.createTextNode(obj_get.username);
    const emailText = document.createTextNode(obj_get.email);
    const phoneText = document.createTextNode(obj_get.phone);

    liList.appendChild(nameText);
    liList.appendChild(emailText);
    liList.appendChild(phoneText);

    uList.appendChild(liList);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        localStorage.removeItem(event.target.email.value);
        liList.remove();
    };
    liList.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
        event.target.username.value = obj_get.username;
        event.target.email.value = obj_get.email;
        event.target.phone.value = obj_get.phone;
        localStorage.removeItem(event.target.email.value);
        liList.remove();
    };
    liList.appendChild(editButton);


};
