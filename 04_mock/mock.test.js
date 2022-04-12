const { map, async } = require('./mock')
//импортируем экшс, чтобы могли его замокать
const axios = require('axios')

//сделали мок на весь модуль экшс, тем самым все его ф-и являются замоканными
//это позволяет функционал для работы с ними 
jest.mock('axios')
//если мы хотим сделать мок только на конкретный метод модуля,
//например на метод pow модуля Math, то следует испольщовать:
// jest.spyOn(Math, "pow")

describe('Map function', () => {
    let array
    let qq

    beforeEach(() => {
        array = [1, 2, 3, 5]
        //создание ф-и с повешенным на нее моком
        qq = jest.fn(x => x ** 2)
        map(array, qq)
    })

    afterEach(() => {
        //поскольку моки накапливают вызовы то те, что заданы 
        //не динамически перед каждым вызовом - необходимо чистить
        axios.mockClear();
        // jest.clearAllMocks()
    })

    test('should call callback', () => {
        expect(qq).toBeCalled()
    })

    test('should cal callback 4 times', () => {
        expect(qq).toBeCalledTimes(4)
        expect(qq.mock.calls.length).toBe(4)
    })

    test('should pow 2 each element', () => {
        expect(qq.mock.results[0].value).toBe(1)
        expect(qq.mock.results[1].value).toBe(4)
        expect(qq.mock.results[2].value).toBe(9)
        expect(qq.mock.results[3].value).toBe(25)
    })

    test('should qq work', () => {
        //требуем от функции, чтобы она вернула (внутри данного теста) 
        // 100, 200: по одному разу, потом возвращала 42
        qq
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValue('42')

        expect(qq()).toBe(100)
        expect(qq()).toEqual(200)
        expect(qq()).toEqual('42')
        expect(qq()).toEqual('42')
    })
})


describe('async: GET', () => {
    let response
    let our_todos

    beforeEach(() => {
        our_todos = [{ id: 1, title: 'Todo 1', completed: false }]
        response = { data: { our_todos } }
    })

    test('should return data from backend', () => {
        //когда мы будем делать запрос на сервер через axios 
        //(так как ранее на весь модуль axios был наложен мок)
        //jest отловит это место и сразу вернет response 
        //в ответ на запрос (который он подавит)
        axios.get.mockReturnValue(response)
        return async.gets().then(data => expect(data.our_todos).toEqual(our_todos)
        )
    })

})