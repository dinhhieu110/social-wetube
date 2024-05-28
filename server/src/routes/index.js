const authRouter = require('./auth.route');

const routes = (app) => {
  app.use('/api/auth', authRouter);
};

module.exports = routes;
