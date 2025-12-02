  
    // Author: SakinaEbrahimi
    // Description: Kadane Algorithm(Max subarray sum)
    //input: [-2,1,-3,4,-1,2,1,-5,6]
    //output: 6

const kadaneAlgorithm = require('./question-15')

describe('Test Kadane Algorithm function',()=>{

    it('return correct answer',()=>{
        expect(kadaneAlgorithm([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)            
        expect(kadaneAlgorithm([4, -1, 2, 1, -5, 4])).toBe(6)            
        expect(kadaneAlgorithm([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7)            
        expect(kadaneAlgorithm([1, 2, 3, -2, 5])).toBe(9)            
    })

    it('return an error for invalid input',()=>{
        expect(()=>kadaneAlgorithm(null) ).toThrow()
        expect(()=>kadaneAlgorithm(undefined) ).toThrow()
        expect(()=>kadaneAlgorithm(123) ).toThrow()
        expect(()=>kadaneAlgorithm('hello')).toThrow()
        expect(()=>kadaneAlgorithm( )).toThrow()
        expect(()=>kadaneAlgorithm([1,2,'3'])).toThrow()
    })
    
})
