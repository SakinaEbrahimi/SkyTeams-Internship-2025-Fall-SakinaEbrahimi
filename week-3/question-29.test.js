
    //Author: Sakina Ebrahimi
    //Description: Test Check if two array are equal
    //input: [1,2,3], [1,2,3]
    //output: true
const isEqualArray = require('./question-29')

describe('Test BMI function',()=>{

    it('return correct answer',()=>{
        expect( isEqualArray([1,2,3], [1,2,3]) ).toBe(true)    
        expect( isEqualArray([1,2,3], [1,2,3]) ).toBe(true)    
        expect( isEqualArray([1,2,3], [1,2,3]) ).toBe(true)    
        expect( isEqualArray([1,2,3], [1,2,3]) ).toBe(true)    
    })   
    it('return false for different value array',()=>{
        expect( isEqualArray([1,2,3], [1,3,3]) ).toBe(false)    
        expect( isEqualArray([1,2,3], [1,3]) ).toBe(false)    
        expect( isEqualArray([1,2,3,5], [1]) ).toBe(false)    
        expect( isEqualArray([1,5,3], [5,2,3]) ).toBe(false)    
    })   

    it('return an error for invalid input ',()=>{
        expect(()=> isEqualArray(null, [1,2])).toThrow()
        expect(()=> isEqualArray([1],null)).toThrow()
        expect(()=> isEqualArray('15', 12)).toThrow()
        expect(()=> isEqualArray([1,2,'4'],[1,2,4])).toThrow()
        expect(()=> isEqualArray([1,2],['1','2'])).toThrow()

    })
})