
     // Author: SakinaEbrahimi
    // Description: Intersection of two array: return elements present in both array
    //input: [1,2,3,4] [3,4,6,7]
    //output: [3,4]

const intersectionArray = require('./question-4')


describe('Test intersectionArray function',()=>{

    it('return correct answer',()=>{
        expect(intersectionArray([1,2,3,5,4],[5,4,2,1])).toEqual([ 1, 2, 5, 4 ])
        expect(intersectionArray([1,2,3,4],[3,4,6,7])).toEqual([3,4])
        expect(intersectionArray([1,2,3],[3,4,6,7])).toEqual([3])
        expect(intersectionArray([1,2,3],[4,1,7])).toEqual([1])
        expect(intersectionArray([1,2],[4,1,7,3,2])).toEqual([1,2])
    })
    
    

    it('return an error for invalid input',()=>{
        expect(()=> intersectionArray(null,[1,2]) ).toThrow()
        expect(()=> intersectionArray([3,5,6,7],undefined) ).toThrow()
        expect(()=> intersectionArray([1,2,'hello'],[1,2]) ).toThrow()
        expect(()=> intersectionArray([1,2,'3',4],null) ).toThrow()
        expect(()=> intersectionArray( ) ).toThrow()
    })
    
})
