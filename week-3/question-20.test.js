
    // Author: Sakinah Ebrahimi
    // Description: Test Body Mass Index (BMI) calculator
    //Given weight (kg) and heigh (m), calculate BMI using
    //BMI:weight/(heigh*heigh)
    //underweight:BMI<18.5
    //normal weight: 18.5 <= BMI <25
    //overweight: 25<=BMI<30
    //obese: BMI>=30
    //input:70, 1.75
    //output: BMI: 22.86(normal weight)

const bodyMassIndex = require('./question-20')

describe('Test BMI function',()=>{

    it('return correct answer',()=>{
        expect(bodyMassIndex(80,1.75)).toBe('26.12 overweight')    
        expect(bodyMassIndex(75,1.75)).toBe('24.48 normalweight')    
        expect(bodyMassIndex(30,1.75)).toBe('9.79 underweight')    
        expect(bodyMassIndex(300,2.75)).toBe('39.66 obese')    
    })   

    it('return an error for invalid input ',()=>{
        expect(()=> bodyMassIndex(null, 1.75)).toThrow()
        expect(()=> bodyMassIndex(40,undefined)).toThrow()
        expect(()=> bodyMassIndex('15', 12)).toThrow()
        expect(()=> bodyMassIndex()).toThrow()
        expect(()=> bodyMassIndex(0)).toThrow()

    })
})