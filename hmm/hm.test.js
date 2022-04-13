const a = require('./hm')
//импортируем экшс, чтобы могли его замокать
const { two } = require('./hm2')

jest.mock('./hm2')

describe('one', () => {

    beforeEach(() => {
        our_todos = "hi:aaa:bbb"
        resp1 = "aaa:"
        resp2 = "bbb"
    })

    test('shou', () => {
        jest.spyOn(a, 'three');
        a.three.mockReturnValue(resp2)
        two.mockReturnValue(resp1)
        console.log(a.three())
        // return expect(a.one()).toEqual(our_todos)

    })
})
