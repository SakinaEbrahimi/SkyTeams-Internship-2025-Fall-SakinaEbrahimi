
    // Author: SakinaEbrahimi
    // Description:Merge two sorted array: merge two sorted array into a single sorted array
    //input : [1,3,5][2,4,6]

const mergeArrays = require('./question-2')

describe('Test merge function',()=>{
   
    it('return correct answer',()=>{
        expect(mergeArrays([1,3,5],[2,6,7])).toEqual([ 1, 2, 3, 5, 6, 7 ])
        expect(mergeArrays([1,3],[2,4,5])).toEqual([ 1, 2, 3, 4, 5 ])
        expect(mergeArrays([2,3],[1,4,5])).toEqual([ 1, 2, 3, 4, 5 ])
        expect(mergeArrays([4,7,9],[5,6,10])).toEqual([ 4, 5, 6, 7, 9, 10 ])
    })

    it('return an error for invalid input',()=>{
        expect(()=>mergeArrays(null,[1,2,3])).toThrow()
        expect(()=>mergeArrays([1,2,3],null)).toThrow()
        expect(()=>mergeArrays(undefined,[1,2,3])).toThrow()
        expect(()=>mergeArrays(null, undefined)).toThrow()
        expect(()=>mergeArrays(null,null)).toThrow()
    })

})