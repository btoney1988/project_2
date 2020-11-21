// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { Sequelize } = require("sequelize");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  app.post("/api/tournament_info", (req, res) => {
    db.Tournament.create(req.body)
      .then(result => {
        console.log(result);
        res.redirect(307, "/api/team_info");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.post("/api/team_info", (req, res) => {
    db.Team.create({
      name: req.body.teamName,
      seed: req.body.teamRank
    })
      .then(() => {
        res.redirect(307, "/api/tournament_breakdown");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  app.post("/api/tournament_breakdown", (req, res) => {
    db.Winner.create({
      game: req.body.game,
      round: req.body.round,
      gameWinner: req.body.gameWinner
    })
      .then(() => {
        console.log("success");
        res.redirect(307, "/api/tournament_breakdown");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  app.get("/api/tournament_breakdown", (req, res) => {
    const teamInfo = db.Tournament.findAll({
      include: {
        model: db.Team,
        where: {
          TournamentId: Sequelize.col("tournyId")
        }
      }
    });

    const winnerInfo = db.Tournament.findAll({
      include: {
        model: db.Winner,
        where: {
          TournamentId: Sequelize.col("tournyId")
        }
      }
    });

    Promise.all([teamInfo, winnerInfo])
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
