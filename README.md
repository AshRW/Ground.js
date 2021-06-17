## Ground.js
Ground.js is a JavaScript boilerplate with Webpack and Babel

This boilerplate is a webpack and babel enabled tool to quickly develop and build JavaScript web applications. It includes the babel env preset and polyfill for handling async code too. It has a webpack enabled dev server.

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

## Etymology
###### Ground (/ɡraʊnd/) - the solid surface of the earth.
The seed of your ideas need a ground to be buried into and to germinate from. The utilized ground of course needs service and care but it is the basis of it.

Ground.js provides you a simple up to date boilerplate for developing your JavaScript Web Application. And it's free. (see licence for more details)

## Includes
In short:-
* Webpack
* Babel with polyfills
* Webpack development server

Detailed:-
* Webpack: 5.39.0
* Babel/core: 7.14.6
* Babel/preset-env: 7.14.5
* Babel-loader: 8.2.2
* Webpack: 5.39.0
* Webpack-cli: 4.7.2
* Babel/polyfill: 7.12.1
* Webpack-dev-server: 3.11.2