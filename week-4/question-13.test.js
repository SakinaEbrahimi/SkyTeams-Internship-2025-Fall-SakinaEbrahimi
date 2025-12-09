  
    // Author: SakinaEbrahimi
    // Description: String pattern matching
    //dog cat cat dog => true

const isPatternMatch = require('./question-13')

describe('Test String pattern matching function',()=>{
    let input_value = [
        "apple orange orange apple",
        "dog cat cat dog",
        "hello world world hello"
    ]
    for(let i=0; i<input_value.length; i++){
        it('return true ',()=>{
            expect(isPatternMatch(input_value[i])).toBe(true)            
        })
    }
    let input_false = [
        "apple orange orange ",
        "dog cat cat ",
        " world world hello"
    ]
    for(let i=0; i<input_value.length; i++){
        it('return false ',()=>{
            expect(isPatternMatch(input_false[i])).toBe(false)            
        })
    }
    it('return an error for invalid input',()=>{
        expect(()=> isPatternMatch(null) ).toThrow()
        expect(()=> isPatternMatch(undefined) ).toThrow()
        expect(()=> isPatternMatch(123)).toThrow()
        expect(()=> isPatternMatch([1,2,'3',4])).toThrow()
        expect(()=> isPatternMatch( )).toThrow()
        expect(()=> isPatternMatch(['hello'])).toThrow()
        expect(()=> isPatternMatch([1,2,3])).toThrow()
    })
    
})
