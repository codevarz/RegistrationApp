var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs("mongodb://vamsi:password@ds011725.mlab.com:11725/marlabsdb",['users']);
var bodyparser=require('body-parser');
app.use(express.static(__dirname));
app.use(bodyparser.json());
app.get('/',function(req,res){
    
    res.send('Hello from server.js');
});


app.post('/users', function(req,res){
    console.log(req.body);
    db.users.insert(req.body, function(err,doc){
       res.json(doc); 
    });
});

app.listen(3000);
console.log('listening to port 3000');