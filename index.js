var transformer = require('dat-transformer');
var tIpAddress = transformer('ip-address');
var tInteger = transformer('integer');
// require any other modules you may need here.
var ip = require('ip');

module.exports = transformer.Conversion(tIpAddress, tInteger, convert);

function convert(input) {
  return ip.toLong(input);
}
