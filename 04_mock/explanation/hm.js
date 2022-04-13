const {other} = require('./hm2')

const same = () => "old"

const sameInside = () => same()
const otherInside = () => other()


module.exports = { sameInside, otherInside, same }