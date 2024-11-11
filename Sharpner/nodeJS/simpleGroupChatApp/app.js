const express = require('express');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login');
const chatRoutes = require('./routes/chat');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(loginRoutes);

app.use(chatRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found!</h1>');
});

app.listen(7000);