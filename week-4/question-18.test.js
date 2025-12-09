  
    // Author: SakinaEbrahimi
    // Description: Implement a stack (array based)
    //operations: push, pop, peek, isempty

const { push, pop, isEmpty, peek } = require('./question-18')

describe('Test push function ',()=>{   
    it('test push function',()=>{
        expect(push(1)).toEqual([1])
        expect(push(2)).toEqual([1,2])
        expect(push(3)).toEqual([1,2,3])
        expect(push(4)).toEqual([1,2,3,4])
        expect(push('hello')).toEqual([1,2,3,4,'hello'])
    })
    it('return an error push function when array is full',()=>{
        expect(()=>push(6)).toThrow()
    })
    
})

describe('Test peek function ',()=>{
    it('return top element array',()=>{
        expect(peek()).toBe('hello')
    })
})

describe('Test is Empty function ',()=>{
    it('return false for full array',()=>{
        expect(isEmpty()).toBe(false)
    })
})

describe('Test pop function ',()=>{
    
    it('test pop function',()=>{
        expect(pop()).toEqual('hello')
        expect(pop()).toEqual(4)
        expect(pop()).toEqual(3)
        expect(pop()).toEqual(2)
        expect(pop()).toEqual(1)
    })
    it('return an error for pop function when array is empty',()=>{
        expect(()=>pop()).toThrow()
    })   
})
describe('Test is Empty function ',()=>{
    it('return true when array is empty',()=>{
        expect(isEmpty()).toBe(true)
    })
})
describe('Test peek function ',()=>{
    it('return an error for empty array',()=>{
        expect(()=>peek()).toThrow()
    })
})