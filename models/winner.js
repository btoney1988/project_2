module.exports = function(sequlize, DataTypes) {
  const winner = sequlize.define("winner", {
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
      refrences: {
        model: "tournaments",
        key: "id"
      }
    }
  });
  return winner;
};
