const logger = require('../utils/logger');

const loggerMiddleware = (req, res, next) => {
  const start = Date.now();

  res.on('finish', async () => {
    const duration = Date.now() - start;
    const logMessage = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;

    await logger.info(logMessage);
  });

  next();
};

module.exports = loggerMiddleware;
