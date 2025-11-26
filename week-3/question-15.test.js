
    // Author: Sakina Ebrahimi
    // Description: Test Check for armstrong number: A number is armstrong if the sum of its digits raised to the power of the number of digits equals the number itself
    //input:153
    //output: true
    //input: 123
    //output: false

const armstrongNumber = require('./question-15')

describe('Test Factorial function',()=>{
    it('return correct answer',()=>{
        expect(armstrongNumber(153)).toBe(true)
        expect(armstrongNumber(370)).toBe(true)
        expect(armstrongNumber(371)).toBe(true)
        expect(armstrongNumber(1)).toBe(true)
        expect(armstrongNumber(407)).toBe(true)
        expect(armstrongNumber(1634)).toBe(true)
        expect(armstrongNumber(9474)).toBe(true)

    })

    it('return false ',()=>{
        expect(armstrongNumber(121)).toBe(false)
        expect(armstrongNumber(154)).toBe(false)
        expect(armstrongNumber(790)).toBe(false)
        expect(armstrongNumber(1234)).toBe(false)

    })
    it('return an error for invalid input ',()=>{
        expect(()=>armstrongNumber(null)).toThrow()
        expect(()=>armstrongNumber(undefined)).toThrow()
        expect(()=>armstrongNumber('153')).toThrow()
        expect(()=>armstrongNumber()).toThrow()

    })
})