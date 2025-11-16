
    // Author: Sakina Ebrahimi
    //Description: Test Check whether a number is odd or even

const isEven = require('./question-7')

describe('Event and Odd', ()=>{
    it('return true if number is even ',()=>{
        expect(isEven(12)).toBe(true)
        expect(isEven(24)).toBe(true)
        expect(isEven(-100)).toBe(true)
        expect(isEven(0)).toBe(true)
    })
    it('return false if number is not even', ()=>{
        expect(isEven(13)).toBe(false)
        expect(isEven(15)).toBe(false)
        expect(isEven(55)).toBe(false)
        expect(isEven(79)).toBe(false)
        expect(isEven(-33)).toBe(false)
    })
})