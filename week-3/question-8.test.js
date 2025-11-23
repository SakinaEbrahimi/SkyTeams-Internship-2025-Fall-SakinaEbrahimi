
    // Author: Sakina Ebrahimi
    // Description: Test isElement function
    // input: Array=[2,8,5,3,9], element = 8
    // output:true

const { default: expect } = require('expect')
const isElement = require('./question-8')

describe('Test isElement in array function',()=>{
    
    it('return correct answer',()=>{
        expect(isElement([1,2,3],3)).toBe(true)
        expect(isElement([3,6,9,12],6)).toBe(true)
        expect(isElement([0,6,9,12],0)).toBe(true)
        expect(isElement([0,-1],-1)).toBe(true)
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
