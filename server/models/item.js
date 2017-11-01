const client = require('../config');
const tokens = require('../tokens');

module.exports = {
  fetchAccounts: function() {
    return new Promise((resolve, reject) => {
      client.getAuth(tokens.accessToken)
        .then(data => {
          // console.log('inside the item model, looking at data: ', data);
          resolve(data);
        })
        .catch(err => {
          // console.log('inside th item model, looking at err: ', err);
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
