import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { inputFilter, converte, converteActiveAreas } from './controller';

const getCurses = { RUB: 1, USD: 2, UAH: 3 }
const getAreas = [
    { listVisible: false, text: 1, value: "USD" },
    { listVisible: false, text: 2, value: "RUB" }
]
const converteMock = jest.fn(converte)


describe('filter func', () => {

    test('check valid', () => {
        expect(inputFilter("123")).toBe("valid")
    })

    test('check not finished', () => {
        expect(inputFilter("123e")).toBe("notFinished")
        expect(inputFilter("123e-")).toBe("notFinished")
        expect(inputFilter("123.")).toBe("notFinished")
    })

    test('check not valid', () => {
        expect(inputFilter("q")).toBe("notValid")
    })

    test('check valid but not possible', () => {
        expect(inputFilter("0000")).toBe("valid")
    })

})


describe('converte func', () => {

    const RubToRub = { value: 2, fromCurs: getCurses.RUB, toCurs: getCurses.RUB }
    const RubToUSD = { value: 2, fromCurs: getCurses.RUB, toCurs: getCurses.USD }

    test('to itself', () => {
        expect(converte(RubToRub)).toBe(2)
    })

    test('to other', () => {
        expect(converte(RubToUSD)).toBe(1)
    })





})









describe('push value func', () => {

    const argToFun = { value: "12", index: 1, getCurses, getAreas }
    const RubToRub = { value: 2, fromCurs: getCurses.RUB, toCurs: getCurses.RUB }


    
    test('howManyTimes', () => {
        jest.spyOn(require('./controller'), 'converte');
        
        require('./controller').converte.mockReturnValue(3)
        // console.log(converte(RubToRub))


        console.log(converteActiveAreas(argToFun))

        expect(converte).toBeCalled();


        // jest.mock('./controller')
        // const foo = require('./controller');
        // foo.converte.mockReturnValue(3)

        // converteMock.mockReturnValue(0)
        // const qq = () => foo.converte(1)
        // console.log(qq())

        // const qq = foo.converteActiveAreas(argToFun)
        // console.log(qq)

        // converteMock()
        // expect(converteMock2).toBeCalledTimes(4)



    })



    // test('should qq work', () => {
    //     converteMock.mockReturnValue('42')
    //     expect(converteMock()).toEqual('42')
    // })



})
