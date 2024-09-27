const existToken = require('../utils/exist-token');

const authMiddleware = (req, res, next) => {
  if (!existToken(req)) {
    return res.status(401).json({ message: 'You do not have valid authentication credentials' });
  }

  next();
};

module.exports = authMiddleware;
