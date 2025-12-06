
    // Author: Sakina Ebrahimi
    // Description: Test Check for palindrome number
    //input:121
    //output: palindrome


const isPalindrome = require('./question-12')

describe('Test palindrome function',()=>{
    it('return correct answer',()=>{
        expect( isPalindrome(121) ).toBe(true)
        expect( isPalindrome(1221) ).toBe(true)
        expect( isPalindrome(12321)).toBe(true)
        expect( isPalindrome(10101) ).toBe(true)
        expect( isPalindrome(1556551) ).toBe(true)
    })
    it('return false for un palindrome input',()=>{
        expect( isPalindrome(1213) ).toBe(false)
        expect( isPalindrome(12345) ).toBe(false)
        expect( isPalindrome(1000)).toBe(false)
        expect( isPalindrome(10) ).toBe(false)
    })
    it('return an error for invalid input',()=>{
        expect(()=> isPalindrome(null) ).toThrow()
        expect(()=> isPalindrome(undefined) ).toThrow()
        expect(()=> isPalindrome('121')).toThrow()
        expect(()=> isPalindrome(0) ).toThrow()
        expect(()=> isPalindrome('hello') ).toThrow()
    })
})