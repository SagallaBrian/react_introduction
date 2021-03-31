const myhttps = require('http');
const myfs = require('fs');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 5000;

const mimeTypes = {
    '.html': 'text/html',
    '.jgp': 'image/jpeg',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
}

const server = myhttps.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        myfs.readFile('./views/index.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tut1') {
        myfs.readFile('./views/pag1.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tut2') {
        myfs.readFile('./views/pag2.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tut3') {
        myfs.readFile('./views/pag3.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tut4') {
        myfs.readFile('./views/pag4.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tut5') {
        myfs.readFile('./views/pag5.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tut6') {
        myfs.readFile('./views/pag6.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tut7') {
        myfs.readFile('./views/pag7.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tut8') {
        myfs.readFile('./views/pag8.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tut9') {
        myfs.readFile('./views/pag9.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tuta') {
        myfs.readFile('./views2/pag1.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tutb') {
        myfs.readFile('./views2/pag2.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tutc') {
        myfs.readFile('./views2/pag3.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tutd') {
        myfs.readFile('./views2/pag4.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tute') {
        myfs.readFile('./views2/pag5.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/tutf') {
        myfs.readFile('./views2/pag6.html', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/script1') {
        myfs.readFile('./assets/script1.js', 'utf8', (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/javascript');
            res.end(pagdata);
        })
    }
    if (req.method === 'GET' && req.url === '/favicon') {
        myfs.readFile('./assets/reacticon2.png',  (err, pagdata) => {
            if (err) {
                throw err;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/png');
            res.end(pagdata);
        })
    }

})


server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})




/**
 * https://reactjs.org/docs/introducing-jsx.html 
 * https://www.robinwieruch.de/react-pass-props-to-component
*/
