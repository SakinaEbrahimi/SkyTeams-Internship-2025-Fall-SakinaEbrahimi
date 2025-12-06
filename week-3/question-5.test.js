
    // Author: Sakina Ebrahimi
    // Description:Test function largest element in array
    // input: [2,8,5,3,9]
    // output:9

const { default: expect } = require('expect')
const largestElement = require('./question-5')

describe('Test largest number function',()=>{

    let expect_value = [9,12,100,10,-3]
    let input_value = [
        [2,8,5,3,9],
        [1,2,3,4,12,11],
        [1,0,10,100,20,99],
        [0,-3,-19,10],
        [-4,-10,-3]
    ]
    for(let i = 0 ; i<expect_value.length; i++){
        it('return correct answer',()=>{
            expect(largestElement(input_value[i])).toBe(expect_value[i])
        })
    }


    let invalid_input = [ 
        null , 
        undefined ,
        [1,2,'3'], 
        [1,'hello',10], 
        (1,2,3) 
    ]
    for(let i = 0 ; i<invalid_input.length; i++){
        it('return an error for invalid input',()=>{
            expect(()=>largestElement(invalid_input[i])).toThrow()
        })
    }

})