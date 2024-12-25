document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chatForm");
    const chatsDiv = document.getElementById("chats");

    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/user/login";
    }
    const LOCAL_STORAGE_KEY = "groupChatMessages";
    const MAX_LOCAL_STORAGE_CHATS = 10;

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

    const loadChatsFromBackend = async () => {
        try {
            const lastChat = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))?.[0];
            const lastTimestamp = lastChat ? new Date(lastChat.timestamp).toISOString() : null;
            const response = await axios.get("/chats/chat", {
                params: { after: lastTimestamp },
            });

            const newChats = response.data.map(chat => ({
                user: chat.User.name,
                message: chat.message,
                timestamp: chat.createdAt
            }));

            const storedChats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
            const updatedChats = [...newChats, ...storedChats].slice(0, MAX_LOCAL_STORAGE_CHATS);

            saveChatsToLocalStorage(updatedChats);
            loadChatsFromLocalStorage();
        } catch (error) {
            console.error("Error loading chats:", error);
        }
    };

    chatForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const messageInput = document.getElementById("message");
        const message = messageInput.value.trim();

        if (message) {
            try {
                const userId = localStorage.getItem("userId");
                const username = localStorage.getItem("username");
                const response = await axios.post("/chats/chat", { message, userId, username });
                console.log("Submit Chats", response)
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
    loadChatsFromLocalStorage();
    loadChatsFromBackend();
    setInterval(loadChatsFromBackend, 1000);
});