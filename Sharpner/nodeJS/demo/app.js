// const http = require('http');
// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);
// server.listen(4000);



const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/', (req, res, next) => {
//     //console.log('This always runs.');
//     next();
// })
app.use('/add-product', (req, res, next) => {
    //console.log('In another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Product name"><input type="text" name="size"placeholder="Size"><button type="submit">Add Product</button></form>');
})
app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})
app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(4000);