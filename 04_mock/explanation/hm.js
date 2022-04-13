const {mockedInModule} = require('./hm2')

const mockedBySpy = () => "old"

const callMockedFromSameModule = () => mockedBySpy()
const callMockedFromOtherModule = () => mockedInModule()


module.exports = { callMockedFromSameModule, callMockedFromOtherModule, mockedBySpy }