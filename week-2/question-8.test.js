
    // Author: Sakina Ebrahimi
    //Description: Test if a number is positive, negative, or zero

const numberStatus = require('./question-8')

describe('NumberStatus',()=>{
    it('return Positive when number is greater than zero',()=>{
        expect(numberStatus(12)).toBe('Positive')
        expect(numberStatus(100)).toBe('Positive')
        expect(numberStatus(10)).toBe('Positive')
        expect(numberStatus(72.5)).toBe('Positive')
    })
    it('return Negative when number is less than zero',()=>{
        expect(numberStatus(-1)).toBe('Negative')
        expect(numberStatus(-100)).toBe('Negative')
        expect(numberStatus(-3.5)).toBe('Negative')
        expect(numberStatus(-55.55)).toBe('Negative')
    })
    it('return zero when number is equal zero', ()=>{
        expect(numberStatus(0)).toBe('Zero')
    })
    
})