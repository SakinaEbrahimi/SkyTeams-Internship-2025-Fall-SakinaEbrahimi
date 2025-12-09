  
    // Author: SakinaEbrahimi
    // Description: String compression: compress using counts of consecutive characters
    //input: aabbccccaa
    //output: a2b2c4a2

const stringCompression = require('./question-9')


describe('Test string compression function',()=>{

    let expect_value = [
        'a3b7e3m1',
        'a2b2c4a2',
        'y1e1l2o1w1',
        'e2b1u2i1c1',
        'k1l1s1k3d1n2s1'
    ]
    let input_value = [
        'aaabbbbbbbeeem',
        'aabbccccaa',
        'yellow',
        'eebuuic',
        'klskkkdnns'
    ]
    for( i in input_value){
        it('return correct answer',()=>{
           expect(stringCompression(input_value[i])).toBe(expect_value[i])
        })
    }
    

    it('return an error for invalid input',()=>{
        expect(()=> stringCompression(null) ).toThrow()
        expect(()=> stringCompression(undefined) ).toThrow()
        expect(()=> stringCompression(123) ).toThrow()
        expect(()=> stringCompression([1,2,'3',4])).toThrow()
    })
    
})
