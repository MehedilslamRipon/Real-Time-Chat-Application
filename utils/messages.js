// dependencies
const moment = require('moment-timezone');

function formatMessage(username, text) {
   return {
      username,
      text,
      // time: moment().format('h:mm a'),
      time: moment().tz('Asia/Dhaka').format('h:mm a'),
   };
}

module.exports = formatMessage;
