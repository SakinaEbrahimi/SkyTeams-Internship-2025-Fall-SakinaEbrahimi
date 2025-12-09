
    // Author: SakinaEbrahimi
    // Description: Check Balance Parenthese
    //input: '{[()]} output: true

const isBalance = require('./question-20')

describe('Test Check Balance Parenthese',()=>{
    it('return correct answer',()=>{
        expect(isBalance('{[()]}')).toBe(true)
        expect(isBalance('{()}')).toBe(true)
        expect(isBalance('[()]')).toBe(true)
        expect(isBalance('{[]}')).toBe(true)
        expect(isBalance('()')).toBe(true)
    })
    it('return false answer',()=>{
        expect(isBalance('{[()]')).toBe(false)
        expect(isBalance('{(}')).toBe(false)
        expect(isBalance('{()]')).toBe(false)
        expect(isBalance('{[}')).toBe(false)
        expect(isBalance('(}')).toBe(false)
    })
    it('return an error',()=>{
        expect(()=>isBalance()).toThrow()
        expect(()=>isBalance(null)).toThrow()
        expect(()=>isBalance(undefined)).toThrow()
        expect(()=>isBalance([])).toThrow()
        expect(()=>isBalance(123)).toThrow()
    })
})