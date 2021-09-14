const express= require('express');

const app=express();
const bodyParser = require("body-parser");
const checkAdmin= (req,res,next) => {
    if(req.query.auth === 'bvgjhghjbmmnbkjhkj'){
        next()
    } else {
        res.status(401).send("should be admin")
    }
    
};

const sendRes = (req.res) => {
    res.status(200)
    res.json(req.query)
};

//app.use(checkAdmin);

app.use(bodyParser.urlencoded({extended: true}));   //for form data
app.use(bodyParser.json()) //for json

app.get('/',sendRes);

app.post('/',(req,res) => {
    console.log('req.body ->',req.body);
    res.json({text:req.body})
})

app.get('/products',(req,res) => {
    res.send(req.query.q);
})


app.get('/ab?cd',(req,res) => {
    res.send('abcd');
})

app.get('/ab*cd',(req,res) => {
    res.send('abcd');
})

app.get('/ab(cd)?e',(req,res) => {
    res.send('abcd');
})

app.get(/.*fly$/,(req,res) => {
    res.send('abcd');
})

app.get('/user/:userId/books/:bookId',(req,res) => {
    res.send(req.params.id);
})
app.listen(5000);