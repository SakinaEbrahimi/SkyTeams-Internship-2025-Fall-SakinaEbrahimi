
    // Author: Sakina Ebrahimi
    // Description: Test smallest element in array
    // input: [2,8,5,3,9]
    // output:2

const { default: expect } = require('expect')
const smallestElement = require('./question-6')

describe('Test smallest element function',()=>{

    let input_value = [
        [1,2,3,-1],
        [100,90,50,45],
        [200,100,50,101],
        [-1,-2,-100,0],
        [10,-20,-10]
    ]
    let expect_value = [-1, 45, 50, -100, -20]
    for(let i = 0; i<expect_value.length; i++){
        it('return correct answer',()=>{
            expect(smallestElement(input_value[i])).toBe(expect_value[i])
        })
    }


    let invalid_input = [
        null,
        undefined,
        [1,2,'-1'],
        [1,2,3,'Hello'],
        (1,2,3),
        (1,2,'3')
    ]
    for(i in invalid_input){
        it('return an error for invalid input',()=>{
            expect(()=>smallestElement(invalid_input[i])).toThrow()
        })
    }
})