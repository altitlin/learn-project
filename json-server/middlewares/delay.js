const TIMEOUT = 1000;

const delayMiddleware = async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, TIMEOUT);
  });
  next();
};

module.exports = delayMiddleware;
