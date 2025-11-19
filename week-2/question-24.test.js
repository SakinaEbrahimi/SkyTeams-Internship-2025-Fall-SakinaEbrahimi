
    // Author: Sakina Ebrahimi
    //Description:Test Find GCD of two number: compute the greatest common divisor using repeated subtraction of the Euclidean algorithm
    //Example: 
    //input:12,18
    //output: 6

const { default: expect } = require('expect')
const GCD = require('./question-24')

describe('Test GCD function', ()=>{
    it('return correct answer',()=>{
        expect(GCD(12,18)).toBe(6)
    })
    it('return correct answer',()=>{
        expect(GCD(56,98)).toBe(14)
    })
    it('return correct answer',()=>{
        expect(GCD(105,252)).toBe(21)
    })
    it('return correct answer',()=>{
        expect(GCD(-105,252)).toBe(21)
        expect(GCD(5,-25)).toBe(5)
    })
    it('return false if a value is zero',()=>{
        expect(GCD(0,252)).toBe(false)
        expect(GCD(10,0)).toBe(false)
    })
})