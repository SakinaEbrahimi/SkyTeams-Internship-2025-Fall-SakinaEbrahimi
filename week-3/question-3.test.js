
    // Author: Sakina Ebrahimi
    // Description: Test Sum the digits of a number 
    // input: 12345
    // output:15

const { default: expect } = require('expect')
const sumOfDigits = require('./question-3')

describe('Test Sum of digits function',()=>{
    it('return correct answer',()=>{
        expect(sumOfDigits(12345)).toBe(15)
        expect(sumOfDigits(12)).toBe(3)
        expect(sumOfDigits(0)).toBe(0)
        expect(sumOfDigits(-123)).toBe(6)
    })
    it('return an error for string value, null, undefined',()=>{
        expect(()=>sumOfDigits('1234')).toThrow()
        expect(()=>sumOfDigits('onetwo')).toThrow()
        expect(()=>sumOfDigits(null)).toThrow()
        expect(()=>sumOfDigits( )).toThrow()
        expect(()=>sumOfDigits(undefined)).toThrow()
    })
})