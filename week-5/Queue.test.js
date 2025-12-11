
    // Author: Sakina Ebrahimi
    // Description: Queue basics using  linked lists
    //Implement a queue: Use a linked list to create a queue class with enqueue, dequeue, front, rear, isEmpty, reverse a small queue
    //Enqueue and Dequeue
    //Check if queue is empty
    //Get front and rear values
    //Reverse a small queue

    //Queue: FIFO

const Queue = require('./Queue')

describe('Test Queue function',()=>{
    const queue_linked = new Queue()

    it('Test Enqueue function',()=>{
        queue_linked.enqueue(1)
        queue_linked.enqueue(2)
        queue_linked.enqueue(3)
        queue_linked.enqueue(4)
        queue_linked.enqueue(5)
        queue_linked.enqueue(6)
        expect(queue_linked.print()).toEqual([1,2,3,4,5,6])

        //Test Peek function
        expect(queue_linked.peek()).toBe(6)

        //Test getFront function
        expect(queue_linked.getFront()).toBe(1)

        //Test getRear function
        expect(queue_linked.getRear()).toBe(6)

        //Test isEmpty function
        expect(queue_linked.isEmpty()).toBe(false)

        //Test Reverse function
        // expect(queue_linked.reverse()).toEqual([6,5,4,3,2,1])
    })
    it('Test Dequeue function',()=>{
        queue_linked.dequeue()
        expect(queue_linked.print()).toEqual([2,3,4,5,6])
        queue_linked.dequeue()
        expect(queue_linked.print()).toEqual([3,4,5,6])
        queue_linked.dequeue()
        expect(queue_linked.print()).toEqual([4,5,6])
        queue_linked.dequeue()
        expect(queue_linked.print()).toEqual([5,6])

        //Test isEmpty function
        expect(queue_linked.isEmpty()).toBe(false)

        //Test Peek function
        expect(queue_linked.peek()).toBe(6)

        //Test getFront function
        expect(queue_linked.getFront()).toBe(5)

        //Test getRear function
        expect(queue_linked.getRear()).toBe(6)
    })
    
    it('Test Reverse function',()=>{
        const new_queue = new Queue()
        new_queue.enqueue(10)
        new_queue.enqueue(20)
        new_queue.enqueue(30)
        expect(new_queue.reverse()).toEqual([30,20,10])
    })
})