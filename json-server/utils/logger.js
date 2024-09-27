const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const logFilePath = path.join(__dirname, '../app.log');

const appendFileAsync = promisify(fs.appendFile);

const levels = {
  info: { label: 'INFO', color: '\x1b[32m' },
  warn: { label: 'WARN', color: '\x1b[33m' },
  error: { label: 'ERROR', color: '\x1b[31m' },
  debug: { label: 'DEBUG', color: '\x1b[34m' },
};

function formatMessage(level, message) {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level.label}] ${message}`;
}

const logger = {
  log: async (level, message) => {
    const formattedMessage = formatMessage(level, message);

    console.log(`${level.color} ${formattedMessage}`);

    try {
      await appendFileAsync(logFilePath, formattedMessage + '\n');
    } catch (error) {
      console.error('Failed to write log to file:', error);
    }
  },
  info: (message) => logger.log(levels.info, message),
  warn: (message) => logger.log(levels.warn, message),
  error: (message) => logger.log(levels.error, message),
  debug: (message) => logger.log(levels.debug, message),
};

module.exports = logger;
