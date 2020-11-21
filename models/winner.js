module.exports = function(sequelize, DataTypes) {
  const Winner = sequelize.define("Winner", {
    winId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    game: {
      type: DataTypes.INTEGER
    },
    round: {
      type: DataTypes.INTEGER
    },
    gameWinner: {
      type: DataTypes.INTEGER
    },
    team1: {
      type: DataTypes.INTEGER
    },
    team2: {
      type: DataTypes.INTEGER
    }
  });

  Winner.associate = function(models) {
    Winner.hasOne(models.Team, {
      foreignKey: "team1"
    });
    Winner.hasOne(models.Team, {
      foreignKey: "team2"
    });
  };
  return Winner;
};
