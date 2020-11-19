module.exports = function(sequlize, DataTypes) {
  const Tournament = sequlize.define("Tournament", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // teamAmount: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
  });

  Tournament.associate = function(models) {
    // Associating Tournament with Posts
    // When an Tournament is deleted, also delete any associated Posts
    Tournament.hasMany(models.Team, {
      onDelete: "cascade"
    });
  };

  return Tournament;
};
