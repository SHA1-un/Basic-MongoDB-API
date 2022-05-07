//Note: in the package.json file, we defined a start property - This allows us to start our server using 'npm start'

// Imports
const express = require('express'); // Middleware used for CRUD operations
const mongoose = require('mongoose'); // Used for managing data and MongoDB queries 
const routes = require('./routes/routes');
require('dotenv').config(); // Here we import the .env and load it into the process's environment

const mongoString = process.env.DATABASE_URL // self explanatory - we fetch the database URL
const app = express(); // why do we do this? From Wikipedia --> Express.js, or simply Express, is a backend web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js.[4]
app.use(express.json()); // This allows us to accept the data in JSON format
app.use('/api', routes); // Here, this app.use takes two things. One is the base endpoint, and the other is the contents of the routes. Now, all our endpoints will start from '/api'.

// Start server on given port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Stated on port ${PORT}`);
});

// Connect to MongoDB Database
mongoose.connect(mongoString); // Here we connect to our database using mongoose
const database = mongoose.connection; // database here refers to our connection we made to our MongoDB database

// Connection Status Reports
database.on('error', (error) => {
    console.error(`MongoDB Connection Error: ${JSON.stringify(error, null, 2)}`);
});
database.on('connected', () => {
    console.info("MongoDB Database Connected!");
});