
const express = require('express');
const bodyParser = require('body-parser');

const project = express();

const adminroute = require('./route/admin');
const shoproute = require('./route/shop');

project.use(bodyParser.urlencoded({extended : false}))

project.use(adminroute);
project.use(shoproute);

project.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

project.listen(3000);



