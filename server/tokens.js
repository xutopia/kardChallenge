// TODO: This in memory storage mechanism is not feasible, since it would only work with 1 user at a time. Need a persisting relational database for this to scale.

module.exports = {
  accessToken: null,
  publicToken: null,
}
