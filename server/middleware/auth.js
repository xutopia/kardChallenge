const tokens = require('../tokens');

module.exports = function(req, res, next) {
  if (tokens.accessToken === null) {
    return res.status(401).end();
  } else {
    return next();
  }
}
