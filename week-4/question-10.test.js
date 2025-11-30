  
    // Author: SakinaEbrahimi
    // Description: Check unique characters: return whether a string contains onlu unique chars
    //input: hello
    //output:false

const isUniqueChars = require('./question-10')

describe('Test unique function',()=>{

   
    it('return correct answer',()=>{
        expect(isUniqueChars('hello')).toBe(false)
        expect(isUniqueChars('sunshine')).toBe(false)
        expect(isUniqueChars('rainunderskys')).toBe(false)
        expect(isUniqueChars('ways')).toBe(true)
        expect(isUniqueChars('wow')).toBe(false)
        expect(isUniqueChars('sky')).toBe(true)
    })

    

    it('return an error for invalid input',()=>{
        expect(()=> isUniqueChars(null) ).toThrow()
        expect(()=> isUniqueChars(undefined) ).toThrow()
        expect(()=> isUniqueChars(123) ).toThrow()
        expect(()=> isUniqueChars([1,2,'3',4])).toThrow()
        expect(()=> isUniqueChars( )).toThrow()
    })
    
})
