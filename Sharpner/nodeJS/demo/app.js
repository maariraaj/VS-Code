// const http = require('http');
// const routes = require('./routes1');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);
// server.listen(4000);



const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);

app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(4000);