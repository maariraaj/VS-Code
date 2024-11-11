const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`
        <form action="/login" method="POST" onsubmit="saveToLocal(event)">
            <input type="text" name="username" placeholder="Enter Username">
            <button type="submit">Login</button>
        </form>
        <script>
            function saveToLocal(e) {
                e.preventDefault();
                localStorage.setItem("username", e.target.username.value);
                e.target.submit();
            }
        </script>`
    );
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;