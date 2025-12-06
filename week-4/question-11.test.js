    
    // Author: SakinaEbrahimi
    // Description: String rotation check : check if one string is rotation of another
    //input: waterbottle, 'erbottlewat' => true

const isRotate = require('./question-11')

describe('Test String rotation check function',()=>{
    
    it('return true',()=>{
        expect(isRotate('hello', 'ohell')).toBe(true)
        expect(isRotate('waterbottle', 'erbottlewat')).toBe(true)
        expect(isRotate('book', 'okbo')).toBe(true)
        expect(isRotate('sunshine', 'inesunsh')).toBe(true)
    })
    it('return false',()=>{
        expect(isRotate('hello','olelh')).toBe(false)
        expect(isRotate('water','ertrw')).toBe(false)
    })

    it('return an error for invalid input',()=>{
        expect(()=> isRotate(null) ).toThrow()
        expect(()=> isRotate(undefined) ).toThrow()
        expect(()=> isRotate(123) ).toThrow()
        expect(()=> isRotate([1,2,'3',4])).toThrow()
        expect(()=> isRotate( )).toThrow()
        expect(()=> isRotate('hello','ohellw')).toThrow()
        expect(()=> isRotate('hello', 'hello')).toThrow()
    })
    
})
