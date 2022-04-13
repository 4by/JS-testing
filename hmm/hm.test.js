const { one } = require('./hm')
//импортируем экшс, чтобы могли его замокать
const { two } = require('./hm2')

//сделали мок на весь модуль экшс, тем самым все его ф-и являются замоканными
//это позволяет функционал для работы с ними 
jest.mock('./hm2')
//если мы хотим сделать мок только на конкретный метод модуля,
//например на метод pow модуля Math, то следует испольщовать:
// jest.spyOn(Math, "pow")


describe('one', () => {

    beforeEach(() => {
        our_todos = "hi:qqq"
        response = "qqq"
    })

    test('should return data from backend', () => {
        two.mockReturnValue(response)
        return expect(one()).toEqual(our_todos)

    })
})
