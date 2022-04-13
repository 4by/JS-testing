const {other} = require('./hm2')

const same = () => "oldSame"

const sameInside = () => same()
const otherInside = () => other()


module.exports = { sameInside, otherInside, same }