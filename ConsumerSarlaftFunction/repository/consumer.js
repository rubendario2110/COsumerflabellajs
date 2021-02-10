const sequelize = require("../models/connection");
var initModels = require("../models/init-models").initModels;
var models = initModels(sequelize);
let file = models.response;
class ConsumerRepository {
  save(response) {
    return new Promise((resolve, reject) => {
      file
        .create({
          status: response.status,
          message: response.message,
          numero_propuesta: response.data.numero_propuesta,
          fecha_creacion: response.data.fecha_creacion,
          fecha_consulta: response.data.fecha_consulta,
          compania: response.data.compania,
          desc_bien: response.data.bien.desc_bien,
          contratante: response.data.bien.contratante[0],
          asegurado: response.data.bien.asegurado[0],
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
