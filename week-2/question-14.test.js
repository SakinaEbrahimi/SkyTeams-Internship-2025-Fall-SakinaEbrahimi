
    // Author: Sakina Ebrahimi
    //Description: Check character type
    //Example: 
    //input:a
    //output: vowel


const checkCharacter = require('./question-14')
const { default: expect } = require('expect')



describe('Test check character function',()=>{
    it('return correct answer',()=>{
        expect(checkCharacter('a')).toBe('vowel')
        expect(checkCharacter('i')).toBe('vowel')
        expect(checkCharacter('b')).toBe('consonant')
        expect(checkCharacter(12)).toBe('digit')
        expect(checkCharacter(-2)).toBe('digit')
        expect(checkCharacter('@')).toBe('special character')
        expect(checkCharacter('!')).toBe('special character')
    })
    it('return false when input isnot a character',()=>{
        expect(checkCharacter('hello')).toBe(false)
        expect(checkCharacter('aioue')).toBe(false)
        expect(checkCharacter('yes')).toBe(false)
        expect(checkCharacter('@$%')).toBe(false)
    })
})