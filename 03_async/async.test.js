const async = require('./async')

describe('async', () => {

    const arg = 'some data'


    //обычный способ
    test('should return value with promise', () => {
        async(arg).then(data => expect(data).toBe(arg))
    })

    test('should catch error with promise', () => {
        async().catch(err => expect(err).toBeInstanceOf(Error))
    })

    //работа с асинхронным тестом
    test('should return value async', async () => {
        expect(await async(arg)).toBe(arg)
    })

    test('should catch error async', async () => {
        try { await async() }
        catch (e) { expect(e.message).toBe('error') }
    })

})
