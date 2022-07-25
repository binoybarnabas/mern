const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config()
app.use(cors());
app.use(express.json())
//getting mongo db connection url from mongodb atlas
const uri = process.env.ATLAS_URI
//connecting with the cluster
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('mondoDB database connected successfully')
})

app.listen(port,()=>{console.log('server is running on port ${port}')})