const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash: compact', () => {

    let array

    //beforeEach - хук, который вызывается перед каждым тестом
    beforeEach(() => array = [false, 42, 0, '', true, null, 'hello'])

    //afterAll - хук, который вызывается после всех тестов
    afterAll(() => _ = new Lodash())

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
    })

    test('should working array be editable', () => {
        // изменили глобальную область видимости, которая повлияла на другие тесты (если без beforeEach)
        array.push(...['one', 'two']) 
        expect(array).toContain('one')
        expect(array).toContain('two')
    })

    test('should remove falsy values from array', () => {
        const result = [42, true, 'hello']
        expect(_.compact(array)).toEqual(result)
    })

    test('should NOT contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(0)
    })
})


describe('Lodash: groupBy', () => {
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
    })

    test('should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            3: [3.1],
            4: [4.2]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            3: ['one', 'two'],
            5: ['three']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})