const express = require('express');
const sequelize = require("./util/database");
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require("./routes/user");
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "auth", "signup.html"));
});

app.use("/user", userRoutes);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to the database");
        sequelize.sync({ force: false })
            .then(() => {
                console.log("Database synced successfully");
                app.listen(process.env.PORT, () => {
                    console.log(`Server running`);
                });
            });
    })
    .catch((err) => console.error("Database connection failed:", err));