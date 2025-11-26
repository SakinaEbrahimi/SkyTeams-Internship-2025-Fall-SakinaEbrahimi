
    // Author: Sakinah Ebrahimi
    // Description: Test Callculate factorial number using recursion 
    //input:5
    //output: 120

    
    //Author: Sakina Ebrahimi
    //Description: Test Collatz sequence(Hailstone number)
    //take a number n: if n is even , divide it by 2
    // if n is odd, multiply it by 3 and add 1
    //repeate until n=1
    //input:6
    //output: 6_3_10_5_16__4_2_1

const factorial = require('./question-23')

describe('Test Colltaz number function',()=>{

    it('return correct answer',()=>{
        expect( factorial(5)).toBe(120) 
        expect( factorial(4)).toBe(24) 
        expect( factorial(3)).toBe(6) 
        expect( factorial(2)).toBe(2) 
            
    })        

    it('return an error for invalid input ',()=>{
        expect(()=>factorial(null)).toThrow()
        expect(()=>factorial(0)).toThrow()
        expect(()=>factorial(undefined)).toThrow()
        expect(()=>factorial('6')).toThrow()

    })
})