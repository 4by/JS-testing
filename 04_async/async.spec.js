const axios = require('axios')
const Ajax = require('./async')

//сделали мок на весь модуль экшс, чтобы далее работать с его ф-ми 
jest.mock('axios')

describe('Ajax: echo', () => {

    const arg = 'some data'

    //обычный способ
    test('should return value with promise', () => {
        return Ajax.echo(arg)
            .then(data => expect(data).toBe(arg))
    })

    test('should catch error with promise', () => {
        return Ajax.echo()
            .catch(err => expect(err).toBeInstanceOf(Error))
    })

    //работа с асинхронным тестом
    test('should return value async', async () => {
        expect(await Ajax.echo(arg)).toBe(arg)
    })

    test('should catch error async', async () => {
        try { await Ajax.echo() }
        catch (e) { expect(e.message).toBe('error') }
    })

})

describe('Ajax: GET', () => {
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
        return Ajax.get().then(data => expect(data.our_todos).toEqual(our_todos)
        )
    })

})