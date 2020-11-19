module.exports = function(sequlize, DataTypes) {
  const Winner = sequlize.define("Winner", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    gameWinner: {
      type: DataTypes.BOOLEAN
    },
    teamId1: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "team",
        key: "id"
      }
    },
    teamId2: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "team",
        key: "id"
      }
    },
    round: {
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
    Winner.hasOne(models.Tournament);
  };
  return Winner;
};
