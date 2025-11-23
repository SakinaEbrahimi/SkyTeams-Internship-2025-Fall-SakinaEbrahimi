  // Author: Sakina Ebrahimi
    //Description: Test Number Sequently function

const { default: expect } = require('expect')
const numberSequently = require('./question-16')

describe('Test Number Sequently function',()=>{
    it('return false if start greater than end',()=>{
        expect(numberSequently(10,1)).toBe(false)
        expect(numberSequently(-4,-10)).toBe(false)
        expect(numberSequently(0,-10)).toBe(false)
        expect(numberSequently(100,1)).toBe(false)
    })
    it('return correct answer',()=>{
        expect(numberSequently(1,10)).toBe(true)
        expect(numberSequently(1,100)).toBe(true)
        expect(numberSequently(0,5)).toBe(true)
        expect(numberSequently(-10,10)).toBe(true)
        expect(numberSequently(-4,0)).toBe(true)
    })
    it('return false when start or end is string',()=>{
        expect(numberSequently('1',10)).toBe(false)
        expect(numberSequently('one','ten')).toBe(false)
        expect(numberSequently('1','10')).toBe(false)
        expect(numberSequently(1,'100')).toBe(false)
        expect(numberSequently('one',100)).toBe(false)
    })
})
