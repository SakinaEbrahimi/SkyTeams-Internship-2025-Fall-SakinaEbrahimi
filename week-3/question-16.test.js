
    // Author: Sakina Ebrahimi
    // Description: Test Fibonacci sequence
    //input:7
    //output: 0,1,1,2,3,5,8

const Fibonacci = require('./question-16')

describe('Test Factorial function',()=>{

    let input_value = [ 7, 5,10,15 ]
    let expect_value =[
        [0, 1, 1, 2,3, 5, 8 ],
        [ 0, 1, 1, 2, 3 ],
        [0, 1,  1,  2,  3,5, 8, 13, 21, 34],
        [0,   1,   1,  2,  3,  5,8,  13,  21, 34, 55, 89,144, 233, 377]
    ]
    for(let i = 0 ; i<input_value.length; i++){
        it('return correct answer',()=>{
            expect(Fibonacci(input_value[i])).toEqual(expect_value[i])    
        })
    }
    

    it('return an error for invalid input ',()=>{
        expect(()=>Fibonacci(null)).toThrow()
        expect(()=>Fibonacci(undefined)).toThrow()
        expect(()=>Fibonacci('15')).toThrow()
        expect(()=>Fibonacci()).toThrow()
        expect(()=>Fibonacci(0)).toThrow()

    })
})
