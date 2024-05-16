const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const docsRoutes = require("./src/routes/docsRoutes");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const blogRoutes = require("./src/routes/blogRoutes");

const app = express();

app.use(bodyParser.json());

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use("/docs/api", docsRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

module.exports = app;
