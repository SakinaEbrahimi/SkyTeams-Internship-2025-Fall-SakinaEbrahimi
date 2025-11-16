
    // Author: Sakina Ebrahimi
    //Description: Test Multiplication table number: print the multiplicationtable for given number(up to 10)

const { default: expect } = require('expect')
const multiplicationTable = require('./question-18')

describe('Test Multiplication Table', ()=>{
    it('return correct answer', ()=>{
        expect(multiplicationTable(5)).toBe(true)
        expect(multiplicationTable(2)).toBe(true)
        expect(multiplicationTable(3)).toBe(true)
    })
    it('return false for string value',()=>{
        expect(multiplicationTable('5')).toBe(false)
        expect(multiplicationTable('4')).toBe(false)
    })
    it('return false for zero value',()=>{
        expect(multiplicationTable(0)).toBe(false)
    })
    it('return false for negative value',()=>{
        expect(multiplicationTable(-5)).toBe(false)
        expect(multiplicationTable(-10)).toBe(false)
        expect(multiplicationTable(-3)).toBe(false)
    })
})