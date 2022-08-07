# Stuff Exercise App

This project was made by webpack, react and node express.\
Backend and Frontend run on express

## Available Scripts
In the project directory, you can run:
```bash
npm ci
npm run build:dev

# Open a new terminal
npm run start:dev # wait for few second to make bundle.js

```
Then, Open a Browser with http://localhost:3000 
### `npm ci`
Install all packages.

### `npm run build:dev`

This command will compile our server code to JavaScript, log any errors in our code, and then watch our files in the src folder.


### `npm run start:dev`

This will run the index.js file in our dist folder and then restart every time an update is made to a file in the dist directory.\
`bundle.js` is supposed to be made in `public/`



### `npm run test`

Launches jest test runner for Backend and Frontend