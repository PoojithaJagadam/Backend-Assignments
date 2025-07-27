const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to Express");
})


app.get('/about', (req,res) => {
    res.send("ABout page")
});

app.get('/home', (req,res) => {
    res.send("Welcome to Home page")
});

app.get('/home/profile', (req,res) => {
    res.send("WElcome to rofile page")
})
app.listen(3000, () => {
    console.log("Server runnnig on port 3000 http://localhost:3000");
})