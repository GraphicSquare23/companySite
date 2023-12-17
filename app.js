require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoute = require('./src/routes/contactRoute');

const app = express();
const port = 8080;

// Use cors middleware
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('mongoDB is connected'))
.catch(err => console.log(err));

app.use(express.json());
app.use('/', contactRoute);

app.listen(port, (error) => {
  if (error) { 
    console.log('Something went wrong', error); 
   } 
  console.log(`Server is running on port ${port}`);
});