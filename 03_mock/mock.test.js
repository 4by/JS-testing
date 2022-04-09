const { map } = require('./mock')

describe('Map function', () => {
    let array
    let qq

    beforeEach(() => {
        array = [1, 2, 3, 5]
        //поскольку ф-я обьявлена через jest.fn - мы можем проверять ее далее
        //проверка всего, что связано с ф-й идет через моки
        qq = jest.fn(x => x ** 2)
        map(array, qq)
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