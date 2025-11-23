
    // Author: Sakina Ebrahimi
    //Description: Test Traingle validity and type: given three sides, determine if they form a valid traingle and 
    //if it is equilateral, isosceles, or scalene
    //Example: 
    //input:3,4,5
    //output: valid traingle,scalene

const traingleValidity = require('./question-15')    
const { default: expect } = require('expect')

describe('Test traingle function ',()=>{
    it('return correct answer',()=>{
        expect(traingleValidity(3,4,5)).toStrictEqual('scalene traingle')
        expect(traingleValidity(5,4,7)).toStrictEqual('scalene traingle')
        expect(traingleValidity(7,6,9)).toStrictEqual('scalene traingle')
        expect(traingleValidity(7,7,7)).toStrictEqual('equilateral traingle')
        expect(traingleValidity(3,3,3)).toStrictEqual('equilateral traingle')
        expect(traingleValidity(7,7,9)).toStrictEqual('isosceles traingle')
        expect(traingleValidity(4,9,9)).toStrictEqual('isosceles traingle')
    })
    it('return an error when missed a value',()=>{
        expect(traingleValidity(1,2)).toBe('invalid input')
        expect(traingleValidity(1)).toBe('invalid input')
        expect(traingleValidity(4,8)).toBe('invalid input')
    })
    it('return invalid input ',()=>{
        expect(traingleValidity(2,3,1)).toBe('invalid input')
        expect(traingleValidity(2,5,3)).toBe('invalid input')
        expect(traingleValidity(9,9,0)).toBe('invalid input')
        expect(traingleValidity(0,4,5)).toBe('invalid input')
        expect(traingleValidity(8,4,3)).toBe('invalid input')
        expect(traingleValidity(0,0,0)).toBe('invalid input')
    })
})