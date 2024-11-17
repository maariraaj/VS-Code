const express = require("express");
const path = require("path");
const sequelize = require("./util/database");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/blogs", blogRoutes);

sequelize
    .sync({ force: false })
    .then(() => {
        console.log("Database synced successfully.");
        app.listen(3000, () => {
            console.log(`Server is running on http://localhost:3000`);
        });
    })
    .catch((err) => {
        console.error("Database sync failed:", err);
    });