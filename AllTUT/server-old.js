const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const logEvents = require('./logEvents');
const EventEmiiter = require('events');

class Emitter extends EventEmiiter {}

// Initialize object
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));

const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(
            filePath,
            !contentType.includes('image') ? 'utf-8' : ''
        );
        const data = contentType === 'application/json' ? JSON.parse(rawData) : rawData;
        response.writeHead(filePath.includes('404.html') ? 400 : 200, {
            'Content-Type': contentType,
        });
        response.end(contentType === 'application/json' ? JSON.stringify(data) : data);
    } catch (err) {
        console.error(err);
        myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt');
        response.statusCode = 500;
        response.end();
    }
};

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt');

    // very bad approach
    // let pathFile;
    // if (req.url === '/' || req.url === 'index.html') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     pathFile = path.join(__dirname, 'views', 'index.html');
    //     fs.readFile(pathFile, 'utf-8', (err, data) => {
    //         res.end(data);
    //     });
    // }

    // check content type
    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    // get the file
    let filePath =
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
            ? path.join(__dirname, 'views', req.url, 'index.html')
            : contentType === 'text/html'
            ? path.join(__dirname, 'views', req.url)
            : path.join(__dirname, req.url);

    // make .html extension not requried in the browser
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    // check file exist
    const fileExist = fs.existsSync(filePath);

    if (fileExist) {
        // serve the file
        serveFile(filePath, contentType, res);
    } else {
        switch (path.parse(filePath).base) {
            // serve redirect
            case 'old-page.html':
                res.writeHead(301, { Location: '/new-page.html' });
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { Location: '/' });
                res.end();
                break;
            default:
                // serve a 404 response
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
        }
    }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
