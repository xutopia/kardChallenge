const isAuthenticated = require('../middleware/auth');
const userController = require('../controllers/user');
const itemController = require('../controllers/item');

module.exports = function(app, express) {
  app.get('/login/link', userController.loginLink);
  app.post('/token/getAccessToken', userController.getAccessToken);

  app.get('/api/accounts', isAuthenticated, itemController.getAccounts);
  app.post('/api/item', isAuthenticated, itemController.getItem);
  app.post('/api/transactions', isAuthenticated, itemController.getTransactions);
}
