const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//cors middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://user:user@cluster0.mujoi.mongodb.net/mindfitnessDB?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
//to use the routes 
const formationsRouter = require('./routes/formations');
const formateursRouter = require('./routes/formateurs');

app.use('/formations', formationsRouter);
app.use('/formateurs', formateursRouter);

//what starts the server 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});