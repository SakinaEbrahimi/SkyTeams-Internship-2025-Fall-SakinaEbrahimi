
    // Author: Sakina Ebrahimi
    // Description: Linked List Basics
    // 1: Create a singly linked list: Create a linked list with 3 node [10,20,30 ] and print all Element.
    // 2: Add a node at the beginning: Insert 5 at the start => [5,10,20,30]
    // 3: Add a node at the end : append 40 => [10,20,30,40]
    // 4: Delete the first  node : remove head =>[10,20,30,40]
    // 5: Search for a value: Check if 20 exists => return true/false

const LinkList = require('./LinkList.js')


describe('Test Linked List Methods', ()=>{
    const link_list = new LinkList()

    it('Test Insert Last method',()=>{
        link_list.inserLast(1)
        expect(link_list.print()).toEqual([1])
        link_list.inserLast(2)
        expect(link_list.print()).toEqual([1,2])
        link_list.inserLast(3)
        expect(link_list.print()).toEqual([1,2,3])
    })
    it('Test add a node at the beginning',()=>{
        link_list.prepend(0)
        expect(link_list.print()).toEqual([0,1,2,3])
        link_list.prepend(-1)
        expect(link_list.print()).toEqual([-1,0,1,2,3])
        link_list.prepend(10)
        expect(link_list.print()).toEqual([10,-1,0,1,2,3])
        link_list.prepend(5)
        expect(link_list.print()).toEqual([5,10,-1,0,1,2,3])
    })
    it('Test Delete first node',()=>{
        link_list.deleteHead()
        expect(link_list.print()).toEqual([10,-1,0,1,2,3])
        link_list.deleteHead()
        expect(link_list.print()).toEqual([-1,0,1,2,3])
    })
    it('Test Delete Last node', ()=>{
        link_list.deleteLast()
        expect(link_list.print()).toEqual([-1,0,1,2])
        link_list.deleteLast()
        expect(link_list.print()).toEqual([-1,0,1])
    })
    it('Test Insert at special index',()=>{
        link_list.inserAt(2,2)
        expect(link_list.print()).toEqual([-1,0,2,1])
        link_list.inserAt(5,1)
        expect(link_list.print()).toEqual([-1,5,0,2,1])
        link_list.inserAt(90,3)
        expect(link_list.print()).toEqual([-1,5,0,90,2,1])
    })

    it('Test Search a value method',()=>{
        expect(link_list.search(5)).toBe(true)
        expect(link_list.search(1)).toBe(true)
        expect(link_list.search(0)).toBe(true)
        expect(link_list.search(10)).toBe(false)
        expect(link_list.search(40)).toBe(false)
        expect(link_list.search(100)).toBe(false)
    })
})