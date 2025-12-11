
    //Author: Sakina Ebrahimi
    // Implement Queue using two stack
    //Operation: push, pop, peek, isEmpty

const Queue = require('./question-3')

describe('Test Queue using two stack', ()=>{
    const queue = new Queue()

    it('Test enqueue function',()=>{
        //Test isEmpty function
        expect(queue.isEmpty()).toBe(true)

        expect(queue.enqueu(1)).toEqual([1])
        expect(queue.enqueu(2)).toEqual([1,2])
        expect(queue.enqueu(3)).toEqual([1,2,3])
        expect(queue.enqueu(4)).toEqual([1,2,3,4])

        //Test peek function
        expect(queue.peek()).toBe(4)
    })

    it('Test dequeue function',()=>{
        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)
        expect(queue.dequeue()).toBe(3)
        expect(queue.dequeue()).toBe(4)

        //Test isEmpty function
        expect(queue.isEmpty()).toBe(true)

        //Test peek function
        expect(queue.peek()).toBe('Queue is empty')
    })
})