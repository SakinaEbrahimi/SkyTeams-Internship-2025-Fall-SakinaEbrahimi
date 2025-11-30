
    // Author: SakinaEbrahimi
    // Description: Rearrange array( even before odd ): move even numbers before odd number while maintaining order
    //input: [1,2,3,4,5,6]
    //output: [2,4,6,1,3,5]

const evenBeforeOdd = require('./question-5')


describe('Test even before odd function',()=>{

    let expect_value = [
        [ 2, 4, 6, 1, 3, 5 ],
        [ 4, 6, 8, 1, 3 ],
        [ 4, 6, 8, 5 ],
        [ 10, 4, 3, 5, 7 ]
    ]
    let input_value = [
        [1,2,3,4,5,6],
        [4,6,8,1,3],
        [5,4,6,8],
        [3,5,10,7,4]
    ]
    for( i in input_value){
        it('return correct answer',()=>{
            expect(evenBeforeOdd(input_value[i])).toEqual(expect_value[i])
        })
    }
    

    it('return an error for invalid input',()=>{
        expect(()=> evenBeforeOdd(null) ).toThrow()
        expect(()=> evenBeforeOdd(undefined) ).toThrow()
        expect(()=> evenBeforeOdd([1,2,'hello']) ).toThrow()
        expect(()=> evenBeforeOdd([1,2,'3',4]) ).toThrow()
    })
    
})
