# project-s3-t2-meal-plan

This project allows people to plan their meals of the week and take note of the ingredients included. Users can also find recipes and set reminders and timers.

# Members:
* Arun Ryu - arunryu
* Amanda Serex - amandaserex
* Peter Brede - peterbrede
* ChanChan Mao - chanchanmao

# Links:
* https://cs48-s20-s3-t2-qa.herokuapp.com/
* https://cs48-s20-s3-t2-prod.herokuapp.com/

# Tech Stack:
* Next.js/React

# Initial Planning Ideas
With this weekly meal planner, users are able to view their personalized planner via log in and are able to edit/add/remove meals/ingredients/etc. Users can list ingredients that they're gong to use for their dishes/meals. Users are able to search for recipes given ingredients that they already or search for specific recipes (via Spoonacular API). There will also be a shopping list feature where the user can add/edit/remove ingredients or select ingredients from a recipe and have it automatically added to the list.

Example Case
* Users can start planning their meals on Sunday and write out their plans for breakfast/lunch/dinner for the week and plan out the entire list of ingredients so that user can shop accordingly. User can input the amount of servings needed for each meal and the amount ingredients will be calculated according to ammount of servings

For later:
* users can favorite recipes and collect it in a "favorites" section
* set up a reminder/push notification system 
* as a developer, we can have a "recipe of the day"

# Roles and Permissions
* As a logged-in user, I can create a weekly planner and look at past weeks
* As a user, I can search recipes without having to log in

# Below this line is stuff from the demo app

---


# Demo Next.js App

## Prerequisites

- Node.js v10 or higher

- For installation advice, see: <https://ucsb-cs48.github.io/jstopics/node/>

## Installing dependencies

Run the command:

```
npm install
```

Do this:

- The first time you clone this repo
- Any time you switch branches
- Any time you pull new changes from GitHub

## Obtaining Secrets

To work properly, this application must be configured to use Google
OAuth using the Auth0 service.

This involves:

- Setting up an Auth0 account (if you do not already have one)
- Configuring an application
- Copying the value of three "secrets" into a file called `.env`

All of these instructions can be found in this file:
[docs/auth0-localhost.md](docs/auth0-localhost.md)

Follow _all_ of the instructions in that file _before_ trying to
run the application on localhost.

## Running on localhost

To run on localhost, run:

```
npm run dev
```

The app will run on <http://localhost:3000>.

While the app is running in development mode, any changes you make to
the codebase will automatically be reflected in the browser.

## Commands

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run test`         | Runs entire test suite                   |
| `npm run test:format`  | Checks the project for formatting issues |
| `npm run test:cypress` | Runs Cypress integration tests           |
| `npm run fix:format`   | Reformats all project files              |

## Configuring secrets for GitHub Actions

If the test cases were passing on the starter code repo, but are now
failing, it is likely because you need to configure the secrets
for Github Actions. That process is explained here: [docs/auth0-github-actions.md](./docs/auth0-github-actions.md).

## Deployment to Production

At some point, you'll want to deploy your application to the public internet
so that real users can access it: we call this a _production_ deployment
of your app.

There are a variety of cloud-based platforms where we can deploy our
applications. The file [docs/platforms.md](./docs/platforms.md) describes
the pros/cons of Heroku vs. now.sh and Amazon Web Services. The summary
is that we've chosen Heroku for it's easy of user for beginners
and the ability for a team to collaborate on managing a deployment.

Instructions for configuring your app for Heroku are listed in the file
[docs/heroku.md](./docs/heroku.md)

## The value of `SESSION_COOKIE_SECRET`

For deployments to localhost and now.sh, the value of `SESSION_COOKIE_SECRET` is automatically determined by the files `next.config.js` and `setup_now.js`, respectively.

For Heroku deployments, this value needs to be set by hand in the .env file.

The purpose of this value is described in the file [docs/session-cookie-secret.md](./docs/session-cookie-secret.md)
