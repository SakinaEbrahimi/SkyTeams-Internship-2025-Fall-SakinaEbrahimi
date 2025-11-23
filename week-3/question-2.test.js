
    // Author: Sakina Ebrahimi
    // Description: Test Reverse a number function
    // input: 1234
    // output:4321

const { default: expect } = require('expect')
const reverseNumber = require('./question-2')

describe('Test Reverse number function',()=>{
    it('return correct answer',()=>{
        expect(reverseNumber(12345)).toEqual(54321)
        expect(reverseNumber(12)).toEqual(21)
        expect(reverseNumber(1234)).toEqual(4321)
        expect(reverseNumber(789)).toEqual(987)
        expect(reverseNumber(-1234)).toEqual(4321) 
        expect(reverseNumber(0)).toEqual(0) 
    })
    it('return an error decimal numbers',()=>{
        expect(()=>reverseNumber(3.12)).toThrow()
    })
    it('return an error for null or undefined value', ()=>{
        expect(()=> reverseNumber()).toThrow()
        expect(()=> reverseNumber(undefined)).toThrow()
    })
    it('return an error for string value',()=>{
        expect(()=> reverseNumber('!@#')).toThrow()
        expect(()=> reverseNumber('1234')).toThrow()
        expect(()=> reverseNumber('one')).toThrow()
        expect(()=> reverseNumber('123')).toThrow()
    })
})