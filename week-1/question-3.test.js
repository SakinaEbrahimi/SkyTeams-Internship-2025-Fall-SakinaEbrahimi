
    // Author: Sakina Ebrahimi

    // Description: Test Largest number function

const largest_number = require('./question-3')

test('find the largest number[1,2,4,6,90,1] equal to: 90', ()=>{
    expect(largest_number([1,2,4,6,90,1])).toBe(90)
})