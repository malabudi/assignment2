# CIS 376 - Assignment 2

Mohamad Alabudi

## How to run the project

This project requires you to have node.js installed in order to run it

Once you clone or download this project locally and have installed this project, in the root project directory run these commands in the node.js or powershell terminal:

### `npm install`

After installing all packages necessary for the project, run this command in order to fire up the API on localhost:300

### `node index.js`

After that, you will have the project running successfully and should be able to send requests to all the endpoints in the API, documented below

You will know when the project is running if you see `Server is listening on port 3000` in the terminal

## All Endpoints in The API

### `localhost:3000/tweets`

This request will fetch all tweets from the archive

### `localhost:3000/links`

This request will fetch all the hyperlinks in a given tweet and group them by tweet id

### `localhost:3000/tweet-details/:id`

This request will return a tweet with its details given a tweet id

### `localhost:3000/profile/:screen_name`

This request will return details of a profile given its screen name
