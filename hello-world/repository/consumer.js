const sequelize = require("../models/connection");
var initModels = require("../models/init-models").initModels;
var models = initModels(sequelize);
let file = models.response;
class ConsumerRepository {
  save(response) {
    return new Promise((resolve, reject) => {
      file
        .create({
          response:response,
        })
        .then(() => {
          resolve({});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}


module.exports = ConsumerRepository;
