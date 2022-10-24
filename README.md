# React Weather App 🌦 ❄️

It's a weather app that was built using react, tailwind, and the openweathermap api service. The app allows you to display the hourly and daily forecasts and the current weather by selecting one of the predefined cities or by entering the name of any city of your choice, or even by selecting your current location, which depends on the latitude and longitude coordinates. You also have the ability to toggle between Celsius and Fahrenheit units.

## Usage

Once the repo is cloned, make sure to create the `.env` file in the root of your workflow and add your api key to the following environment variable :

`API_KEY = <YOUR_API_KEY>`

### `npm install`

Instals all dependencies needed for the project. 

### `npm run start:backend`

Runs the mini-backend server on localhost with the default port 8000 and it should print to the console `Server is running on port 8000`. If the server runs on another port for any reason, this is printed to the console, e.g. `Server is running on port 3001`.

### `npm run start:frontend`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
