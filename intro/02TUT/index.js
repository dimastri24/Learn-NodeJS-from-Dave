// const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const FileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt')); // delete

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
        await fsPromises.rename(
            path.join(__dirname, 'files', 'promiseWrite.txt'),
            path.join(__dirname, 'files', 'promiseComplete.txt')
        );
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
};

FileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// being called first then read the file
// console.log('Hello....');

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to Meet You', (err) => {
//     if (err) throw err;
//     console.log('Write Complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
//         if (err) throw err;
//         console.log('Append Complete');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename Complete');
//         });
//     });
// });

// exit on uncaught error
process.on('uncaughtException', (err) => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});
