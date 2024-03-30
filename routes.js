const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url==='/') {
        fs.readFile('message.txt', { encoding: 'utf-8'}, (err, data) => {
            if(err) {
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
            res.write('<body>');
            res.write('<form action="/message" method="POST">');
            res.write('<input type="text" name="message"></input>');
            res.write('<button type="submit">Send</button>');
            res.write('</form>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
        });
    } else if (url==='/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from node js</h1></body>');
    res.end();
    
}
 
module.exports = {
    handler : requestHandler,
    someText : "Some hard text"
}
