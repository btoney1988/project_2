module.exports = function(sequlize, DataTypes) {
  const TournamentTeams = sequlize.define("tournamentTeams", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    teamID: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "team",
        key: "id"
      }
    },
    tournamentID: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "tournaments",
        key: "id"
      }
    }
  });
  return TournamentTeams;
};
