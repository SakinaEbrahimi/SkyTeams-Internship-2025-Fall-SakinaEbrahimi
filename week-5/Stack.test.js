
    // Author: Sakina Ebrahimi
    // Description: Stack using linked lists
    //Implement a Satck: Use a linked list to create a stack class with push, pop, top, size, isEmpty, reverse a small stack
    //Push and Pop
    //Check if stack is empty
    //Get top element
    //Reverse a small stack

    //Queue: FILO

const Stack = require('./Stack')

describe('Test Stack function',()=>{
    const stack = new Stack()

    it('Test Push function',()=>{
        //Test isEmpty function
        expect(stack.isEmpty()).toBe(true)

        stack.push(10)
        stack.push(20)
        stack.push(30)
        stack.push(40)
        stack.push(50)
        expect(stack.print()).toEqual([50,40,30,20,10])

        //Test Peek function
        expect(stack.peek(50)).toBe(50)

        //Test length function
        expect(stack.length()).toBe(5)
    })

    it('Test Pop function',()=>{
        stack.pop()
        expect(stack.print()).toEqual([40,30,20,10])
        stack.pop()
        expect(stack.print()).toEqual([30,20,10])
        stack.pop()
        expect(stack.print()).toEqual([20,10])

        //Test isEmpty
        expect(stack.isEmpty()).toBe(false)

        //Test Peek
        expect(stack.peek()).toBe(20)
    })

    it('Test reverse function',()=>{
        const new_stack = new Stack()

        new_stack.push(1)
        new_stack.push(2)
        new_stack.push(3)
        new_stack.push(4)
        expect(new_stack.reverse()).toEqual([1,2,3,4])
    })
})