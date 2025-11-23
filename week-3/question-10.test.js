
    // Author: Sakina Ebrahimi
    // Description: Test Check whether a number is prime
    //input: 17
   //output: prime

const { default: expect } = require('expect')
const isPrime = require('./question-10')

describe('Test isPrime function',()=>{
    it('return true for prime value',()=>{
        expect(isPrime(1)).toBe(true)
        expect(isPrime(2)).toBe(true)
        expect(isPrime(17)).toBe(true)
        expect(isPrime(13)).toBe(true)
        expect(isPrime(3)).toBe(true)
    })

    let input_value = [12,4,6,8,10,110,99]
    for(i in input_value){
        it('return false when number isnot prime ', ()=>{
            expect(isPrime(input_value[i])).toBe(false)
        })
    }

    let invalid_input = ['12','3', null, undefined]
    for(i in invalid_input){
        it('return an error invalid input',()=>{
            expect(()=>isPrime(invalid_input[i])).toThrow()
        })
    }
})