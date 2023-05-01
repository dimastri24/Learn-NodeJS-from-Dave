const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf-8' });

const ws = fs.createWriteStream('./files/new-lorem.txt');

// rs.on('data', (datachunk) => {
//     ws.write(datachunk);
// });

rs.pipe(ws);
