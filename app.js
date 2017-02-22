var express = require('express');

var app = express();

var todoController = require('./controllers/todoController');
//setting up template engine

app.set ('view engine', 'ejs');

//static files

app.use(express.static('./public'));

//listen to port

todoController(app);

app.listen(3000);

console.log('your listening to port 3000');
