const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./util/database");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.send("Welcome to the Expense Tracker");
});

app.use("/user", userRoutes);
app.use("/expenses", expenseRoutes);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to the database");
        sequelize.sync({ force: false })
            .then(() => {
                console.log("Database synced successfully");
                app.listen(PORT, () => {
                    console.log(`Server running on http://localhost:${PORT}`);
                });
            });
    })
    .catch((err) => console.error("Database connection failed:", err));