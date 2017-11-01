const client = require('../config');
const tokens = require('../tokens');

module.exports = {
  fetchAccounts: function() {
    return new Promise((resolve, reject) => {
      client.getAuth(tokens.accessToken)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  fetchTransactions: function(startDate, endDate, options) {
    return new Promise((resolve, reject) => {
      client.getTransactions(tokens.accessToken, startDate, endDate, options)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
