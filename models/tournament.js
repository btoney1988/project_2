module.exports = function(sequelize, DataTypes) {
  const Tournament = sequelize.define("Tournament", {
    tournyId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Tournament.associate = function(models) {
    Tournament.hasMany(models.Team, {
      onDelete: "cascade"
    });
    Tournament.hasOne(models.Winner);
  };

  return Tournament;
};
