const a = require('./hm')
const { other } = require('./hm2')

//при моке всего модуля функции триггерятся даже в случае, если они часть других ф-й
//но надо задавать ответы для всех ф-й
jest.mock('./hm2')
//при моке отдельных ф-й они не будут триггерится как часть других ф-й (из этого же модуля)
//так как тогда они "растворяются" в других 
jest.spyOn(a, 'same');

describe('one', () => {

    beforeEach(() => {
        OK = "mock sucess"
        NOT_OK = "oldSame"
    })

    test('shou', () => {
        a.same.mockReturnValue(OK)
        other.mockReturnValue(OK)

        expect(a.same()).toEqual(OK)
        expect(a.sameInside()).toEqual(NOT_OK)
        expect(a.otherInside()).toEqual(OK)

    })
})
