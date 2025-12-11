
    //Author: Sakina Ebrahimi
    // Valid Parenthese
    //Problem: Given a string containing only '{','}','[',']', '(','). determine if the string is valid 
    //A valid string must have bracket closed in the correct order.
    //input: '()[]{}'
    //output: true
    //input: '(}'
    // output: false

const isValidParenthese = require('./question-1')

describe('Test Valid Parenthese',()=>{
    it('return correct answer',()=>{
        expect(isValidParenthese('(){}')).toBe(true)
        expect(isValidParenthese('{([])()}')).toBe(true)
        expect(isValidParenthese('(([]){})')).toBe(true)
        expect(isValidParenthese('([{}])')).toBe(true)
        expect(isValidParenthese('({[()]})')).toBe(true)
        expect(isValidParenthese('(){}[]')).toBe(true)
        expect(isValidParenthese('{([])()}')).toBe(true)
        expect(isValidParenthese('({[()]})')).toBe(true)
        expect(isValidParenthese('[]')).toBe(true)
        expect(isValidParenthese('([]{})')).toBe(true)
        
    })

    it('return false',()=>{
        expect(isValidParenthese('{]')).toBe(false)
        expect(isValidParenthese('([)]')).toBe(false)
        expect(isValidParenthese('(()')).toBe(false)
        expect(isValidParenthese('([{})]')).toBe(false)
        expect(isValidParenthese('{{[[(())]]}})')).toBe(false)
        expect(isValidParenthese('{)')).toBe(false)
        expect(isValidParenthese('({}')).toBe(false)
        expect(isValidParenthese('(){}[')).toBe(false)
        expect(isValidParenthese('[]()}')).toBe(false)
        expect(isValidParenthese('{}[])')).toBe(false)
    })
    it('return an error',()=>{
        expect(()=> isValidParenthese()).toThrow()
        expect(()=> isValidParenthese(null)).toThrow()
        expect(()=> isValidParenthese(undefined)).toThrow()
        expect(()=> isValidParenthese([])).toThrow()
        expect(()=> isValidParenthese(123)).toThrow()
    })
})