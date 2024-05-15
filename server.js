const express = require('express')
const app = express();
const cors = require("cors");
const fs = require('fs');

app.use(cors());

const characterRoute = require('./routes/characters');
app.use('/characters', characterRoute);

//Serve static files from the public folder
app.use(express.static('public'));

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})