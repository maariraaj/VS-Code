const modalSubmitBtn = document.getElementById('modalSubmitButton');
const chatForm = document.getElementById("chatForm");
const formHiddenInput = chatForm.querySelector('input[type="hidden"]');
const chatsDiv = document.getElementById("chats");
const groupModal = document.getElementById("groupModal");
const createGroupBtn = document.getElementById("createGroupButton");
const modalCloseBtn = document.getElementById("modalCloseButton");
const createGroupFrom = document.getElementById('createGroupForm');
const user_list = document.getElementById('userList');
const logoutBtn = document.getElementById("logoutButton");
const token = localStorage.getItem("token");

const LOCAL_STORAGE_KEY = "groupChatMessages";
const MAX_LOCAL_STORAGE_CHATS = 10;
let group_id = 1;
let timerId = null;

const loadChatsFromLocalStorage = () => {
    const storedChats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    chatsDiv.innerHTML = "";
    storedChats.forEach(chat => {
        const chatBox = document.createElement("div");
        chatBox.className = "p-4 bg-emerald-100 rounded-lg shadow-md border border-emerald-300 break-words";
        chatBox.innerHTML = `
                <span class="text-emerald-800 font-semibold">${chat.user}:</span>
                <span class="ml-2">${chat.message}</span>
            `;
        chatsDiv.appendChild(chatBox);
    });
};

const saveChatsToLocalStorage = (chats) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chats));
};

chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const messageInput = document.getElementById("message");
    const message = messageInput.value.trim();
    const formElement = event.target;

    const hiddenInput = formElement.querySelector('input[type="hidden"]');
    const currentGroupId = hiddenInput.id;
    if (message) {
        try {
            const userId = localStorage.getItem("userId");
            const username = localStorage.getItem("username");
            const response = await axios.post("/chats/chat",
                { message, userId, username, currentGroupId },
                { headers: { 'Authorization': token } }
            );
            const newChat = {
                user: response.data.name,
                message: response.data.message,
                timestamp: response.data.createdAt,
            };
            const storedChats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

            const updatedChats = [newChat, ...storedChats].slice(0, MAX_LOCAL_STORAGE_CHATS);

            saveChatsToLocalStorage(updatedChats);
            messageInput.value = "";
            loadChatsFromLocalStorage();
        } catch (error) {
            console.error("Error sending chat:", error);
        }
    }
});

createGroupBtn.addEventListener("click", async () => {
    groupModal.classList.remove("hidden");

    await showingAllUser();
});

async function showingAllUser() {
    try {
        const userListContainer = document.getElementById("userListContainer");
        const userList = document.getElementById("userList");

        userListContainer.classList.remove("hidden");

        const usersResponse = await axios.get("/chats/get-users", {
            headers: { 'Authorization': token }
        });
        userList.innerHTML = "";
        const { users } = usersResponse.data;
        let text = "";
        users.forEach((user) => {
            text += `                                  
        <li class="flex justify-between items-center p-3 bg-emerald-200 border-b border-emerald-700 rounded-lg">
            <div class="flex items-center space-x-3">
                <h6 class="font-semibold text-gray-700">${user.name}</h6>
            </div>
            <input 
                type="checkbox" 
                class="form-checkbox h-5 w-5 text-emerald-950" 
                name="users" 
                value="${user.id}"
            >
        </li>`;
        });

        userList.innerHTML = text;

    } catch (error) {
        console.error(error);
        alert(error.response?.data?.message || "Failed to fetch users");
    }
}

modalCloseBtn.addEventListener("click", () => {
    groupModal.classList.add("hidden");
});

modalSubmitBtn.addEventListener("click", async (e) => {
    try {
        if (createGroupFrom.checkValidity()) {
            e.preventDefault();
            const groupName = createGroupFrom.querySelector('#group_name').value;
            const groupDescription = createGroupFrom.querySelector('#groupDescription').value;
            const selectedUsers = Array.from(user_list.querySelectorAll('input[name="users"]:checked'))
                .map(checkbox => checkbox.value);
            const data = {
                name: groupName,
                membersNo: selectedUsers.length + 1,
                membersIds: selectedUsers,
                description: groupDescription
            }
            await axios.post('/chats/create-group', data,
                { headers: { "Authorization": token } }
            );
            Toastify({
                text: "Group successfully created",
                style: {
                    background: "green",
                },
                close: true,
                gravity: "top",
                position: "right",
                duration: 2000,
            }).showToast();

            createGroupFrom.reset();
            groupModal.classList.add("hidden");
            showGroup();
        } else {
            Toastify({
                text: 'Fill all details',
                style: {
                    background: "red",
                },
                close: true,
                gravity: "top",
                position: "right",
                duration: 3000,
            }).showToast();
        }

    } catch (error) {
        console.log(error);
        alert(error.response.data.message);
    }
});

async function showGroup() {
    try {
        const groupList = document.getElementById("groupList");

        const response = await axios.get("/chats/get-mygroups", {
            headers: { "Authorization": token }
        });
        const { groups } = response.data;

        groupList.innerHTML = "";
        groupList.innerHTML =
            `<div
            class="p-3 border border-emerald-500 rounded-lg cursor-pointer hover:bg-emerald-100 flex items-center justify-between"
            id="0"
        >
            <div class="flex items-center space-x-3" onclick="showGroupChats(1)">
            <strong class="text-gray-700">Common-group</strong>
            </div>
            <small class="text-gray-500">All Members</small>
        </div>`;
        groups.forEach((group) => {
            groupList.innerHTML += `
            <div
            class="p-3 border border-emerald-500 rounded-lg cursor-pointer hover:bg-emerald-100 flex items-center justify-between"
            id="${group.id}" onclick="showGroupChats(${group.id})"
            >
                <div class="flex items-center space-x-3">
                    <strong class="text-gray-700">${group.name}</strong>
                </div>
                <small class="text-gray-500">${group.membersNo} Members</small>
            </div>`;
        });
    } catch (error) {
        console.error(error);
    }
}

async function showGroupChats(groupId) {
    group_id = groupId;
    try {
        const APIresponse = await axios.get(`chats/get-group-messages?groupId=${groupId}`, {
            headers: { "Authorization": token }
        });
        const apiChats = APIresponse.data.chats
        formHiddenInput.setAttribute("id", groupId);

        const updatedChats = apiChats.slice(0, MAX_LOCAL_STORAGE_CHATS);

        saveChatsToLocalStorage(updatedChats);
        loadChatsFromLocalStorage();
    } catch (error) {
        console.log(error);
        alert(error.response.data.message);
    }
}

logoutBtn.addEventListener("click", () => {
    clearInterval(timerId);
    localStorage.removeItem("groupChatMessages");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    window.location.href = "/user/login";
});

document.addEventListener("DOMContentLoaded", () => {
    if (!token) {
        window.location.href = "/user/login";
    }

    timerId = setInterval(() => {
        showGroupChats(group_id);
        showGroup();
    }, 1000);
});