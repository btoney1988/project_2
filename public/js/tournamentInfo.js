const db = require("../../models");

// Requiring our models and passport as we've configured it
$(document).ready(() => {
  function getTournamentInfo() {
    db.Tournament.findAll({
      where: {
        id: 1
      }
    });
  }

  getTournamentInfo();
});
