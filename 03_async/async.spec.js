const Ajax = require('./async')

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
