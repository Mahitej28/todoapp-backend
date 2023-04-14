
//Importing the required Packages
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const routes = require('./routes/todoroutes')

//Intialize the server set-up or server express app
const app = express()

//Defining the port on which we want to run the server
const PORT =  process.env.port || 5000

//Both are used to handle incoming http requests and responses
app.use(express.json())
app.use(cors())

//Connected Mongodb to our server
mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`Connected to MongoDB...`))
.catch((err)=>console.log(err))

//using the routes
app.use(routes)

app.listen(PORT, ()=>console.log(`Listening on: ${PORT}`))//To which on which port the server is running

