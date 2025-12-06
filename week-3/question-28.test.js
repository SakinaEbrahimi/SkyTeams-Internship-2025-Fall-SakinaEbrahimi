    
    // Author: Sakinah Ebrahimi
    // Description: Test Remove Duplicate from an array
    //input: [3,1,3,5,1]
    //output: [3,1,5]

const removeDuplicates = require('./question-28')

describe('Test Remove Duplicate element function',()=>{

    let expect_value = [
        [ 3, 1, 5 ],
        [ 1, 2 ],
        [ 1, 2, 3 ]
    ]
    let input_value =[
        [3,1,3,5,1],
        [1,2,1,2],
        [1,2,2,1,3]
    ]

    for(let i in input_value){
        it('return correct answer',()=>{
            expect( removeDuplicates(input_value[i])).toEqual(expect_value[i])   
              
        })
    }
       
   
    it('return an error for invalid input ',()=>{
        expect(()=> removeDuplicates(null)).toThrow()
        expect(()=> removeDuplicates(undefined)).toThrow()
        expect(()=> removeDuplicates([1,2,'3','1'])).toThrow()
        expect(()=> removeDuplicates([1,'hello',4])).toThrow()
        expect(()=> removeDuplicates( )).toThrow()

    })
})