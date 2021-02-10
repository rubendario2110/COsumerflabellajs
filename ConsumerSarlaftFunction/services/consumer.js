let ConsumerRepository = require("../repository/consumer");
const log4js = require("log4js");
const resource = require("../resource/resource.json");
log4js.configure(resource.configLog4js);
const log = log4js.getLogger("app");
const apiAdapter = require("../adapter/api.adapter");
const config = require("../config/configRemoteApi");
const remoteApi = apiAdapter(config.remoteCountryService.basePath);
class ConsumerService {
  consumer(data,context) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI4In0.Wv-z3Pq4T0xrbZJyNvXtAnyIq9WNJTjo-40csKkcm8I'
        },
        data : data
      };
      remoteApi
        .post(config)
        .then((data) => {
          new ConsumerRepository()
            .save(data)
            .then(() => {
              resolve({"message":"Operacion realizada satisfactoriamente"});
            });
        }).catch((error) => {
          log.error(error);
          reject({ error: error });
        });
    }).catch((error) => {
      log.error(error);
      reject({ error: error });
    });
  }
}
module.exports = ConsumerService;
