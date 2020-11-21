module.exports = function(sequelize, DataTypes) {
  const Winner = sequelize.define("Winner", {
    id: {
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
    teamId1: {
      type: DataTypes.INTEGER
    },
    teamId2: {
      type: DataTypes.INTEGER
    }
  });

  Winner.associate = function(models) {
    Winner.hasOne(models.Team, {
      foreignKey: "teamId1"
    });
    Winner.hasOne(models.Team, {
      foreignKey: "teamId2"
    });
  };
  return Winner;
};
