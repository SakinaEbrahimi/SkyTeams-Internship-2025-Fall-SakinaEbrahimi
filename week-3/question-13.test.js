
    // Author: Sakina Ebrahimi
    // Description: Test Power of a number
    //input:2,5
    //output: 32

const power = require('./question-13')

describe('Test power function',()=>{
    it('return correct answer',()=>{
        expect(power(2,5)).toBe(32)
        expect(power(2,4)).toBe(16)
        expect(power(5,2)).toBe(25)
        expect(power(4,2)).toBe(16)
        expect(power(2,0)).toBe(1)

    })

    it('return an error for invalid input',()=>{
        expect(()=> power(2,null)).toThrow()
        expect(()=> power(null,3)).toThrow()
        expect(()=> power('2',3)).toThrow()
        expect(()=> power(3,'2')).toThrow()
        expect(()=> power(5,undefined)).toThrow()
        expect(()=> power(undefined,3)).toThrow()
        expect(()=> power('3','5')).toThrow()
    })

})