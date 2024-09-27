const existToken = (req) => {
  const authHeader = req.headers.authorization;
  const bearerToken = authHeader && authHeader.split(' ')[1];

  return !!bearerToken;
};

module.exports = existToken;
