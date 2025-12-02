  
    // Author: SakinaEbrahimi
    // Description: Character frequency counter: count occurences of characters
    //input: banana
    //output: {b:1, a:3, n:2}

const charsCounter = require('./question-12')

describe('Test Character frequency counter function',()=>{
    
    it('return correct answer',()=>{
        expect(charsCounter('banana')).toEqual({ b: 1, a: 3, n: 2 })
        expect(charsCounter('helloworld')).toEqual({ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 })
        expect(charsCounter('skysteam')).toEqual({ s: 2, k: 1, y: 1, t: 1, e: 1, a: 1, m: 1 })
        expect(charsCounter('sunshine')).toEqual({ s: 2, u: 1, n: 2, h: 1, i: 1, e: 1 })
        
    })

    it('return an error for invalid input',()=>{
        expect(()=> charsCounter(null) ).toThrow()
        expect(()=> charsCounter(undefined) ).toThrow()
        expect(()=> charsCounter(123) ).toThrow()
        expect(()=> charsCounter([1,2,'3',4])).toThrow()
        expect(()=> charsCounter( )).toThrow()
        expect(()=> charsCounter(['hello'])).toThrow()
        expect(()=> charsCounter([1,2,3])).toThrow()
    })
    
})
