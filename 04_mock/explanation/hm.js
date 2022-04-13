const {mockedInModule} = require('./hm2')

const mockedBySpy = () => "old"

const sameModule = () => mockedBySpy()
const otherModule = () => mockedInModule()


module.exports = { sameModule, otherModule, mockedBySpy }