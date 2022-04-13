const {mockedInOtherModule} = require('./hm2')

const mockedInSameModule = () => "old"

const callMockedFromSameModule = () => mockedInSameModule()
const callMockedFromOtherModule = () => mockedInOtherModule()


module.exports = { callMockedFromSameModule, callMockedFromOtherModule, mockedInSameModule }