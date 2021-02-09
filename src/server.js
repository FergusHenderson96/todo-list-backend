require("./db/connection");
//will run file inside server file, connection.js only job is to connect to mongoDB
const express = require("express");
//imports express 
const cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();
//creates an instance of express 

app.use(cors());
app.use(express.json());
//converts data to json

app.listen(port, () => {
  //listens for a port number
  console.log(`Server is listening on port ${port}`);
});