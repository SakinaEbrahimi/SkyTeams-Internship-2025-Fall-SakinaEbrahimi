
    // Author: SakinaEbrahimi
    // Description: Find second largest number in an array without sorting array
    //input:[10,20,4,45,99]
    //output: 45

const secondLargestNumber = require('./question-1')

describe('Test Econd largest number function',()=>{
   let expect_value = [ 10,12,15,10,90 ]
   let input_value = [
    [1,2,3,12,9,7,10],
    [12,24,3,2],
    [2,20,-40,15],
    [10,100,9],
    [10,100,90]
   ]
    for(let i = 0 ; i<input_value.length; i++){
        it('return correct answer',()=>{
            expect(secondLargestNumber(input_value[i])).toBe(expect_value[i])
        })
    }

    it('return an error for invalid input',()=>{
        expect(()=>secondLargestNumber(null)).toThrow()
        expect(()=>secondLargestNumber(undefined)).toThrow()
        expect(()=>secondLargestNumber('123')).toThrow()
        expect(()=>secondLargestNumber(1209)).toThrow()
    })

})