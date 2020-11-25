// Requiring our models and passport as we've configured it
const db = require("../models");
const { Sequelize } = require("sequelize");

module.exports = function(app) {
  app.post("/api/tournament_info", (req, res) => {
    db.Tournament.create(req.body)
      .then(dbTournament => {
        res.json(dbTournament);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.post("/api/teamInfo", (req, res) => {
    db.Team.create(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  app.post("/api/tournament_win", (req, res) => {
    db.Winner.create({
      game: req.body.game,
      round: req.body.round,
      gameWinner: req.body.gameWinner
    })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/tournament_info", (req, res) => {
    db.Tournament.findAll()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.get("/api/team_info", (req, res) => {
    db.Team.findAll({
      order: Sequelize.col("seed")
    })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/api/tournamentBreakdown", (req, res) => {
    const teamInfo = db.Tournament.findAll({
      include: {
        model: db.Team,
        where: {
          TournamentId: Sequelize.col("TournamentTournyId")
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
