
    // Author: Sakina Ebrahimi
    //Description: Test Temperature converter 

const { default: expect } = require("expect")
const {fahrenhietToCelsius , celsiusToFahrenhiet } = require('./question-4')

//test for fahrenhiet to celsius
test('test 0 celsius to equail -23f', ()=>{
    expect(fahrenhietToCelsius(0)).toBe(32)
})

//test for celsius to fahrenhiet
test('test -23 fahrenhiet equal to 0 celsius', ()=>{
    expect(celsiusToFahrenhiet(32)).toBe(0)
})
