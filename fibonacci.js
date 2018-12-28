'use strict';

const fib = require('./lib/fibonacci.js');
const jsonschema = require('jsonschema');

var validator = new jsonschema.Validator();
var schema = require('./schema/FibonacciRequest.json');

module.exports.handler = (event, context, callback) => {

  var response;

  //console.log(event);

  try {
    // validate input with a JSON Schema
    validator.validate(event, schema, {throwError: true});
    var result = fib.fibonacci(event.number).toNumber();
    response = {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        input: event.number,
        result: result
      })
    };
  } catch (exc) {
    response = {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        message: 'Invalid input parameter',
        input: event.number
      })
    };
  } finally {
    callback(null, response);
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};