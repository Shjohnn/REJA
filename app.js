const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const fs = require('fs');
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
let items = [];

app.get('/', (req, res) => {
    res.render('harid.ejs', { items: items });
});

app.post("/create-item", (req, res) => {
    const newItem = req.body.item;
    if (newItem && newItem.trim() !== "") {
        items.push(newItem);
    }
    res.redirect('/');
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

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`);
});