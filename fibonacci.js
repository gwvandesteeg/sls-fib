'use strict';

const fib = require('./lib/fibonacci.js');
const jsonschema = require('jsonschema');

var validator = new jsonschema.Validator();
var schema = require('./schema/FibonacciRequest.json');

module.exports.handler = (event, context, callback) => {
  var response;

  console.log(event);

  try {
    // validate input with a JSON Schema
    validator.validate(event.queryStringParameters, schema, {throwError: true});
    var number = event.queryStringParameters.number;
    // extract parameter from schema here, because it'll get sent as a string instead of a number
    if (typeof(number) === 'string') {
      // if this fails we have an invalid input anyway
      number = parseInt(number);
    }

    var result = fib.fibonacci(number).toNumber();
    response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        success: true,
        input: number,
        result: result
      })
    };
  } catch (exc) {
    response = {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        message: 'Invalid input parameter'
      })
    };
  } finally {
    callback(null, response);
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};