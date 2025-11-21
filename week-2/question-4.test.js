
    // Author: Sakina Ebrahimi
    //Description: Test Temperature converter 

const {fahrenhietToCelsius , celsiusToFahrenhiet } = require('./question-4')

describe('Test Fahrenhite to Celsius',()=>{
    it('return 10 celsius for 50 fahrenhiet', ()=>{
        expect(fahrenhietToCelsius(50)).toBe(10)
    })
    it('return 30 celsius for 86 fahrenhiet',()=>{
        expect(fahrenhietToCelsius(86)).toBe(30)
    })
    it('return -17.7 celsius for 0 fahrenhiet', ()=>{
        expect(fahrenhietToCelsius(0)).toBe(-17.7)
    })
    it('return -10 celsius for 14 fahrenhiet',()=>{
        expect(fahrenhietToCelsius(14)).toBe(-10)
    })
})

describe('Celsius to Fahrenhiet', ()=>{
    it('return 32 fahrenhiet for 0 celsius', ()=>{
        expect(celsiusToFahrenhiet(0)).toBe(32)
    })
    it('return 77 fahrenhiet for 25 celsius',()=>{
        expect(celsiusToFahrenhiet(25)).toBe(77)
    })
    it('return -40 fahrenhiet for -40 celsius', ()=>{
        expect(celsiusToFahrenhiet(-40)).toBe(-40)
    })
    it('return 14 fahrenhiet for -10 celsius',()=>{
        expect(celsiusToFahrenhiet(-10)).toBe(14)
    })
})
