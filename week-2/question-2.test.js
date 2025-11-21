
    // Author: Sakina Ebrahimi
    //Description: Test for Function largest and smallest three number

const { largestNumber, smallestNumber } = require('./question-2')

describe('Test largest Number Function',()=>{
    it('return first variable when it is largest',()=>{
        expect(largestNumber(100,90,77)).toBe(100)
    })
    it('return secound variable when it is largest', ()=>{
        expect(largestNumber(90,100,77)).toBe(100)
    })
    it('return third variable when it is largest', ()=>{
        expect(largestNumber(90,77,100)).toBe(100)
    })
    it('return largest variable when variable is negative',()=>{
        expect(largestNumber(-100,-90,-77)).toBe(-77)
    })
    it('return first variable when every three variable are equal same number',()=>{
        expect(largestNumber(3,3,3)).toBe(3)
    })
})

describe('Test smallest number function',()=>{
    it('return first variable when it is smallest', ()=>{
        expect(smallestNumber(40,50,60)).toBe(40)
    })
    it('return secound variable when it is smallest',()=>{
        expect(smallestNumber(50,40,200)).toBe(40)
    })
    it('return third variable when it is smallest', ()=>{
        expect(smallestNumber(100,80,40)).toBe(40)
    })
    it('return smallest number between negative numbers', ()=>{
        expect(smallestNumber(-100,-40,-20)).toBe(-100)
    })
})