require('dotenv').config()


// #### Import ####
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//Routes
const indexRouter = require('./routes/index')

//Variables
const port = process.env.PORT || 3000;

// #### Application ####
//Config 
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//DataBase
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('Connected to Mongoose'))

//Routes
app.use('/', indexRouter)

//run
app.listen(port, () => {
    // console.log(`Server running on port: ${port}`);
});