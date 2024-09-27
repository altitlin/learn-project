const existToken = (req) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return false;

  const [prefix, token] = authHeader.split(' ');

  if (!token) return false;

  return prefix === 'Bearer' && !!token;
};

module.exports = existToken;
