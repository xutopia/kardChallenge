module.exports = function(app, express) {
  app.get('/login/link', userController.loginLink);
  app.post('/token/getAccessToken', uerController.getAccessToken);

  app.post('/api/accounts', itemController.getAccounts);
  app.post('/api/item', itemController.getItem);
  app.post('/api/transactions', itemController.getTransactions);
}
