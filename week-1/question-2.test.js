
    // Author: Sakina Ebrahimi

    // Description: Test for Function Reverse that reverse string, array and number
 
const {reverseString, reverseList} = require('./question-2')

//test for function Revese String
test('Function Reverse String Hello to olleH', ()=>{
    expect(reverseString('Hello')).toBe('olleH')
})

//test for function Reverse List
test('Test for function reverse list [1,2,3] to [3,2,1]', ()=>{
    expect(reverseList([1,2,3])).toEqual([3,2,1])
})
