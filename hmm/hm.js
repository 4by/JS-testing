const num = require('./hm2')

const three = () => "456"
const one = () => "hi:" + num.two() + three()


module.exports = { one, three }