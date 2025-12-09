    
    // Author: SakinaEbrahimi
    // Description: Longest Palindromic substring
    //input: babad => bab or aba

const longestPalindrom = require('./question-21')

describe('Test Longest Palindromic function',()=>{
    it('return correct answer',()=>{
        expect(longestPalindrom('1232')).toBe('232')
        expect(longestPalindrom('babad')).toBe('aba')
        expect(longestPalindrom('acabac')).toBe('cabac')
        expect(longestPalindrom('caca')).toBe('aca')
        expect(longestPalindrom('324542')).toBe('24542')
    })

    it('return an error',()=>{
        expect(()=>longestPalindrom(null)).toThrow()
        expect(()=>longestPalindrom(undefined)).toThrow()
        expect(()=>longestPalindrom(12321)).toThrow()
        expect(()=>longestPalindrom([])).toThrow()
    })
})