
    // Author: Sakinah Ebrahimi
    // Description: Test for Count vowels in a string: count the number of vowels (a,i,o,u,e)in a given string:
    // input: SkyTeams Intership
    // output:5

const { default: expect } = require('expect')
const countVowels = require('./question-1')

describe('Test function count vowels',()=>{
    it('return correct answer',()=>{
        expect(countVowels('SkysTeams Internship')).toBe(5)
        expect(countVowels('HELLO')).toBe(2)
        expect(countVowels('Good DAY')).toBe(3)
        expect(countVowels('GOOD evening')).toBe(5)
        expect(countVowels('AiOue')).toBe(5)
    })
    it('return zero when input value is empty',()=>{
        expect(countVowels('')).toBe(0)
    })
    it('return an error when input value null or undefined', ()=>{
        expect(()=>countVowels()).toThrow()
        expect(()=>countVowels(undefined)).toThrow()
        
    })
    it('return an error for number input',()=>{
        expect(()=>countVowels(12345)).toThrow()
        expect(()=>countVowels(0)).toThrow()
    })
})