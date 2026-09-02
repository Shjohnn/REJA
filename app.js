const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// MongoDB chaqirish 
const db = require("./server").db();
const mongodb = require('mongodb')




//1 Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let user;

fs.readFile('database/database.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    user = JSON.parse(data);
});
//2 session code

//3 view engine code
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//4 route code
// let items = [];

app.get('/', (req, res) => {
    console.log('user / ga kirdi')
    db.collection('plans').find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("smth went wrong!");
        } else {
            console.log(data);
            res.render('reja.ejs', { items: data });
        }
    });
});

app.post("/create-item", (req, res) => {
    // console.log("user /create-item ga krdi")
    const new_reja = req.body.reja;
    db.collection('plans').insertOne({reja:new_reja},(err,data) => {
        console.log(data.ops[0]);
        res.json(data.ops[0]);
    });
    
});

app.get("/author", (req, res) => {  
    res.render('author.ejs', { user: user });
});
// qoshimcha functionality for deleting items 

app.post("/delete-item/:index", (req, res) => {
    const index = req.params.index;
    items.splice(index, 1);
    res.redirect('/');
});

module.exports=app;