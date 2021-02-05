// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const ConsumerService = require("./services/consumer");
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = (event, context, callback) => {
  return new Promise((resolve, reject) => {
  var jsonBody = JSON.parse(event.body);
    console.log("inicio ----");
    console.log(jsonBody);
    new ConsumerService()
    .consumer(jsonBody,context)
    .then((result) => {
      resolve({
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      });
    })
    .catch((responseError) => {
     reject(responseError);
     console.log(responseError);
    });
  });
};
