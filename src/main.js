const pinoms = require('pino-multi-stream');
const fs = require('fs');

const logger = pinoms({
    prettyPrint: true,
    streams: [
        { stream: fs.createWriteStream('./all.out') },
        { level: 'info', stream: fs.createWriteStream('./info.out') }
    ]
});

logger.info('hello world');
