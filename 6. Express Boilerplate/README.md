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
