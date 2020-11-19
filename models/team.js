module.exports = function(sequlize, DataTypes) {
  const Team = sequlize.define("team", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seed: {
      type: DataTypes.INTEGER,
      validate: {
        not: ["[a-z]", "i"]
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
  return Team;
};
