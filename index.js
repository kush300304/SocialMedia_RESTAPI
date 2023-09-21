const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL);
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.get("/",(req,res)=>{
    res.send("Welcome to home page.");
});

app.get("/users",(req,res)=>{
    res.send("Welcome to users page.");
});

app.listen(3000,()=>{
    console.log("Server is up and running at port 3000.");
});