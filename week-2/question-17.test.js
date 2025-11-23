
    // Author: Sakina Ebrahimi
    //Description: Test Sum of first N natural numbers
    // example:
    //input: 5
    //output: 15

const { default: expect } = require('expect')
const sumUpTo = require('./question-17')

describe('test Sum function',()=>{
    it('return correct answer',()=>{
        expect(sumUpTo(5)).toBe(15)
        expect(sumUpTo(10)).toBe(55)
        expect(sumUpTo(8)).toBe(36)
        expect(sumUpTo(30)).toBe(465)
    })
   
    it('return false when input number is less or equal to zero',()=>{
        expect(sumUpTo(0)).toBe(false)
        expect(sumUpTo(-1)).toBe(false)
        expect(sumUpTo(-10)).toBe(false)
        expect(sumUpTo(-3)).toBe(false)
        expect(sumUpTo(-100)).toBe(false)
    })
})