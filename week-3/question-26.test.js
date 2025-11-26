
    // Author: Sakinah Ebrahimi
    // Description: Test Convert Decimal to binary
    //input: 10
    //output: 1010

const dicemalToBinary = require('./question-26.js')   

describe('Test dicemal to binary function',()=>{
   
    it('return correct answer',()=>{
        expect(dicemalToBinary(12)).toBe('1100')               
        expect(dicemalToBinary(13)).toBe('1101')               
        expect(dicemalToBinary(22)).toBe('10110')               
        expect(dicemalToBinary(10)).toBe('1010')               
    })
       
    it('return an error for invalid input ',()=>{
        expect(()=>dicemalToBinary(null)).toThrow()
        expect(()=>dicemalToBinary(0)).toThrow()
        expect(()=>dicemalToBinary(undefined)).toThrow()
        expect(()=>dicemalToBinary('6')).toThrow()
        expect(()=>dicemalToBinary(-12)).toThrow()

    })
})   