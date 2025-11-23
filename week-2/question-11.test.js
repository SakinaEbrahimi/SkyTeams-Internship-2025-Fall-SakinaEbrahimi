
    // Author: Sakina Ebrahimi
    //Description: Test calculator

const { default: expect } = require('expect')
const calculator = require('./question-11')

describe('Test calculator function',()=>{
    it('should return correct answer',()=>{
        expect(calculator(12,12,'+')).toBe(24)
        expect(calculator(3,4, '+')).toBe(7)
        expect(calculator(-3,12,'+')).toBe(9)
        expect(calculator(-3,-4,'+')).toBe(-7)
        expect(calculator(12,12,'-')).toBe(0)
        expect(calculator(12,-12,'-')).toBe(24)
        expect(calculator(-12,-12,'-')).toBe(0)
        expect(calculator(3,4,'*')).toBe(12)
        expect(calculator(3,0,'*')).toBe(0)
        expect(calculator(-3,12,'*')).toBe(-36)
        expect(calculator(12,12,'/')).toBe(1)
        expect(calculator(-12,4,'/')).toBe(-3)
        expect(calculator(0,4,'/')).toBe(0)
    })
    it('return false when a input value is zero for division operator',()=>{
        expect(calculator(12,0,'/')).toBe(false)
    })
    it('should return invalid for invalid operator or wrong sequence',()=>{
        expect(calculator(12,12,'sum')).toBe(false)
        expect(calculator(3,'+' ,4)).toBe(false)
        expect(calculator(3,4,' ')).toBe(false)
        expect(calculator('-',3,12)).toBe(false)
        expect(calculator(12,'/',12)).toBe(false)
        expect(calculator(12,12,12)).toBe(false)
        expect(calculator(12,'+','k')).toBe(false)
    })
})
