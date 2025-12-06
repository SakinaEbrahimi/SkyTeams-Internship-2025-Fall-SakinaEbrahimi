
    // Author: Sakina Ebrahimi
    // Description: Test Generate all print numbers up to N: list all prime numbers up to a given limit using a loop
    //input: 10
   //output: 2,3,5,7

const listPrime = require('./question-11')

describe('Test list prime function',()=>{
    let expect_value = [
        [ 2, 3, 5, 7 ],
        [ 2, 3, 5 ],
        [ 2, 3, 5 ],
        [ 2, 3, 5, 7, 11, 13 ]
    ]

    let input_value = [10,6,5,15]

    for(let i = 0 ; i<expect_value.length; i++){
        it('return correct answer',()=>{
            expect(listPrime(input_value[i])).toEqual(expect_value[i])
        })
    }

    let invalid_input = [null, undefined, 0,-10,'15']
    for(let i = 0 ; i<invalid_input.length; i++){
        it('return an error for invalid input',()=>{
            expect(()=>listPrime(invalid_input[i])).toThrow()
        })
    }
    
})