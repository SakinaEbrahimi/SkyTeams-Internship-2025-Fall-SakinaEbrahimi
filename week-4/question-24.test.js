   
    // Author: SakinaEbrahimi
    // Description: k-th largest element :
    // Given an array of numbers and a value k, find the number that would be appear in the k-th position it the array were sortedin descending 

const kthLargestElement  = require('./question-24')

describe('Test k-th largest element function ',()=>{   
    it('return correct answer',()=>{
        expect(kthLargestElement([13, 7, 5, 12, 11, 20, 4, 8],4)).toBe(11)
        expect(kthLargestElement([12,1,3,2,4,6,200],3)).toBe(6)
        expect(kthLargestElement([-1,3,-9,3,5],2)).toBe(3)
        expect(kthLargestElement([-1,3,-9,3,5],4)).toBe(-1)
        expect(kthLargestElement([-1,3,-9,3,5],1)).toBe(5)
    })
    it('return an error for invalid input',()=>{
        expect(()=>kthLargestElement([1,1,1,2,2,3],'2')).toThrow()
        expect(()=>kthLargestElement(null ,1)).toThrow()
        expect(()=>kthLargestElement( [1,1,1,2,2,3],null)).toThrow()
        expect(()=>kthLargestElement( [1,1,1,2,2,3],undefined)).toThrow()
        expect(()=>kthLargestElement( undefined,undefined)).toThrow()
        expect(()=>kthLargestElement('hello',3)).toThrow()
        expect(()=>kthLargestElement([0,0,0,2,1], )).toThrow()
    })
    
})
