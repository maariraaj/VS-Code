const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const expensesRoutes = require('./routes/expenses');

const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/', expensesRoutes);
sequelize.sync()
    .then(() => {
        app.listen(8000);
    })
    .catch(err => {
        console.log(err);
    });