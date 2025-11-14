
    // Author: Sakina Ebrahimi
    //Description: Test for Function largest and smallest three number

const { default: expect } = require('expect')
const { largestNumber, smallestNumber } = require('./question-2')

test('Test for largest(12,11,15) to equail 15', ()=>{
    expect(largestNumber(12,11,15)).toBe(15)
})