const user = require('../models/user');
const tokens = require('../tokens');

module.exports = {
  loginLink: function(req, res, next) {
    // TODO: not sure if this extra get request for a Plaid Link is the best approach for client. May be useful in non-sandbox accounts.
    return res.status(200).json({
      PLAID_PUBLIC_KEY: process.env.PLAID_PUBLIC_KEY,
      PLAID_ENV: process.env.PLAID_ENV,
    });
  },
  getAccessToken: function(req, res, next) {
    tokens.publicToken = req.body.publicToken;

    user.swapTokens(tokens.publicToken)
      .then(data => {
        tokens.accessToken = data;
        res.status(200).json({
          errors: null,
          hasAccessToken: true,
        });
      })
      .catch(err => {
        res.status(400).json({
          errors: err,
          hasAccessToken: false,
        });
      });
  }
}
