const express = require('express');
const app = express();
const port = 3000;
const http = require('http');

//1 Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session code

//3 view engine code
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//4 route code
app.get('/hello', (req, res) => {
    res.end("<h1 style='color: blue;'>Welcome to the Home Page</h1>");
});

app.get('/gift', (req, res) => {
   res.end("<h1 style='color: green;'>Welcome to the Gift Page</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`);
});