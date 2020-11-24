// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/tournament_info");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/tournament_info");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/tournament_info", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/tourney_info.html"));
  });

  app.get("/team_info", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/team_info.html"));
  });

  app.get("/tournament_breakdown", (req, res) => {
    res.sendfile(path.join(__dirname, "../public/breakdown.html"));
  });
  app.get("/tournament_bracket", (req, res) => {
    res.sendfile(path.join(__dirname, "../public/render.html"));
  });
};
