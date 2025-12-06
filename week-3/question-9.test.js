
    // Author: Sakina Ebrahimi
    // Description: Test occurrences of an element function
    //input:[2,2,3,2], element 2
    // output: 3
    
const { default: expect } = require('expect')
const occurrencesElement = require('./question-9')

describe('Test occurrences element function',()=>{
    it('return correct answer',()=>{
        expect(occurrencesElement([1,2,3,2],2)).toBe(2)
        expect(occurrencesElement([1,4,4,4,4],4)).toBe(4)
        expect(occurrencesElement([1,0,1,-1,1],1)).toBe(3)
        expect(occurrencesElement([0],0)).toBe(1)
        expect(occurrencesElement([1,2,3,4],5)).toBe(0)
    })
    it('return an error for invalid input',()=>{
        expect(()=>isElement([1,2,3],null)).toThrow()
        expect(()=>isElement([1,2,3,5,6],'3')).toThrow()
        expect(()=>isElement([1,2,3],undefined)).toThrow()
        expect(()=>isElement(null,3)).toThrow()
        expect(()=>isElement(undefined,2)).toThrow()
        expect(()=>isElement([1,2,'4'],4)).toThrow()
        expect(()=>isElement([1,2,'hello'],2)).toThrow()
    })
})