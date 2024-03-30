
const express = require('express');

const project = express();

project.use((req, res, next) => {
    console.log('In the middleware!')
    next();
})

project.use((req, res, next) => {
    console.log('out the middleware!')
    res.send('<h1>Hello from Express.js!!!<h1>');
})

project.listen(3000);



