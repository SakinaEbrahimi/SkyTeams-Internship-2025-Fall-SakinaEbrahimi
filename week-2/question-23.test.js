
    // Author: Sakina Ebrahimi
    //Description:Test for Fibonacci series up to N terms: Generatethe fibonacci sequence 
    //Example: 
    //input:7
    //output: 0,1,1,2,3,5,8

const fibonacciSeries = require('./question-23')

describe('Test Fibonaccia function',()=>{
    it('return correct answer',()=>{
        expect(fibonacciSeries(7)).toEqual([0, 1, 1, 2,3, 5, 8])
        expect(fibonacciSeries(20)).toEqual([ 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181])
        expect(fibonacciSeries(10)).toEqual([ 0, 1, 1, 2,3, 5, 8,13,21,34])
        expect(fibonacciSeries(3)).toEqual([ 0, 1, 1])
        expect(fibonacciSeries(8)).toEqual([ 0, 1, 1,2,3, 5, 8,13])

    })
    it('return false for negative or zero input', ()=>{
        expect(fibonacciSeries(-7)).toBe(false)
        expect(fibonacciSeries(-10)).toBe(false)
        expect(fibonacciSeries(-3)).toBe(false)
        expect(fibonacciSeries(-5)).toBe(false)
        expect(fibonacciSeries(-20)).toBe(false)
        expect(fibonacciSeries(0)).toBe(false)
    })
})