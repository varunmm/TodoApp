
var mongoose = require ('mongoose');

var bodyParser = require('body-parser');

mongoose.connect(' mongodb://test:test@ds035806.mlab.com:35806/todo1');
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
 var todoSchema = new mongoose.Schema({
     
     item:string
     
 });

var Todo = mongoose.model('Todo',todoSchema);

var itemOne = Todo({item: 'buy flowers'}).save (function(err){
    
    if (err) throw err;
    
    console.log('item saved')
    
});

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
    
   app.get('/todo', function(req,res){
       
     res.render('todo', {todos: data}) ; 
       
   });
    
    app.post('/todo',urlencodedParser, function(req,res) {
        
        data.push(req.body);
        
        res.json(data);
        
    });
    
    app.delete('/todo/:item', function(req,res) {
        
        data = data.filter(function(todo) {
            
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
         res.json(data);
    });
    
    
    
    
};