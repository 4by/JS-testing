const mdl = require('./module')
const { other } = require('./otherModule')

//при моке всего модуля функции триггерятся даже в случае, если они часть других ф-й
//но надо задавать ответы для всех ф-й
//также все ф-и теряют свои внутренности (console.log(...)) уже до mockReturnValue
jest.mock('./otherModule')
//при моке отдельных ф-й они не будут триггерится как часть других ф-й (из этого же модуля)
//так как тогда они "растворяются" в других 
jest.spyOn(mdl, 'same');


const OK = "mock sucess"
const NOT_OK = "old"



describe('from here', () => {


    beforeEach(() => {
        fun = () => "old"
        mockedHere = jest.fn(fun)
        mockedHere.mockReturnValue(OK)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })


    test('example', () => {
        expect(fun()).toEqual(NOT_OK)
        expect(mockedHere()).toEqual(OK)
    })

    test('features', () => {
        /*

        mockedHere.mockClear()

        fun.mockReturnValueOnce(100)
        
        expect(fun).toBeCalled()

        expect(fun).toBeCalledTimes(4)
        expect(fun.mock.calls.length).toBe(4)

        expect(fun.mock.results[0].value).toBe(NOT_OK)
        expect(fun.mock.results[1].value).toBe(NOT_OK)
        

        */
    })


})

describe('from modules', () => {

    beforeEach(() => {
        mdl.same.mockReturnValue(OK)
        other.mockReturnValue(OK)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })


    test('mocked from module', () => {
        expect(mdl.same()).toEqual(OK)
        expect(other()).toEqual(OK)
    })

    test('mocked callback from module', () => {
        expect(mdl.sameInside()).toEqual(NOT_OK)
        expect(mdl.otherInside()).toEqual(OK)
    })


})
