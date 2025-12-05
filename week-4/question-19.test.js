  
    // Author: SakinaEbrahimi
    // Description: Implement a queue using two stacks

const {enqueue, dequeue, peek} = require('./question-19')

describe('Test enqueu function ',()=>{   
    it('test enqueu function',()=>{
        expect( enqueue(1)).toEqual([1])
        expect( enqueue(2)).toEqual([1,2])
        expect( enqueue(3)).toEqual([1,2,3])
        expect( enqueue(4)).toEqual([1,2,3,4])
        expect( enqueue('hello')).toEqual([1,2,3,4,'hello'])
    })
    
})


describe('Test dequeue function ',()=>{
    
    it('test dequeue function',()=>{
        expect(dequeue()).toEqual(1)
        expect(dequeue()).toEqual(2)
        expect(dequeue()).toEqual(3)
        expect(dequeue()).toEqual(4)

    })
        
})
describe('Test peek function ',()=>{
    it('return top element of stack',()=>{
        expect(peek()).toBe('hello')
    })
})