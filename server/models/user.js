const client = require('../config');
const tokens = require('../tokens');

module.exports = {
  swapTokens: function(publicToken) {
    return new Promise((resolve, reject) => {
      client.exchangePublicToken(publicToken)
        .then(tokenResponse => {
          tokens.accessToken = tokenResponse.access_token;
          console.log('inside swap tokens, looking at tokens: ', tokens);
          resolve(tokens.accessToken);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
