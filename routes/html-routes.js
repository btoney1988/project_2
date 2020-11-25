// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/tourney_info.html"));
  });
  app.get("/teamInfo", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/team_info.html"));
  });
  app.get("/tournamentBreakdown", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/tournyBDown.html"));
  });
  app.get("/tournamentBracket", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/render.html"));
  });
};
