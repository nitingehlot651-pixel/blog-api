
const express = require('express')
const connectDB = require('./config/dbConfig')
require('dotenv').config()

const PORT = process.env.PORT || 4000
const app = express()

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/blogs", require("./routes/blogRoutes"));

app.get("/",(req, res)=>{
    res.json({
        message:"hello h"
    })
})

// app.use("/api/blogs", require("./routes/blogRoutes"))

app.listen(PORT, ()=>{
    console.log(`server on ${PORT}`)
})