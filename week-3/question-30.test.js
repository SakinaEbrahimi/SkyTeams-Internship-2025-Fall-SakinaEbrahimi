
    // Author: Sakinah Ebrahimi
    // Description: Test Find Missing number in array(1 to N)
    //input: [1,2,4]
    //output: 3
const missingArray = require('./question-30')

describe('Test BMI function',()=>{

    it('return correct answer',()=>{
         expect(missingArray([1,2,4])).toBe(3)
         expect(missingArray([1,3,4])).toBe(2)
         expect(missingArray([1,2,3,4,6])).toBe(5)
         expect(missingArray([1,2,3,5])).toBe(4)
    })   
      

    it('return an error for invalid input ',()=>{
        expect(()=> missingArray(null)).toThrow()
        expect(()=> missingArray(undefined)).toThrow()
        expect(()=> missingArray(1,2,4)).toThrow()
        expect(()=> isEqualArray('124')).toThrow()

    })
})