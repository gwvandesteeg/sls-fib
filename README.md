# Serverless Fibonacci calculater

This is a demonstration and testing project to learn about serverless, node.js, AWS Lambda's, VS Code, and the GitHub CI/CD pipelining tools.

# Tools used

* nvm - tool to select node versions on a per project basis
* node.js (v8.10.0) - the node.js version in use in AWS Lambda to ensure consistency

  * serverless - the serverless framework tooling
  * mocha - unit test framework
  * serverless-mocha-plugin - 
  * chai - BDD/TDD language extensions for mocha
  * ajv-cli - to enable validation of the JSON schemas in use are in fact valid JSON schemas
  * jsonlint - JSON schema validation in the production code
  * chai-json-schema - JSON schema validation extension in the test system
  * nyc - to provide code coverage tooling
  * bignum - for dealing with large number
  * jshint - for checking the code is valid JavaScript and valid JSON

* Visual Studio Code - IDE

  * Mocha Test Explorer - extension to view tests inside the IDE
  * jshint
  * npm
  * npm Intellisense
  * node.js Modules Intellisense
  * serverless-vscode
  * Serverless Framework Snippets

# Issues Encountered

## Visual Studio Code

* Mocha Test Explorer

  When using the serverless-mocha-plugin and the tests are stored in the same directory as the standard mocha unit tests the test explorer stops working due to the lack of the **SERVERLESS_ROOT_PATH** environment variable being present and this needs to be configured to the correct directory and vscode's settings don't seem to allow variable interpolation which is a problem if your workspace has multiple directories/projects in it.

  The workaround seems to be to split the tests into two different directories so you can run the tests independantly, which then leads to further fun when dealing with code coverage reports.

## Serverless

* serverless-mocha-plugin

  When using the plugin and running the `serverless invoke test` with the mocha unit tests in the shared directory it seems to want to run the tests twice (or at least generates the outputs twice).

  The workaround seems to be identical to the *Mocha Test Explorer* workaround.

# Deploying the API

The API is easily deployed locally for testing using

```
sls deploy --stage dev --verbose
```

Which will then respond with the API Gateway endpoint for the fibonacci calculator, and the required API key that was generated to run the requests against.

# Querying the API

* Using CURL

  Manually running a query against the API can easily be done using curl and the output of the deploy stage. Replacing the `<api url>` with the relevant URL output from the deploy step, the `<value>` with the value you wish to query for, and the `<api-key>` with the relevant value from the deploy step.
  
    ```
    curl "<api url>?number=<value>" -H "x-api-key: <api-key>"
    ```

* Using the serverless console tool

  Easily achieved using the below, you can also feed in a pre-formatted JSON file instead of the data specified.  Replace the `<value>` with the value you wish to query for.

    ```
    sls invoke --function fibonacci --stage dev -d '{"queryStringParameters":{ "number": <value>}}'
    ```
  
