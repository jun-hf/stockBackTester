const path = require('path');
const express = require('express');

const clientDir = path.join(process.cwd(), 'client', 'dist'); 
const PORT = 8000;

const app = express(); 

app.use(express.static(clientDir)); 

app.get('/', (req, res) => {
    const homePage = path.join(clientDir, 'index.html');
    res.sendFile(path.join(homePage)); 
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})