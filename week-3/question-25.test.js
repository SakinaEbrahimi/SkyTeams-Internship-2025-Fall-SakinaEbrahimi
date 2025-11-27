
    // Author: Sakinah Ebrahimi
    // Description: Test Number Guessing Game: 
    // The program randomly select a number between 1-100
    //the user must guess a number
    //the program given hints like'Too High' or 'Too Low'
    // continue until the user guesses correctly

const guessGaming = require('./question-25')

describe('Test Number Guess function',()=>{

    it('return correct answer',()=>{
        expect( guessGaming(40,40)).toBe('You Win') 
        expect( guessGaming(50,60)).toBe('Too Low') 
        expect( guessGaming(60,40)).toBe('Too High')         
        expect( guessGaming(60,60)).toBe('You Win')         
            
    })        

    it('return an error for invalid input ',()=>{
        expect(()=> guessGaming(null)).toThrow()
        expect(()=> guessGaming(0)).toThrow()
        expect(()=> guessGaming(undefined)).toThrow()
        expect(()=> guessGaming(-60)).toThrow()
        expect(()=> guessGaming('60', 40)).toThrow()

    })
})