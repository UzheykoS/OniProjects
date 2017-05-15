const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
// you can pass the parameter in the command line. e.g. node server.js 3000
const port = process.argv[2] || 9020;

http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.method == 'POST') {
        let body = '';
        req.on('data', (data) => {
            body += data;
        });

        let callback;
        if (req.url === "/save/ingredients") {
            callback = () => {
                let POST = JSON.parse(body);

                fs.writeFile("./src/ingredients.json", JSON.stringify(POST), (err) => {
                    if (err) {
                        res.writeHead(202, { 'Content-Type': 'text/html' });
                        res.end('Ingredietns were not saved.');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end('Ingredietns successfully saved.');
                });
            };
        }
        else if (req.url === "/save/recipes") {
            callback = () => {
                let POST = JSON.parse(body);

                fs.writeFile("./src/recipes.json", JSON.stringify(POST), (err) => {
                    if (err) {
                        res.writeHead(202, { 'Content-Type': 'text/html' });
                        res.end('successfully were not saved.');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end('Recipes successfully saved.');
                });
            };
        }
        else {
            callback = () => {
                res.writeHead(202, { 'Content-Type': 'text/html' });
                res.end('Method was not found.');
            };
        }

        req.on('end', callback);
    }
    else if (req.method == 'GET') {
        const parsedUrl = url.parse(req.url);
        let pathname = `./dist/${parsedUrl.pathname}`;

        const mimeType = {
            '.ico': 'image/x-icon',
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.json': 'application/json',
            '.css': 'text/css',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.wav': 'audio/wav',
            '.mp3': 'audio/mpeg',
            '.svg': 'image/svg+xml',
            '.pdf': 'application/pdf',
            '.doc': 'application/msword',
            '.eot': 'appliaction/vnd.ms-fontobject',
            '.ttf': 'aplication/font-sfnt'
        };
        fs.exists(pathname, (exist) => {
            if (!exist) {
                // if the file is not found, return 404
                res.statusCode = 404;
                res.end(`File ${pathname} not found!`);
                return;
            }
            // if is a directory, then look for index.html
            if (fs.statSync(pathname).isDirectory()) {
                pathname += 'index.html';
            }
            // read file from file system
            fs.readFile(pathname, (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                } else {
                    // based on the URL path, extract the file extention. e.g. .js, .doc, ...
                    const ext = path.parse(pathname).ext;

                    res.setHeader('Content-type', mimeType[ext] || 'text/plain');
                    res.end(data);
                }
            });
        });
    }
}).listen(parseInt(port));
console.log(`Server listening on port ${port}`);