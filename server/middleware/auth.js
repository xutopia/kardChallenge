const tokens = require('../tokens');

module.exports = function(req, res, next) {
  // console.log('inside the auth middleware, looking at tokens: ', tokens);
  if (tokens.accessToken === null) {
    return res.status(401).end();
  } else {
    return next();
  }
}
