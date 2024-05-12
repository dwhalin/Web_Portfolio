const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');


mongoose.connect('mongodb://127.0.0.1:27017/database');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection:"));
db.once("open", () => {
    console.log("Database Connected!");
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));

///////// ROUTES HOME--PAGE
app.get('/', (req, res) => {
    res.render('home')
});

app.get('/home', (req, res) => {
    res.render('home')
});
///////// ROUTES HOME--PAGE

app.get('/pages/aboutMe', (req, res) => {
    res.render('/pages/aboutMe')
});

app.get('/home', (req, res) => {
    res.render('home')
});

app.get('/home', (req, res) => {
    res.render('home')
});



app.listen(3000, () => {
    console.log('Serving on port 3000')
});