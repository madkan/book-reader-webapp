var express = require('express');
var bodyparser = require('body-parser');
var mongo = require('mongoose');

// connecting to mongodb
mongo.connect('mongodb://localhost:27017/nodedb', {useNewUrlParser:true,useUnifiedTopology:true});
var db=mongo.connection;
db.on('error', console.log.bind(console, 'console error'));
db.once('open', function(callback){
    console.log('connected to local database');
});

var app = express();

app.set('view engine','ejs'); 

app.use(bodyparser.json()); 
app.use(express.static('public')); 
app.use(bodyparser.urlencoded({
    extended: true
}));

app.get('/admin',function(req,res){
    res.render('admin');
});

// adding user into db
app.post('/adduser',function(req,res){
    uname=req.body.uname;
    obj={username : uname};
    // if username already exists, dont add
    // else add username to database
    db.collection('books').insertOne(obj,function(err,result){
        if (err) throw err;
        console.log('1 user inserted');
        res.send({'message':'user added'});
    });
});

app.post('/checkstats',function(req,res){
    uname=req.body.uname;
    // Find total reading duration of the user of each of the book he reads.
});

app.post('/bookstats',function(req,res){
    bname=req.body.bname;
    // Find total users who read the book and display statistics.
});

app.post('/totalstats',function(req,res){
    
});

app.get('/',function(req,res){
    res.render('userlogin');
});

app.post('/login',function(req,res){
    uname=req.body.uname;
    pw=req.body.pw;
    var query={username:uname};
    db.collection('books').find(query).toArray(function(error,result){
        if(error) throw error;
        //console.log(result[0]['password']);
        // set password for first time login
        if(result[0]['password']==undefined){
            newvals={$set:{password:pw}};
            db.collection('books').updateOne(query, newvals, function(error,result){
                if (error) throw error;
                console.log('password added into db');
                res.render('index');
            });
        }
        // if password was previously set, validate password.
        else{
            if(pw==result[0]['password']){
                res.render('index');
            }
            else{
                res.send({'message':'wrong password'});
            }
        }
    });
});

app.post('/start',function(req,res){
    var uname=req.body.username;
    var tstamp=req.body.timestamp;
    var bname=req.body.bookname;
    console.log('start pressed');
    // update in database
    
});

app.post('/stop',function(req,res){
    var uname=req.body.username;
    var bname=req.body.bookname;
    var tstamp=req.body.timestamp;
    console.log('stop pressed');
    // update in database
});

app.listen(3000,function(){
    console.log('listening at port 3000');
});