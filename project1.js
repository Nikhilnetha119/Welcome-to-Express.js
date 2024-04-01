
const bodyParser = require('body-parser');
const express = require('express');

const project = express();

project.use(bodyParser.urlencoded({extended : false}))

project.get('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='product'><input type='number' name='size'><button type='submit'>Add product</button></form>")
});

project.post('/product',( req, res, next) => {
    const product = req.body.product;
    const size = req.body.size;

    console.log('product:', product)
    console.log('size:', size)
    console.log(req.body);
    res.redirect('/');
})

project.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express.js!!<h1>');
})

project.listen(3000);



