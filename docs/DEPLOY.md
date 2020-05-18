# Deployment instructions for meal planning app

## Install npm
* The first time you clone our repo, you will need to run the following command in the same directory:
```
npm install
```

## Configuration of .env file
* In order to set up the application correctly, you will need to provide values for both an Auth0 account and a Mongodb database and store them inside of a file titled ".env"

### Step-by-step instructions for creating .env
Create a new file in your home directory named ".env" and fill it with the following keys
```
AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
MONGODB_URI=
```
Next, if you do not already have an account, sign up for Heroku here: https://signup.heroku.com/

Now, you need to get your unique Auth0 values
This requires you to:
First, [sign up for an account with Auth0](https://auth0.com/signup)
* Tenant name does not matter
* For "Account Type", click "Personal", then "Create Account":
Now, you need to register a new application under your account
* Locate the "Create application" button in the "Applications" page in the sidebar
** Give the application a name and select "Single page application"
* Go to the settings tab under your app's configurations
- Under "Basic Information" you will find your personal values for your Auth0 keys, which you need to copy and paste into the respective areas in your ".env" file
- Scroll down on the same page and enter the following values under "Application URI's"

Application Login URI | (leave this blank)                        |
Allowed Callback URLs | `http://localhost:3000/api/callback`, ` ` |
Allowed Logout URLs   | `http://localhost:3000`, ` `              |
