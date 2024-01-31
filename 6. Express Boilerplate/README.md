## Guide to start a blank NodeJs + ExpressJs + MongoDB project

### a. Creating NodeJs project
1. Install NodeJs on your system.
2. Create a new directory for your poject example `test_project`.
3. Open terminal inside that directory.
4. Run command `npm init`, it will ask you some prompts you can enter or change the configurations in prompts.
5. After the above prompt completes it will create a file called `package.json` in the project directory.
6. Create a javascript file in the root directory which will be your starting or main project file, like `index.js`.
7. In the `package.json` file add start script like this `"start": "nodemon index.js"`
8. Install the nodemon package by running `npm install nodemon` in the project directory.

### b. Installing ExpressJs
1. Open terminal in project directoy and install express package by running this command `npm install express`
2. Create your simple http server in ExpressJs and start the project.
3. Create below folders make your project more structured.
   1. `/controllers`
   2. `/routes`
   3. `/middlewares`
   4. `/config`

### c. Create a MongoDb Cluster on Atlas
1. Go to MongoDB website https://www.mongodb.com/
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%2011.36.42%20AM.png?raw=true" alt="step 1">
<br />
2. Signup if new login if already have an account
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%2011.37.02%20AM.png?raw=true" alt="step 2">
<br />
3. Accept terms and continue
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%2011.37.25%20AM.png?raw=true" alt="step 2">
<br />
4. Fill this survey form and submit
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%2011.38.31%20AM.png?raw=true" alt="step 2">
<br />
5. Here select free plan M0
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%2011.38.48%20AM.png?raw=true" alt="step 2">
<br />
6. Select aws as provide, select mumbai region and give your cluster a name and create it, it will take 10 to 15 minutes in creating a cluster.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%2011.39.15%20AM.png?raw=true" alt="step 2">
<br />
7. On sidemenu of dashboard click on Database option.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%2011.40.13%20AM.png?raw=true" alt="step 2">
<br />
8. On this page you will see the cluster you had created, click on browse collections.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.31.04%20PM.png?raw=true" alt="step 2">
<br />
9. It will show you your all database if not click on Add My Own Data to create database.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.31.19%20PM.png?raw=true" alt="step 2">
<br />
10. On this modal create your database by giving it a name and also provide it a collection name which will be inside it and then click create button.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.31.42%20PM.png?raw=true" alt="step 2">
<br />
11. You can see here the database you had created.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.31.54%20PM.png?raw=true" alt="step 2">
<br />
12. On sidemenu click on database access option, this page will show you all the users you had created if not add a new user.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.32.31%20PM.png?raw=true" alt="step 2">
<br />
13. In the create user modal select password as authentication method, enter userid and password.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.32.55%20PM.png?raw=true" alt="step 2">
<br />
14. In roles select read and write to any database and create the user.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.33.07%20PM.png?raw=true" alt="step 2">
<br />
15. Again in sidemnu click on database and on cluster click connect button and on the below modal select allow from anywhere option.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.33.31%20PM.png?raw=true" alt="step 2">
<br />
16. On below sreen select drivers option.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.33.57%20PM.png?raw=true" alt="step 2">
<br />
17. From here copy the MongoURI of your cluster and save it somewhere.
<img src="https://github.com/mohsinogen/BackendDevelopmentHAB2/blob/main/media/Screenshot%202024-01-30%20at%203.34.04%20PM.png?raw=true" alt="step 2">
<br />


### d. Installing mongoose and connecting with our MongoDB Atlas cluster
1. Open terminal in project directoy and install mongoose package by running this command `npm install mongoose`
2. Add your MongoUri copied from MongoDb Atlas in `.env` file. 
3. In the config folder of your project create `db.js` file and create a function to connect MongoDB like below
   ```javascript
   import mongoose from "mongoose";
   const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline);
    } catch (error) {
      console.error(`Error: ${error}`.red.underline);
      process.exit(1);
    }
   };

   export default connectDB;
   ```
  4. Call this `connectDB` function inside your index.js file and you will be connected with your database.
  5. Create `/models` folder to store your MongoDB mongoose models and schema.
