const utf8 = require('utf8')
const Buffer = require('buffer/').Buffer

// Consumes JSON Object and returns base64
function encode(object) {
  const stringifiedData = JSON.stringify(object)
  const utf8Data = utf8.encode(stringifiedData)
  const base64Data = new Buffer(utf8Data).toString('base64')
  return base64Data
}

// Consumes base64 and returns JSON Object
function decode(base64Data) {
  const utf8Data = new Buffer(base64Data, 'base64').toString('utf8')
  const stringifiedData = utf8.decode(utf8Data)
  const object = JSON.parse(stringifiedData)

  return object
}

module.exports.encode = encode
module.exports.decode = decode
module.exports.browserEncode = encode
module.exports.browserDecode = decode
