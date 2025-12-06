
    // Author: Sakina Ebrahimi
    // Description: Test Find Factorial of a number
    //input:5
    //output: 120

const factorial = require('./question-14')

describe('Test Factorial function',()=>{
    it('return correct answer',()=>{
        expect(factorial(5)).toBe(120)
        expect(factorial(2)).toBe(2)
        expect(factorial(3)).toBe(6)
        expect(factorial(1)).toBe(1)
        expect(factorial(4)).toBe(24)

    })

    it('return an error for invalid input',()=>{
        expect(()=> factorial(null)).toThrow()
        expect(()=> factorial(undefined)).toThrow()
        expect(()=> factorial('4')).toThrow()
        expect(()=> factorial('!@@#')).toThrow()
        expect(()=> factorial( )).toThrow()

    })
})