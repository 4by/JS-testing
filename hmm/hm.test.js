const { one, three } = require('./hm')
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
        jest.spyOn(require('./hm'), 'three');
        require('./hm').three.mockReturnValue(resp2)
        two.mockReturnValue(resp1)
        return expect(one()).toEqual(our_todos)

    })
})
