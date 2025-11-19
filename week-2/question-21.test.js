
    // Author: Sakina Ebrahimi
    //Description:Test Sum of digits: Calculate the sum of all digits of a number 
    //Example: 
    //input:123
    //output: 6

const sumDigits = require('./question-21')

describe('Test sum of digits',()=>{
    it('return correct answer', ()=>{
        expect(sumDigits(123)).toBe(6)
        expect(sumDigits(1)).toBe(1)
        expect(sumDigits(3456)).toBe(18)
        expect(sumDigits(12)).toBe(3)
        expect(sumDigits(0)).toBe(0)
    })
    it('return correct answer for negative value',()=>{
        expect(sumDigits(-12)).toBe(3)
        expect(sumDigits(-123)).toBe(6)
        expect(sumDigits(-1)).toBe(1)
    })
    it('return false for string input value',()=>{
        expect(sumDigits('123')).toBe(false)
        expect(sumDigits('onetwo')).toBe(false)
    })
})