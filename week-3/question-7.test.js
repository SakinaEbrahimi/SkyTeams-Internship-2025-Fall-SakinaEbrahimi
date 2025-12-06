
    // Author: Sakina Ebrahimi
    // Description: Test function sum element of array
    // input: Array=[1,2,3,4,5]
    // output:15

const { default: expect } = require('expect')
const sumElementArray = require('./question-7')

describe('Test sum element of array',()=>{

    let input_value = [
        [1,2,3,4,5],
        [1,2,3],
        [1,2,0],
        [1,10,-2]
    ]
    let expect_value = [15, 6, 3, 9]
    for(i in  input_value){
        it('return correct answer',()=>{
            expect(sumElementArray(input_value[i])).toBe(expect_value[i])
        })
    }

    it('return an error for invalid input',()=>{
        expect(()=>sumElementArray([1,2,'3'])).toThrow()
        expect(()=>sumElementArray([1,2,'hello'])).toThrow()
        expect(()=>sumElementArray()).toThrow()
        expect(()=>sumElementArray(null)).toThrow()
        expect(()=>sumElementArray(undefined)).toThrow()
    })
})
