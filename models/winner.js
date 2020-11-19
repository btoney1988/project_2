module.exports = function(sequlize, DataTypes) {
  const Winner = sequlize.define("winner", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    gameWinner: {
      type: DataTypes.BOOLEAN
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
      references: {
        model: "tournament",
        key: "id"
      }
    }
  });
  return Winner;
};
