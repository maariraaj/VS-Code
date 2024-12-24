document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chatForm");
    const chatsUl = document.getElementById("chats");

    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/user/login';
    }

    const loadChats = async () => {
        try {
            const response = await axios.get("/chats/chat");
            chatsUl.innerHTML = "";
            response.data.forEach(chat => {
                const li = document.createElement("li");
                li.textContent = `${chat.User.name}: ${chat.message}`;
                chatsUl.appendChild(li);
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
});