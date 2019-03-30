# Scenario Generator Frontend

The Scenario Generator frontend is a universal ReactJS web app built to consume the [Scenario Generator API](https://github.com/scenario-generator/api).

## Setting Up

1. Clone the repo `git clone git@github.com:scenario-generator/frontend.git`
2. Set up env variables
3. Install packages `npm install`
4. Start the app using `npm run start`. Make sure the API is running at whatever you've set in env.js
5. Visit app at [http://localhost:3456](http://localhost:3456)

### Env Variables

.env.example is a list of all the env variables you need to set.
In production you should set these in your host.
In development you can copy it to .env and fill out the details there.

## Technologies

- ReactJS
- ReactRouter
- Redux
- PM2 for running on servers
