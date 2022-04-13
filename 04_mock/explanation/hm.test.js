const a = require('./hm')
const { mockedInModule } = require('./hm2')

//при моке всего модуля функции триггерятся даже в случае, если они часть других ф-й
//но надо задавать ответы для всех ф-й
jest.mock('./hm2')
//при моке отдельных ф-й они не будут триггерится как часть других ф-й (из этого же модуля)
//так как тогда они "растворяются" в других 
jest.spyOn(a, 'mockedBySpy');

describe('one', () => {

    beforeEach(() => {
        OK = "mock sucess"
        NOT_OK = "old"
    })

    test('shou', () => {
        a.mockedBySpy.mockReturnValue(OK)
        mockedInModule.mockReturnValue(OK)

        expect(a.mockedBySpy()).toEqual(OK)
        expect(a.callMockedFromSameModule()).toEqual(NOT_OK)
        expect(a.callMockedFromOtherModule()).toEqual(OK)

    })
})
