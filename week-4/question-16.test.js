  
    // Author: SakinaEbrahimi
    // Description: Multiply matrix A X B
    //input: [[1,2],[3,4] X [5,6],[7,8]]
    //output: [ [ 19, 22 ], [ 43, 50 ] ]

const matrixMultiplication = require('./question-16')

describe('Test  Multiply matrix A X B function',()=>{

    it('return correct answer',()=>{
        A = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
          ]         
          B = [
            [9, 8, 7],
            [6, 5, 4],
            [3, 2, 1]
          ]
        expect(matrixMultiplication(A, B)).toEqual([[30, 24, 18],[84, 69, 54],[138, 114, 90]])           
                   
    })
    it('return correct answer',()=>{
        A = [
            [2, 0, 1],
            [3, 4, 5],
            [6, 7, 8]
          ]          
          B = [
            [1, 2, 3],
            [0, 1, 0],
            [4, 5, 6]
          ];
          C = [
            [6, 9, 12],
            [23, 35, 39],
            [38, 59, 66]
          ]
        expect(matrixMultiplication(A,B)).toEqual(C)           
                   
    })
    it('return correct answer',()=>{
        let A = [
            [1, 2],
            [3, 4]
          ]
          let B = [
            [5, 6],
            [7, 8]
          ]
          C = [
            [19, 22],
            [43, 50]
          ]
        expect(matrixMultiplication(A, B)).toEqual(C)                              
    })

    it('return an error for invalid input',()=>{
        expect(()=>matrixMultiplication(null, [[1,2]])).toThrow()
        expect(()=>matrixMultiplication(null, undefined)).toThrow()
        expect(()=>matrixMultiplication(  )).toThrow()
        expect(()=>matrixMultiplication('wk')).toThrow()
    })
})
