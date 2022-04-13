const num = require('./hm2')

const two = () => "456"
const one = () => "hi:" + num.four() + two()


module.exports = { one, two }