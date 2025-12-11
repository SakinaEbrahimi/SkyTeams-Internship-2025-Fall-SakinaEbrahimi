
    //Author: Sakina Ebrahimi
    //Min Stack
    //Problem: Design a stack that supports
    //push
    //pop
    //top
    //getMin() return the minimum element in O(1)

const MinStack = require('./question-2')

describe('Test Stack Function',()=>{
    const min_stack = new MinStack()
    it('Test Push function',()=>{
        expect(min_stack.push(1)).toEqual([1])
        expect(min_stack.push(-2)).toEqual([1,-2])
        expect(min_stack.push(-3)).toEqual([1,-2,-3])
        expect(min_stack.push(4)).toEqual([1,-2,-3,4])
        expect(min_stack.push(5)).toEqual([1,-2,-3,4,5])
        expect(min_stack.push(6)).toEqual([1,-2,-3,4,5,6])

        //test top element
        expect(min_stack.topElement()).toBe(6)
    })
    it('Test Get Min function',()=>{
        expect(min_stack.getMin()).toBe(-3)
    })
    it('Test Pop function',()=>{
        expect(min_stack.pop()).toBe(6)
        expect(min_stack.pop()).toBe(5)
        expect(min_stack.pop()).toBe(4)
    })
    it('test push and min function',()=>{
        const new_stack = new MinStack()
        expect(new_stack.push(1)).toEqual([1])
        expect(new_stack.push(-1)).toEqual([1,-1])
        //test getmin function
        expect(new_stack.getMin()).toBe(-1)

        expect(new_stack.push(2)).toEqual([1,-1,2])
        expect(new_stack.push(-3)).toEqual([1,-1,2,-3])

        //test top element 
        expect(new_stack.topElement()).toBe(-3)
        //test get min 
        expect(new_stack.getMin()).toBe(-3)
    })
})