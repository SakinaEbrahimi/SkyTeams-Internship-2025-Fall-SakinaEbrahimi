  
    // Author: SakinaEbrahimi
    // Description: Rock, paper, scissor game: simulate a game using computer choice


//1:rock 2:paper 3:scissor

const  game = require('./question-7')

describe('Test game function',()=>{
    
    it('return correct answer',()=>{
        expect( game(2,1)).toBe('you win')
        expect( game(3,2)).toBe('you win')
        expect( game(3,1)).toBe('you win')
        expect( game(1,2)).toBe('computer win')
        expect( game(2,3)).toBe('computer win')
        expect( game(1,3)).toBe('computer win')
        expect( game(2,2)).toBe('equal game')
        
    })

    it('return an error for invalid input',()=>{
        expect(()=> game(null,3) ).toThrow()
        expect(()=> game(undefined,1) ).toThrow()
        expect(()=> game(123, 3)).toThrow()
        expect(()=> game([1,2,3,4,5],4)).toThrow()
        expect(()=> game( )).toThrow()
        expect(()=> game('hello',2)).toThrow()
    })
    
})
