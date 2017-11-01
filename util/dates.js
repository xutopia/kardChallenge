const moment = require('moment');

module.exports = {
  getCurrentDate: function(dateFormat) {
    return moment().format(dateFormat);
  },
  getPastMonthDate: function(dateFormat) {
    return moment().subtract(30, 'days').format(dateFormat);
  }
}
