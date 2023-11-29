const path = require('path');
const express = require('express');

const clientDir = ''; // insert client directory 
const PORT = 8000;

const app = express(); 

// app.use(express.static('')); // insert client directory 

app.get('/', (req, res) => {
    // res.sendFile(path.join()); // the html file to serve
    res.send('HELLO')
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})