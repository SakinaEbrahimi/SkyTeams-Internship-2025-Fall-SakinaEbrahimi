  
    // Author: SakinaEbrahimi
    // Description: Merge overlapping intervals
    //input: [[1,3],[2,6],[8,10]]
    //output: [[1,6],[8,10]]

const intervalOverlap = require('./question-22')

describe('Test Merge overlapping intervals function ',()=>{   
    it('return correct answer',()=>{
        expect(intervalOverlap([[1,3], [2,4], [5,7], [6,8]])).toEqual([[1,4], [5,8]])
        expect(intervalOverlap([[1,5], [2,3], [4,6]])).toEqual([[1,6]])
        expect(intervalOverlap([[1,2], [3,4], [5,6]])).toEqual([[1,2], [3,4], [5,6]])
        expect(intervalOverlap([[1,10], [2,5], [6,8], [11,15]])).toEqual([[1,10], [11,15]])
    })
    it('return an error for invalid input',()=>{
        expect(()=>intervalOverlap('2')).toThrow()
        expect(()=>intervalOverlap(null )).toThrow()
        expect(()=>intervalOverlap(null)).toThrow()
        expect(()=>intervalOverlap(undefined)).toThrow()
        expect(()=>intervalOverlap('hello')).toThrow()
        
    })
    
})
