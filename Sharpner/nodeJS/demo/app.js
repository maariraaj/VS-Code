// const http = require('http');
// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);
// server.listen(4000);



const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next();
})
app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(4000);