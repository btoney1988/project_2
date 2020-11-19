module.exports = function(sequlize, DataTypes) {
  const TournamentTeams = sequlize.define("tournamentTeams", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    teamID: {
      type: DataTypes.INTEGER,
      references: {
        model: "team",
        key: "id"
      }
    },
    tournamentID: {
      type: DataTypes.INTEGER,
      references: {
        model: "tournament",
        key: "id"
      }
    }
  });
  return TournamentTeams;
};
