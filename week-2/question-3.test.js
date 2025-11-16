
    // Author: Sakina Ebrahimi
    //Description: Test Calculate the area and perimeter of a rectangle

const {areaRectangle, perimeterRectangle } = require('./question-3')

describe('Test for area rectangle function',()=>{
    it('return area when width and length is greater than zero',()=>{
        expect(areaRectangle(3,4)).toBe(12)
        expect(areaRectangle(10,20)).toBe(200)
    })
    it('return an error when width or length is zero', ()=>{
        expect(()=>{areaRectangle(0,4)}).toThrow()
        expect(()=>{areaRectangle(4,0)}).toThrow()
    })
    it('return an error when width and length are negative', ()=>{
        expect(()=>{areaRectangle(-3,4)}).toThrow()
        expect(()=>{areaRectangle(3,-4)}).toThrow()
    })
})

describe('Test perimeter rectangle function', ()=>{
    it('return perimeter when width and length is greater than zero', ()=>{
        expect(perimeterRectangle(3,4)).toBe(14)
        expect(perimeterRectangle(10,20)).toBe(60)
    })
    it('return an error when length or width is zero',()=>{
        expect(()=>{perimeterRectangle(0,4)}).toThrow()
        expect(()=>{perimeterRectangle(4,0)}).toThrow()
    })
    it('return an error when a parameter is negative', ()=>{
        expect(()=>{perimeterRectangle(-3,4)}).toThrow()
        expect(()=>{perimeterRectangle(3,-4)}).toThrow()
    })
})
