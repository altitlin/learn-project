const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server');

const delayMiddleware = require('./middlewares/delay');
const authMiddleware = require('./middlewares/auth');
const loggerMiddleware = require('./middlewares/logger');
const logger = require('./utils/logger');

const PORT = 4242;

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);
server.use(delayMiddleware);
server.use(loggerMiddleware);

server.post('/api/v1/auth/signin', (req, res) => {
  try {
    const { username, password } = req.body;
    const { users = [] } = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));

    const candidate = users.find((user) => user.username === username && user.password === password);

    if (!candidate) {
      return res.status(401).json({ message: 'Неверный логин или пароль' });
    }

    return res.json(candidate);
  } catch (error) {
    logger.error(error.message);
    return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

server.use('/api/v1', authMiddleware, router);

const start = () => {
  try {
    server.listen(PORT);
    logger.info(`Server has started on the port ${PORT}...`);
  } catch (error) {
    logger.error(error.message);
  }
};

start();
