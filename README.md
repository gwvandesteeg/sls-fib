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

  