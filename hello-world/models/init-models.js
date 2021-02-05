var DataTypes = require("sequelize").DataTypes;
var _response = require("./response");

function initModels(sequelize) {
  var response = _response(sequelize, DataTypes);


  return {
    response,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
