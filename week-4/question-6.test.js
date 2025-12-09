  
    // Author: SakinaEbrahimi
    // Description: Binary search algorithm: implement binary search in sorted array
    //input: [1,3,4,7], target7
    //output: index 3

const  binarySearch = require('./question-6')

describe('Test binary search function',()=>{
    
    it('return correct answer',()=>{
        expect( binarySearch([1,2,3,4,5,6,7], 7)).toBe(6)
        expect( binarySearch([1,2,3,4,5,6,7], 3)).toBe(2)
        expect( binarySearch([1,2,3,4,5,6,7], 4)).toBe(3)
        expect( binarySearch([1,2,3,4,5,6,7], 5)).toBe(4)
        
    })

    it('return an error for invalid input',()=>{
        expect( binarySearch([1,2,3,4,5,6,7], 9)).toBe('not found')

        expect(()=> binarySearch(null,4) ).toThrow()
        expect(()=> binarySearch([1,2,3],undefined) ).toThrow()
        expect(()=> binarySearch(123, 3)).toThrow()
        expect(()=> binarySearch([1,2,3,4,5],'5')).toThrow()
        expect(()=> binarySearch( )).toThrow()
        expect(()=> binarySearch('hello')).toThrow()
        expect(()=> binarySearch([1,2,3],'hello')).toThrow()
    })
    
})
