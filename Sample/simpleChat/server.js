const express = require("express");

const http = require("http");
const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["https://admin.socket.io"],
        credentials: true,
    },
});

// Serve static files
app.use(express.static("public"));

// Initialize Socket.IO Admin UI
instrument(io, {
    auth: false,
});

// Store groups and users
let groups = {}; // Groups object to track groups and users

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Listen for a new group creation
    socket.on("create group", (groupName) => {
        if (!groups[groupName]) {
            groups[groupName] = []; // Create a new group
            io.emit("update group list", Object.keys(groups)); // Broadcast updated groups list to all clients
            console.log(`Group created: ${groupName}`);
        }
    });

    // Listen for joining a group
    socket.on("join group", (groupName) => {
        if (groups[groupName]) {
            socket.join(groupName);
            groups[groupName].push(socket.id); // Add user to the group
            socket.emit("chat message", `You joined the group: ${groupName}`);
            console.log(`${socket.id} joined group: ${groupName}`);
        }
    });

    // Listen for chat messages and emit to the group (room)
    socket.on("chat message", (msg, groupName) => {
        if (groupName && groups[groupName]) {
            io.to(groupName).emit("chat message", msg); // Send message to the current room
        }
    });

    // Listen for disconnect event
    socket.on("disconnect", () => {
        // Remove user from all groups
        for (let groupName in groups) {
            groups[groupName] = groups[groupName].filter((id) => id !== socket.id);
        }
        console.log(`User disconnected: ${socket.id}`);
    });
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
