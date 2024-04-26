//----------------------------Constants and Variables-----------------------------

const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const methodOverride = require('method-override')
const port = 3000

//----------------------------Middleware------------------------------------------

app.use(express.urlencoded({extended: false})) // CHECK
app.use(methodOverride("_method")) // CHECK

//----------------------------DB Connection------------------------------------------

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', ()=>{
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
})

//----------------------------Routes------------------------------------------------

// get homepage
app.get('/blog', (req, res)=>{
    res.render('index.ejs', {
        title: "Nick's Blog 2: Homepage"
    })
})

// get create page
app.get('/blog/new', (req, res)=>{
})

// post input to db
app.post('/blog', (req, res)=>{
})

// get show page
app.get('/blog/:id', (req, res)=>{
})

// delete from show page
app.delete('/blog/:id', (req, res)=>{
})

// get edit page
app.get('/blog/:id/edit', (req, res)=>{
})

// put edit to db
app.put('/blog/:id', (req, res)=>{
})

//----------------------------Port--------------------------------------------------

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})