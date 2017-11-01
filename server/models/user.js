const client = require('../config');
const tokens = require('../tokens');

module.exports = {
  swapTokens: function(publicToken) {
    return new Promise((resolve, reject) => {
      client.exchangePublicToken(publicToken)
        .then(tokenResponse => {
          tokens.accessToken = tokenResponse.access_token;
          resolve(null);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
