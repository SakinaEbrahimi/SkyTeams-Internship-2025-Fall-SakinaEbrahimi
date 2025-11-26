
    // Author: Sakinah Ebrahimi
    // Description: Test Find unique element in an array
    //input: [1,2,1,2,3,4,3]
    //output: [1,2,3,4]

const uniqueElement = require('./question-27.js')   

describe('Test unique element function',()=>{

    let expect_value = [
        [ 1, 2, 3, 4 ],
        [ 1, 2 ],
        [ 1 ],
    ]
    let input_value = [
        [1,2,1,2,3,4,3],
        [1,2,1],
        [1,1,1,1]
    ]
    for(let i in input_value){
        it('return correct answer',()=>{
            expect(uniqueElement(input_value[i])).toEqual(expect_value[i])               
        })
    }
       
    
    it('return an error for invalid input ',()=>{
        expect(()=> uniqueElement(null)).toThrow()
        expect(()=> uniqueElement(undefined)).toThrow()
        expect(()=> uniqueElement([1,2,'4',4])).toThrow()
        expect(()=> uniqueElement()).toThrow()

    })
})   