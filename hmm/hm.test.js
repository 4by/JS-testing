const {async} = require('./hm')
//импортируем экшс, чтобы могли его замокать
const axios = require('./hm2')

//сделали мок на весь модуль экшс, тем самым все его ф-и являются замоканными
//это позволяет функционал для работы с ними 
jest.mock('./hm2')
//если мы хотим сделать мок только на конкретный метод модуля,
//например на метод pow модуля Math, то следует испольщовать:
// jest.spyOn(Math, "pow")


describe('async: GET', () => {
    let response
    let our_todos

    beforeEach(() => {
        our_todos = "hi:qqq"
        response = "qqq"
    })

    test('should return data from backend', () => {
        axios.axios.mockReturnValue(response)
        console.log(axios.axios())
        console.log(async())
        return expect(async()).toEqual(our_todos)

    })
})
