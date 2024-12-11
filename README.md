# Software Testing Assignment

This repository contains a software testing assignment project designed to evaluate and improve the quality of various JavaScript libraries. The project includes unit tests, code coverage analysis, and automated testing workflows using GitHub Actions. The goal is to identify potential issues, ensure robust functionality, and provide detailed reporting on test coverage.

## Requirements

Before running the tests, ensure the following software is installed on your system:

- Node.js (npm is included with Node.js installation)

You can verify the installations and check their versions by running the following commands in your terminal:

```
node -v
npm -v
```

## Cloning the Repository

Clone the repository to your local machine using the following command:

```
git clone <repository-url>
```

Navigate to the project directory after cloning.

## Installing Dependencies

Install all the required dependencies defined in the `package.json` file by running:

```
npm install
```

## Running Tests

To execute the test suite, use the command:

```
npm test
```

## Running Tests with Coverage

To run tests and generate a code coverage report, use the following command:

```
npm run coverage
```

The coverage report will be generated in the `./coverage` directory. Reports are available in:

- **Text format:** Displayed directly in the terminal.
- **HTML format:** Available at `./coverage/index.html`. Open this file in a browser to view detailed coverage information.

## Automated Testing Workflow

This repository is configured with a GitHub Actions workflow that automates the testing process. Every time changes are pushed to the repository, the following actions are performed:

1. Tests are executed automatically.
2. Code coverage is calculated.
3. Coverage reports are uploaded to Coveralls.

## Additional Information

If any issues or errors are identified during local testing or through automated workflows, refer to the test coverage reports and logs for further debugging. Contributions to improve the tests or the libraries themselves are welcome!
