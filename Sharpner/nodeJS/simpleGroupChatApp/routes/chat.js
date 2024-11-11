const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file', err);
            return res.status(500).send('Server error');
        }
        res.send(
            `<form action="/" method="POST" onsubmit="addUsername(event)">
                <input type="text" name="message" placeholder="Enter Message" required>
                <button type="submit">Enter Message</button>
                <input type="hidden" name="username" id="usernameField">
            </form>
            <h3>Group Chat</h3>
            <div id="groupChat">
                ${data ? data.replace(/\n/g, '<br>') : 'No messages yet.'}
            </div>
            <script>
                function addUsername(event) {
                    event.preventDefault();
                    const username = localStorage.getItem('username');
                    document.getElementById('usernameField').value = username ? username : 'Anonymous';
                    event.target.submit();
                }
            </script>`
        );
    });
});

router.post('/', (req, res, next) => {
    const message = req.body.message;
    const username = req.body.username;

    fs.appendFile('message.txt', `User: ${username} => Message: ${message}\n`, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Server error');
        }
        res.redirect('/');
    });
});

module.exports = router;