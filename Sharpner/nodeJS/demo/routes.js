const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Conten-Type', 'text/html');
    if (url === '/') {
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading message.txt:', err);
                data = 'No message found';
            }
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><p>${data}</p><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            return res.end();
        });
        return;
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            //console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
        return res.end();
    }
    if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        res.end();
        return res.end();
    }
    if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to My Node JS Project</h1></body>');
        res.write('</html>');
        res.end();
        return res.end();
    }
}
// module.exports = requestHandler;

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text.'
}

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text.'

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text.';