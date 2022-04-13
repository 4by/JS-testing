const a = require('./hm')
const { three } = require('./hm2')


jest.mock('./hm2')

describe('one', () => {

    beforeEach(() => {
        our_todos = "hi:aaa:bbb"
        resp1 = "aaa:"
        resp2 = "bbb"
    })

    test('shou', () => {
        jest.spyOn(a, 'two');
        //при моке отдельных ф-й они не будут триггерится как часть других ф-й (из этого же модуля)
        //так как тогда они "растворяются" в других 
        a.two.mockReturnValue(resp2)
        //при моке всего модуля функции триггерятся даже в случае, если они часть других ф-й
        //но надо задавать ответы для всех ф-й
        three.mockReturnValue(resp1)
        console.log(a.two())
        // return expect(a.one()).toEqual(our_todos)

    })
})
