
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./Router/User_route")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("Images"))

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected"))
    .catch(() => console.log("Database not connected"));

app.use(userRouter)

app.get("/", (req, res) => {
    res.json("hello");
})

app.listen(3001, () => {
    console.log("Server Started on Port : 3001");
})