# Film App - Client

An application for managing a list of owned films which allows users to add addition data (films) to their collection.

For a production application, you will need to setup the [API](https://github.com/infectedByCode/films-api). However, for development, there is a mock server that will serve up data.

## Requirements

Prior knowledge of React, Redux and TypeScript is assumed as well as familiarity of react-router.

## Getting Started

1. Clone repository and run `npm install` in the cloned directory
2. Create a .env file and add `REACT_APP_API_URL=http://my-api-here.com`. If you are running the API, this can be changed to point to that host.
3. Run `npm run start` which should open the application in the browser on localhost:3000.

## Tests

Available test scripts:

`npm run test` - Runs tests in watch mode
`npm run test:coverage` - Runs tests once with coverage report
