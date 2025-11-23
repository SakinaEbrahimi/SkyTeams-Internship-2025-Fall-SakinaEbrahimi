
    // Author: Sakina Ebrahimi
    //Description: Test Find LCM of two number: Compute least common multiple using the relationship: LCM(a,b)=(a*b)/GCD(a,b)
    //Example: 
    //input:12,18
    //output: 36

const LCM = require('./question-25')

describe('Test LCM (Least common Mulriple) function', ()=>{
    it('return correct answer',()=>{
        expect(LCM(12,18)).toBe(36)
    })
    it('return correct answer',()=>{
        expect(LCM(2,6)).toBe(6)
    })
    it('return correct answer',()=>{
        expect(LCM(10,5)).toBe(10)
    })
    it('return correct answer',()=>{
        expect(LCM(-3,15)).toBe(15)
    })
    it('return false when input value is zero', ()=>{
        expect(LCM(0,12)).toBe(false)
        expect(LCM(12,0)).toBe(false)
    })
    it('return false when input values not a number',()=>{
        expect(LCM('1',10)).toBe(false)
        expect(LCM(4,'10')).toBe(false)
        expect(LCM('1','10')).toBe(false)
        expect(LCM('one','10')).toBe(false)
    })
})