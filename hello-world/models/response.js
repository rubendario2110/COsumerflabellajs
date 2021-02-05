const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('response', {
    idresponse: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    response: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'response',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idresponse" },
        ]
      },
    ]
  });
};
