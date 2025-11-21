
    // Author: Sakina Ebrahimi

    // Description: Test for function sum
 
const sum = require('./question-1')

test('add two numbers(1,2) equal 3',()=>{
    expect(sum(1,2)).toBe(3)
})

test('Return false for sum("5",6)', () => {
    expect(sum("5",6)).toBe(false)
})