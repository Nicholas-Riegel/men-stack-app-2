//----------------------------Constants and Variables-----------------------------

const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const methodOverride = require('method-override')
const port = 3000


//----------------------------Middleware------------------------------------------

app.use(express.urlencoded({extended: false})) // CHECK
app.use(methodOverride()) // CHECK

//----------------------------DB Connection------------------------------------------
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('true', ()=>{
    console.log('Connected to MongoDB');
})
//----------------------------Routes------------------------------------------------

// get homepage
// get create page
// post input to db
// get show page
// delete from show page
// get edit page
// post edit to db

//----------------------------Port--------------------------------------------------

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})