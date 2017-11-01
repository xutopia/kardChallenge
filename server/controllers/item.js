const tokens = require('../tokens');
const item = require('../models/item');
const dates = require('../../util/dates');

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
    // TODO: doesn't seem to be necessary at the moment. Will complete if needed for the mini-banking app.
  },
  getTransactions: function(req, res, next) {
    let startDate = req.body.startDate || dates.getPastMonthDate('YYYY-MM-DD');
    let endDate = req.body.endDate || dates.getCurrentDate('YYYY-MM-DD');
    let options = req.body.opt || {
      count: 100,
      offset: 0,
    }
    item.fetchTransactions(startDate, endDate, options)
      .then(data => {
        return res.status(200).json(data);
      })
      .catch(err => {
        return res.status(400).json({
          errors: err,
        });
      });
  }
}
