# Deployment instructions for meal planning app

## Copy repo
* You must first fork the project repo to your own account
* Make sure to install npm in your new directory containing our files
```
npm install
```
* Next, if you do not already have an account, sign up for Heroku here: https://signup.heroku.com/
* Create a new heroku app and link it with your own github repo
* Keep a note of your heroku app's deployment URL

## Configuration of .env file
* In order to set up the application correctly, you will need to provide values for both an Auth0 account and a Mongodb database and store them inside of a file titled ".env"

### Step-by-step instructions for creating .env
Create a new file in your home directory named ".env" and fill it with the following keys
```
AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
MONGODB_URI=
MONGODB_COLLECTION=
```

Now, you need to get your unique Auth0 values
This requires you to:
First, [sign up for an account with Auth0](https://auth0.com/signup)
* Tenant name does not matter
* For "Account Type", click "Personal", then "Create Account":
Now, you need to register a new application under your account
* Locate the "Create application" button in the "Applications" page in the sidebar
** Give the application a name and select "Single page application"
* Go to the settings tab under your app's configurations
- Scroll down on the same page and enter the following values under "Application URI's"

Application Login URI : (leave this blank)                        
Allowed Callback URLs : `http://localhost:3000/api/callback`                                                              
Allowed Logout URLs   : `http://localhost:3000`   
### For every field that references http://localhost:3000:
* Add a comma-separated entry after the existing entry referencing your new production url. It is important you include both localhost and production urls so that both your localhost and production apps will work properly.
* For example, if your production url is https://cs48-cgaucho.herokuapp.com, your fields should now look like this.

Allowed Callback URLs:
```
http://localhost:3000/api/callback, https://cs48-cgaucho.herokuapp.com/api/callback
```
Allowed Logout URLs:
```
http://localhost:3000, https://cs48-cgaucho.herokuapp.com
```
### For the secrets
- Now scroll up on the same page, and under "Basic Information" you will find your personal values for your Auth0 keys, which you need to copy and paste into the respective areas in your ".env" file
* **Additionally**, you must copy and paste these values into your heroku app's "config secrets", giving them the exact same fields as your .env file
* Add two more fields and their respective values to your config secrets: "POST_LOGOUT_REDIRECT_URI" with value of your production url (same as your second allowed logout URL) and "REDIRECT_URI" with the value of your production URL + "/api/callback" (same as your second allowed callback URL)
* You have one last field (for now) to add to your config secrets: "SESSION_COOKIE_SECRET". Give this field a random assortment **of 32 or more characters** in order to ensure security and copy the value.
* Lastly insert this secret into your own .env file, matching the style of "SESSION_COOKIE_SECRET=RAnDOMAsSORtEDLETTerSMoreThan32LETters"
## Mongodb
* In order to connect to a mongodb database, you will need to follow these terrific instructions:
https://ucsb-cs48.github.io/topics/mongodb_cloud_atlas_setup/
* After completing these instructions, you should have your unique database's URI string in your .env file, but you are not finished.
* You will need to include this uri in your Heroku's config vars, just like you have done with other secrets, with the field as "MONGODB_URI"
* Also you must add your database's collection name to your .env file. Make sure you have created a new collection if you have not done so already and add "MONGODB_COLLECTION=<your_collection_name>" to the .env file
* Add this same data to your Heroku config vars once again
### Changing some code to connect to your newly created database instead of ours
* In your repository, follow pages/utils/mongodb.js. In this file, on line 15 you should see:
```
return client.db("s3-t2-mealplan-db");
```
* "s3-t2-mealplan-db" should be replaced by the name of your database, so that your app connects to your database.
Once this is completed you should be able to run the app on localhost and deploy your master branch on Heroku!
## Edamam Recipe Search API
* This API is free and allows for up to five searches per minute for each account. If you would like to use your own account go to https://developer.edamam.com/edamam-recipe-api and create a "Developer" account.
* Click on the "Get an API key now!" button in the nav bar and then choose Recipe Search API and enter your app name and info.
* Now update your .env file so that the "API_ID" field is equal to your new application id, and your "API_KEY" field is equal to your new application key.

Enjoy!


