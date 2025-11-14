
    // Author: Sakina Ebrahimi
    //Description: Test the function swap

const { default: expect } = require('expect')
const swap = require('./question-1')

test('Swap two vaiable(12,10) to (12,10)', ()=>{
    expect(swap(12,10)).toEqual([10,12])
})