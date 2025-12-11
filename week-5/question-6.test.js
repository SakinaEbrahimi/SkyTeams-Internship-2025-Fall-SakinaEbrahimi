
    //Author: Sakina Ebrahimi
    //Remove Adjacent Duplicates
    //Given a string s, repeatedly remove adjacent pairs of equal characters
    //input: abbaca
    //output: ca

const removeDuplicates = require('./question-6')

describe('Test Remove Adjacent Duplicates',()=>{
    it('return correct answer',()=>{
        expect(removeDuplicates('abbaca')).toEqual(['c','a'])
        expect(removeDuplicates('abbacaa')).toEqual(['c'])
        expect(removeDuplicates('abbacab')).toEqual(['c','a','b'])
        expect(removeDuplicates('hello')).toEqual(['h','e','o'])
    })
    it('return an error',()=>{
        expect(()=> removeDuplicates()).toThrow()
        expect(()=> removeDuplicates(null)).toThrow()
        expect(()=> removeDuplicates(undefined)).toThrow()
        expect(()=> removeDuplicates([])).toThrow()
        expect(()=> removeDuplicates(123)).toThrow()
    })
})