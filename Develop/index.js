const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// let petsData=require("./pets.json")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const allRoutes = require("./controllers");
app.use(allRoutes)

app.listen(PORT, function () {
  console.log("listenin on port " + PORT);
});