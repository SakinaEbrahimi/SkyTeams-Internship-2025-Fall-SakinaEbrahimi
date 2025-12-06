
    // Author: Sakina Ebrahimi
    // Description: Test Display all factors of a number: print all numbers that divide the given number exactly
    // input: 12
    // output:1,2,4,3,6,12

const { default: expect } = require('expect')
const factorsNumber = require('./question-4')

describe('Test Factors number',()=>{
    let expect_value = [
        [ 1, 5 ],
        [ 1, 2, 3, 4, 6, 12 ],
        [ 1, 2, 3, 6 ],
        [ 1, 2, 5, 10 ],
    ]
    let input_value = [5,12,6,10]

    for(let i = 0 ; i<expect_value.length; i++){
        it('return correct answer',()=>{
            expect(factorsNumber(input_value[i])).toEqual(expect_value[i])
        })
    }


    let invalid_input = [' ', '12', 'one', undefined, null, '@#$', ]

    for(i in invalid_input){
        it('return an error for invalid input',()=>{
            expect(()=>factorsNumber(input_value[i])).toThrow()
        })
    }
    
    
})