const express= require('express');

const app=express();
app.get('/',(req,res) => {
    res.status(200).send("Hello");
    
});

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