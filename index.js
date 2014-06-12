var Conversion = require('transformer-conversion');
var tIpAddress = require('transformer.ip-address');
var tInteger = require('transformer.integer');
// require any other modules you may need here.
var ip = require('ip');

module.exports = Conversion(tIpAddress, tInteger, convert);

function convert(input) {
  return ip.toLong(input);
}
