const mdl = require('./hm')
const { other } = require('./hm2')

//при моке всего модуля функции триггерятся даже в случае, если они часть других ф-й
//но надо задавать ответы для всех ф-й
jest.mock('./hm2')
//при моке отдельных ф-й они не будут триггерится как часть других ф-й (из этого же модуля)
//так как тогда они "растворяются" в других 
jest.spyOn(mdl, 'same');

mockedHere = jest.fn(() => "old")


describe('one', () => {

    beforeEach(() => {
        OK = "mock sucess"
        NOT_OK = "old"
    })

    test('shou', () => {
        mdl.same.mockReturnValue(OK)
        other.mockReturnValue(OK)
        mockedHere.mockReturnValue(OK)

        expect(mdl.same()).toEqual(OK)
        expect(mdl.sameInside()).toEqual(NOT_OK)
        expect(mdl.otherInside()).toEqual(OK)
        expect(mockedHere()).toEqual(OK)

    })
})
