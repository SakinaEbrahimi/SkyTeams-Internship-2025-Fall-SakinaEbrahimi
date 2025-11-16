
    //Author: Sakina Ebrahimi
    //Description: test Grade Calculator(0-100 -> A-F).

const { default: expect } = require('expect')
const { describe } = require('jest-circus')
const gradeCalculator = require('./question-9')

describe('Test Grade Calculator',()=>{
    it('return A when marks is between (90-100)',()=>{
        expect(gradeCalculator(100)).toBe('A')
        expect(gradeCalculator(90)).toBe('A')
    })
    it('return B when marks is between (80-90)',()=>{
        expect(gradeCalculator(80)).toBe('B')
        expect(gradeCalculator(89.9)).toBe('B')
    })
    it('return C when marks is between (70-80)',()=>{
        expect(gradeCalculator(70)).toBe('C')
        expect(gradeCalculator(79.9)).toBe('C')
    })
    it('return D when marks is between (60-70)',()=>{
        expect(gradeCalculator(60)).toBe('D')
        expect(gradeCalculator(69)).toBe('D')
    })
    it('return E when marks is between (50-60)',()=>{
        expect(gradeCalculator(50)).toBe('E')
        expect(gradeCalculator(55)).toBe('E')
    })
    it('return F when marks is between (0-50)',()=>{
        expect(gradeCalculator(45)).toBe('F')
        expect(gradeCalculator(30)).toBe('F')
    })
    it('return an error when marks is less than zero',()=>{
        expect(()=>gradeCalculator(-60)).toThrow()
        expect(()=>gradeCalculator(-100)).toThrow()
    })
    it('return an error when marks is greater than 100',()=>{
        expect(()=>gradeCalculator(110)).toThrow()
        expect(()=>gradeCalculator(200)).toThrow()
    })
})
