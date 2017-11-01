const tokens = require('../tokens');
const item = require('../models/item');

module.exports = {
  getAccounts: function(req, res, next) {
    item.fetchAccounts()
      .then(data => {
        return res.status(200).json({
          errors: null,
          accounts: data.accounts,
          numbers: data.numbers,
        });
      })
      .catch(err => {
        return res.status(400).json({
          errors: err,
        })
      });
  },
  getItem: function(req, res, next) {

  },
  getTransactions: function(req, res, next) {

  }
}
