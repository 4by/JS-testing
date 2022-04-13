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
        a.two.mockReturnValue(resp2)
        three.mockReturnValue(resp1)
        console.log(a.two())
        // return expect(a.one()).toEqual(our_todos)

    })
})
