module.exports = function(sequelize, DataTypes) {
  const Team = sequelize.define("Team", {
    id: {
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
      type: DataTypes.INTEGER,
      validate: {
        not: ["[a-z]", "i"]
      }
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
