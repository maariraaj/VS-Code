document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chatForm");
    const chatsDiv = document.getElementById("chats");

    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/user/login';
    }

    const loadChats = async () => {
        try {
            const response = await axios.get("/chats/chat");
            chatsDiv.innerHTML = "";
            response.data.forEach(chat => {
                const chatBox = document.createElement("div");
                chatBox.className = "p-4 bg-emerald-100 rounded-lg shadow-md border border-emerald-300 break-words";
                chatBox.innerHTML = `
                <span class="text-emerald-800 font-semibold">${chat.User.name}:</span>
                <span class="ml-2">${chat.message}</span>
            `;
                chatsDiv.appendChild(chatBox);
            });
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
                await axios.post("/chats/chat", { message, userId });
                messageInput.value = "";
                loadChats();
            } catch (error) {
                console.error("Error sending chat:", error);
            }
        }
    });

    loadChats();
    setInterval(loadChats, 1000);
});