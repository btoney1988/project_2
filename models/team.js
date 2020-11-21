module.exports = function(sequelize, DataTypes) {
  const Team = sequelize.define("Team", {
    teamId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    seed: {
      type: DataTypes.INTEGER
    }
  });

  Team.associate = function(models) {
    Team.belongsTo(models.Tournament, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Team;
};
