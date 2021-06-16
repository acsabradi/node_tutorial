const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-module-flavor')
const mindGrenade = require('./07-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

console.log(data);