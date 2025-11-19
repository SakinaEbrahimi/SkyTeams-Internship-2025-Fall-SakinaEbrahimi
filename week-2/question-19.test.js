
    //Author: Sakina Ebrahimi
    //Description: Test Reverse the digits of an integer
    //input:1234
    //output:4321

const { default: expect } = require('expect')
const reverseNumber = require('./question-19')

describe('Test Reverse Function',()=>{
    it('retunr correct answer',()=>{
        expect(reverseNumber(1234)).toBe(4321)
        expect(reverseNumber(12)).toBe(21)
        expect(reverseNumber(567)).toBe(765)
        expect(reverseNumber(0)).toBe(0)
    })
    it('return correct answer for negative value',()=>{
        expect(reverseNumber(-123)).toBe(321)
        expect(reverseNumber(-1234)).toBe(4321)
    })
    it('return false for string value',()=>{
        expect(reverseNumber('123')).toBe(false)
        expect(reverseNumber('1234')).toBe(false)
    })
})