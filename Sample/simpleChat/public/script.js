const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("message-list");
const groupNameInput = document.getElementById("group-name");
const createGroupButton = document.getElementById("create-group");
const groupsList = document.getElementById("groups");

let currentGroup = "";

// Create a new group
createGroupButton.addEventListener("click", () => {
    const groupName = groupNameInput.value;
    if (groupName) {
        socket.emit("create group", groupName); // Emit create group event
        groupNameInput.value = '';  // Clear the input field after creating
    }
});

// Join a selected group
groupsList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        const groupName = e.target.textContent;
        if (groupName) {
            socket.emit("join group", groupName); // Emit join group event
            currentGroup = groupName;
            messages.innerHTML = ""; // Clear previous messages
        }
    }
});

// Send a message
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = input.value;
    if (msg && currentGroup) {
        socket.emit("chat message", msg, currentGroup);
        input.value = "";
    }
});

// Display messages in the UI
socket.on("chat message", (msg) => {
    const item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

// Update the group list on the left side
socket.on("update group list", (groupNames) => {
    groupsList.innerHTML = "";
    groupNames.forEach((groupName) => {
        const li = document.createElement("li");
        li.textContent = groupName;
        groupsList.appendChild(li);
    });
});
