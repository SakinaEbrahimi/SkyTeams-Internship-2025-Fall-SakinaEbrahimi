
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

const BMI = require('./question-20')

describe('Test BMI function',()=>{

    it('return correct answer',()=>{
        expect(BMI(80,1.75)).toBe('26.12 overweight')    
        expect(BMI(75,1.75)).toBe('24.48 normalweight')    
        expect(BMI(30,1.75)).toBe('9.79 underweight')    
        expect(BMI(300,2.75)).toBe('39.66 obese')    
    })   

    it('return an error for invalid input ',()=>{
        expect(()=> BMI(null, 1.75)).toThrow()
        expect(()=> BMI(40,undefined)).toThrow()
        expect(()=> BMI('15', 12)).toThrow()
        expect(()=> BMI()).toThrow()
        expect(()=> BMI(0)).toThrow()

    })
})