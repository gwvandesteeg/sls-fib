# Serverless Fibonacci calculater

This is a demonstration and testing project to learn about serverless, node.js, AWS Lambda's, VS Code, and the GitHub CI/CD pipelining tools.

# Tools used

* node.js (v8.10.0)

  * serverless
  * mocha
  * serverless-mocha-plugin
  * chai

* Visual Studio Code

  * Mocha Test Explorer


# Issues Encountered

## Visual Studio Code

* Mocha Test Explorer

  When using the serverless-mocha-plugin and the tests are stored in the same directory as the standard mocha unit tests the test explorer stops working due to the lack of the SERVERLESS_ROOT_PATH environment variable being present and this needs to be configured to the correct directory and vscode's settings don't seem to allow variable interpolation which is a problem if your workspace has multiple directories/projects in it.

  The workaround seems to be to split the tests into two different directories so you can run the tests independantly, which then leads to further fun when dealing with code coverage reports.

## Serverless

* serverless-mocha-plugin

  When using the plugin and running the `serverless invoke test` with the mocha unit tests in the shared directory it seems to want to run the tests twice (or at least generates the outputs twice).

  The workaround seems to be identical to the *Mocha Test Explorer* workaround.