const {other} = require('./otherModule')

const same = () => "old"

const sameInside = () => same()
const otherInside = () => other()


module.exports = { sameInside, otherInside, same }