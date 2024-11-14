const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const appointmentsRoutes = require('./routes/appointments');

const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/', appointmentsRoutes);

sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });