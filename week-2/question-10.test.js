
    //Author: Sakina Ebrahimi

    //Description: Test Leap Year Checker.

const { default: expect } = require('expect')
const isLeapYear = require('./question-10')

describe('Test Leap Year Function',()=>{
    it('return true when year is divisibly by 4',()=>{
        expect(isLeapYear(2024)).toBe(true)
        expect(isLeapYear(2028)).toBe(true)
        expect(isLeapYear(2032)).toBe(true)
    })
    it('return true when year is divisibly by 4, 400',()=>{
        expect(isLeapYear(1600)).toBe(true)
        expect(isLeapYear(2000)).toBe(true)
        expect(isLeapYear(2400)).toBe(true)
        expect(isLeapYear(2800)).toBe(true)
    })
    it('return false when year divisibly by 100 and indivisible by 400 ',()=>{
        expect(isLeapYear(1900)).toBe(false)
        expect(isLeapYear(2100)).toBe(false)
        expect(isLeapYear(1800)).toBe(false)
    })
})
