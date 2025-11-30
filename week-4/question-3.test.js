
    // Author: SakinaEbrahimi
    // Description: Rotate array k time to the right 
    //input: [1,2,3,4,5]k=2
    // output: [4,5,1,2,3]

const rotateArray = require('./question-3')

describe('Test rotate array function',()=>{
    it('return correct answer',()=>{
        expect(rotateArray([1,2,3,4,5],2)).toEqual([ 4, 5, 1, 2, 3 ])
        expect(rotateArray([1,2,3,4,5],3)).toEqual([ 3, 4, 5, 1, 2 ])
        expect(rotateArray([1,2,3,4,5],4)).toEqual([ 2, 3, 4, 5, 1 ])
        expect(rotateArray([1,2,3,4,5],5)).toEqual([ 1, 2, 3, 4, 5 ])
        expect(rotateArray([1,2,3,4,5],1)).toEqual([ 5, 1, 2, 3, 4 ])
    })

    it('return an error for invalid input',()=>{
        expect(()=> rotateArray([1,2,3],null)).toThrow()
        expect(()=> rotateArray(null,null)).toThrow()
        expect(()=> rotateArray(undefined,3)).toThrow()
        expect(()=> rotateArray([1,2,3],'3')).toThrow()
        expect(()=> rotateArray([1,'2',3],3)).toThrow()
        expect(()=> rotateArray(['1,2,3'],3)).toThrow()
    })
    
})