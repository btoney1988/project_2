module.exports = function(sequlize, DataTypes) {
  const Team = sequlize.define("Team", {
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
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Team.belongsTo(models.Tournament, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Team;
};
