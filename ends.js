const napnux = require("napnux");
module.exports = napnux()
  // All routes for the project root goes here
  .get("/", (req, res) => {
    res.render("home");
  })
  .get("/register", (req, res) => {
    res.render("register");
  })
  .get("/login", (req, res) => {
    res.render("login");
  });
