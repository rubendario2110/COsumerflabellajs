const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('response', {
    idresponse: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    message: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    numero_propuesta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha_consulta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    compania: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    desc_bien: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    contratante: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    asegurado: {
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
