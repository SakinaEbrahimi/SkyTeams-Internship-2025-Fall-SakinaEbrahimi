  
    // Author: SakinaEbrahimi
    // Description: Top k frequent elements
    // input: [1,1,1,2,2,3] k=2
    //output: [1,2]

const topFrequent  = require('./question-23')

describe('Test top frequent function ',()=>{   
    it('return correct answer',()=>{
        expect(topFrequent([1,1,1,2,2,3],2)).toEqual([1,2])
        expect(topFrequent([1,1,1,2,2,3],1)).toEqual([1])
        expect(topFrequent([1,1,1,2,3,2,3,3,3,3,3,5,6],3)).toEqual([ 3, 1, 2 ])
        expect(topFrequent([0,0,0,2,1],1)).toEqual([0])
    })
    it('return an error for invalid input',()=>{
        expect(()=>topFrequent([1,1,1,2,2,3],'2')).toThrow()
        expect(()=>topFrequent(null ,1)).toThrow()
        expect(()=>topFrequent( [1,1,1,2,2,3],null)).toThrow()
        expect(()=>topFrequent( [1,1,1,2,2,3],undefined)).toThrow()
        expect(()=>topFrequent( undefined,undefined)).toThrow()
        expect(()=>topFrequent('hello',3)).toThrow()
        expect(()=>topFrequent([0,0,0,2,1], )).toThrow()
    })
    
})
