const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// let petsData=require("./pets.json")

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const allRoutes = require("./controllers/index.js");
app.use(allRoutes)

app.listen(PORT, function () {
  console.log("listenin on port " + PORT);
});