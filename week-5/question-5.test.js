
    //Author: Sakina Ebrahimi
    //Backspace string compare
    //Given two string s and t, return true if they are equal after interpreting # as backspace
    //input: ab#c, ad#c 
    //output: true (ac) 

const isCompare = require('./question-5')

describe('Test Backspace string compare',()=>{
    it('return correct answer',()=>{
        expect(isCompare('ab#c', 'ad#c')).toBe(true)
        expect(isCompare('ab#f#c', 'ad#c')).toBe(true)
        expect(isCompare('ab#c#', 'ad#c#')).toBe(true)
        expect(isCompare('Hel#lo', 'Hell#o')).toBe(true)
    })
    it('return false',()=>{
        expect(isCompare('h#ello','hel#lo')).toBe(false)
        expect(isCompare('a#ncd','abc#d')).toBe(false)
        expect(isCompare('sun#', 's#un')).toBe(false)
        expect(isCompare('1#bc','a#hsn')).toBe(false)
        expect(isCompare('way#','wzy')).toBe(false)
    })
    it('return an error for invalid input',()=>{
        expect(()=>isCompare()).toThrow()
        expect(()=>isCompare(null)).toThrow()
        expect(()=>isCompare(undefined)).toThrow()
        expect(()=>isCompare(12)).toThrow()
    })
})