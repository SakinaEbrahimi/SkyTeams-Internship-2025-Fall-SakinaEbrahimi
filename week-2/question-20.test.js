
    // Author: Sakina Ebrahimi
    //Description: Test Counts digits in a number: find how many digits are in a number.
    //input=786
    //output=3

const numberDigits = require("./question-20");

describe('Test Number Digits function',()=>{
    it('return correct answer',()=>{
        expect(numberDigits(786)).toBe(3)
        expect(numberDigits(78693)).toBe(5)
        expect(numberDigits(1)).toBe(1)
        expect(numberDigits(0)).toBe(0)
        expect(numberDigits(786)).toBe(3)
        expect(numberDigits(12345)).toBe(5)
        expect(numberDigits(10111)).toBe(5)
        expect(numberDigits(90999999)).toBe(8)
    })
    it('return correct answer for negative number', ()=>{
        expect(numberDigits(-789)).toBe(3)
        expect(numberDigits(-7)).toBe(1)
        expect(numberDigits(-10000)).toBe(5)
        expect(numberDigits(-33)).toBe(2)
    })
    it('return false for string value',()=>{
        expect(numberDigits('123')).toBe(false)
        expect(numberDigits('0')).toBe(false)
        expect(numberDigits('onetwo')).toBe(false)
    })
})