const num = require('./hm2')

const async = () => "hi:" + num.axios()

module.exports = { async }