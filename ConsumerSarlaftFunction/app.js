const ConsumerService = require("./services/consumer");
exports.lambdaHandler = (event, context, callback) => {
  return new Promise((resolve, reject) => {
    var jsonBody = JSON.parse(event.body);
    console.log("inicio ----");
    console.log(jsonBody);
    new ConsumerService()
      .consumer(jsonBody, context)
      .then((result) => {
        resolve({
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(result)
        });
      })
      .catch((responseError) => {
        reject({
          statusCode: 500,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(responseError)
        });
        console.log(responseError);
      });
  });
};
