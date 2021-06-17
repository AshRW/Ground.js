## Ground.js
Ground.js is a JavaScript boilerplate with Webpack and Babel

This boilerplate is a webpack and babel enabled tool to quickly develop and build JavaScript web applications. It includes the babel env preset and polyfill for handeling async code too. It has a webpack enabled dev server.

## First step
Please start off by installing the required node modules with the following command
##### `npm install`

## Run dev server
The webpack enabled dev server is configured in the package.json file you can run the server by
##### `npm run serve`

## Build the Project
To build the project with the babel enabled presets and achieve wide browser compatibility run this code
##### `npm run build`

## Important things to note
* Files like html, styles, images, and all other assets which are not user generated js files, go into the public folder of the boilerplate
* All user generated JavaScript files go into the src folder
* Webpack.config.js file has to be configured if more than one JavaScript file is provided. Instructions are commented in the config file.
