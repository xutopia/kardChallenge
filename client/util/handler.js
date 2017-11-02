module.exports = function(publicKey, plaidENV, cb) {
  // NOTE: might want to try and promisify instead of using callbacks.
  const handler = Plaid.create({
    apiVersion: 'v2',
    clientName: plaidENV,
    env: plaidENV,
    product: ['transactions'],
    key: publicKey,
    onSuccess: function(publicToken) {
      cb(null, publicToken);
    },
    onEvent: function(event, metaData) {
      if (event === 'ERROR') {
        cb(metaData);
      }
    },
  });

  handler.open();
}
