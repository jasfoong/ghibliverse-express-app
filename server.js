const express = require('express')
const app = express();
const cors = require("cors");

app.use(cors());

const characterRoute = require('./routes/characters');
app.use('/characters', characterRoute);


app.listen(8080, () => {
    console.log("Server is running on port 8080");
})