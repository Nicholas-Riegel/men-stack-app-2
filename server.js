//----------------------------Constants and Variables-----------------------------

const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const methodOverride = require('method-override')
const port = 3000
const Post = require('./models/post')

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
app.get('/blog', async (req, res)=>{
    const allPosts = await Post.find()
    res.render('index.ejs', {
        subtitle: "Home",
        allPosts
    })
})

// get create page
app.get('/blog/new', (req, res)=>{
    res.render('new.ejs', {
        subtitle: "Create"
    })
})

// post input to db
app.post('/blog', async (req, res)=>{
    const post = await Post.create({
        title: req.body['post-title'],
        body: req.body['post-body']
    })
    res.redirect('/blog')
})

// get show page
app.get('/blog/:id', async (req, res)=>{
    const post = await Post.findById(req.params.id)
    res.render('show.ejs', {
        subtitle: "Show",
        post
    })
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