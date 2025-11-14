
    // Author: Sakina Ebrahimi
    //Description: Test Calculate the area and perimeter of a rectangle

const { default: expect } = require("expect")
const {areaRectangle, perimeterRectangle } = require('./question-3')

//test for area
test('test area rectangle (10,2) equal: 20', ()=>{
    expect(areaRectangle(10,2)).toBe(20)
})

//test for perimeter
test('test for perimeter ractengle (10,2) equal: 24', ()=>{
    expect(perimeterRectangle(10,2)).toBe(24)
})
