const {mockedInOtherModule} = require('./hm2')

const mockedBySpy = () => "old"

const callMockedFromSameModule = () => mockedBySpy()
const callMockedFromOtherModule = () => mockedInOtherModule()


module.exports = { callMockedFromSameModule, callMockedFromOtherModule, mockedBySpy }