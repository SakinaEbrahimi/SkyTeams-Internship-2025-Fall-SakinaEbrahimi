
    // Author: SakinaEbrahimi
    // Description: Set matrix zeroes: if an element is zero, set its entire row and colmun to zero.

const setMatrixZero = require('./question-25')

describe('Test Set matrix zeroes function',()=>{
    
    it('return correct answer', ()=>{
        let A = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
            ]
        let C = [
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
            ]
        expect(setMatrixZero(A)).toEqual(C)
    })
    it('return correct answer', ()=>{
        let A = [
            [1, 2, 3, 4],
            [5, 0, 7, 8],
            [0, 10, 11, 12]
          ]
        let C = [
            [0, 0, 3, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
          ]
        expect(setMatrixZero(A)).toEqual(C)
    })
    it('return correct answer', ()=>{
        let A = [
            [0, 2, 3],
            [4, 5, 6],
            [7, 8, 0]
            ]
        let C = [
            [0, 0, 0],
            [0, 5, 0],
            [0, 0, 0]
            ]
        expect(setMatrixZero(A)).toEqual(C)
    })
    it('return an error for invalid input',()=>{
        expect(()=>setMatrixZero(null)).toThrow()
        expect(()=>setMatrixZero(undefined)).toThrow()
        expect(()=>setMatrixZero( )).toThrow()
        expect(()=>setMatrixZero('123')).toThrow()
    })

})