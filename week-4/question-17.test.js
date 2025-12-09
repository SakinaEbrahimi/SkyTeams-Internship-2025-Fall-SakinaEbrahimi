  
    // Author: SakinaEbrahimi
    // Description: Sentence abbreviation
    //input: I am learning javascript
    //output: I a l j

const abbreviation = require('./question-17')

describe('Test abbreviation function',()=>{
    
    it('return correct answer',()=>{
        expect(abbreviation('I am learning Javascript')).toBe('I a l J ')
        expect(abbreviation('Hello world')).toBe('H w ')
        expect(abbreviation('how are you ?')).toBe('h a y ? ')
        expect(abbreviation('lets learn')).toBe('l l ')        
    })

    it('return an error for invalid input',()=>{
        expect(()=> abbreviation(null) ).toThrow()
        expect(()=> abbreviation(undefined) ).toThrow()
        expect(()=>abbreviation(123) ).toThrow()
        expect(()=>abbreviation([1,2,'3',4])).toThrow()
        expect(()=>abbreviation( )).toThrow()
        expect(()=>abbreviation(['hello'])).toThrow()
        expect(()=>abbreviation([1,2,3])).toThrow()
    })
    
})
