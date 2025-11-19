
    // Author: Sakina Ebrahimi
    //Description: Test Print even numbers in a range
    //Example: 1,10
    //output: 2,4,6,8,10
    
const findEven = require('./question-22')

describe('Test find Even function', ()=>{
    it('return correct answer',()=>{
        expect(findEven(1,10)).toEqual([2,4,6,8,10])
        expect(findEven(5,6)).toEqual([6])
        expect(findEven(-4,6)).toEqual([-4,-2,0,2,4,6])
        expect(findEven(12,20)).toEqual([12,14,16,18,20])
    })
    it('return false if start number greater than end number',()=>{
        expect(findEven(10,0)).toBe(false)
        expect(findEven(-1,-10)).toBe(false)
        expect(findEven(5,-3)).toBe(false)
        expect(findEven(20,10)).toBe(false)
        expect(findEven(10,-10)).toBe(false)
    })
    it('return false when strat or end number missed',()=>{
        expect(findEven(10)).toBe(false)
        expect(findEven(0)).toBe(false)
        expect(findEven(-1)).toBe(false)
        expect(findEven('')).toBe(false)
    })
    it('return false when input invalid type of number like string',()=>{
        expect(findEven('1','10')).toBe(false)
        expect(findEven(1,'10')).toBe(false)
        expect(findEven('1',5)).toBe(false)
        expect(findEven('one','10')).toBe(false)
        expect(findEven('two','nine')).toBe(false)
        expect(findEven(1,'ten')).toBe(false)
    })
})