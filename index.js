const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

//uses custom template; contnt runs on handlebars
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main"
  })
);

app.set("view engine", "handlebars");

app.use(express.static("Static"));

//tell your app to use the module
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// root dir
app.get("/", (req, res) => {
  res.render("home", {
    title: "TooDoo",
    name: "Greta"
  });
});

// login route
app.get("/login", (req, res) => {
  res.render("login", {
    title: "TooDoo | Login"
  });
});

app.post("/authenticate", (request, response) => {
});

app.listen(3000);

// add to-do route
app.get("/add", (req, res) => {
  res.render("add", {
    title: "TooDoo"
  });
});
