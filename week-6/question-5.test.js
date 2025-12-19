
    // Author: Sakina Ebrahimi
    // Check for Balanced Tree
    // Write a function that checks whether the height difference between the left and right subtrees of every node is at most one. 

const isBalance = require('./question-5')
const BinaryTree = require('./BinaryTree')

describe('Test  function',()=>{
    it('return correct answer',()=>{
        const tree1 = new BinaryTree(1)
        tree1.left = new BinaryTree(2)
        tree1.right = new BinaryTree(3)
        tree1.right.left = new BinaryTree(4)

        expect(isBalance(tree1)).toBe(true)
    })
    it('return correct answer',()=>{
        const tree1 = new BinaryTree(1)
        tree1.left = new BinaryTree(2)
        tree1.right = new BinaryTree(3)
        tree1.left.left = new BinaryTree(4)
        tree1.left.right = new BinaryTree(5)
        tree1.right.left = new BinaryTree(6)
        tree1.right.right = new BinaryTree(7)
        
        expect(isBalance(tree1)).toBe(true)
    })
    it('return correct answer',()=>{
        const tree3 = new BinaryTree(8)
        tree3.left = new BinaryTree(4)
        tree3.right = new BinaryTree(12)
        tree3.left.left = new BinaryTree(2)
        tree3.left.right = new BinaryTree(6)
        tree3.right.left = new BinaryTree(10)
        tree3.right.right = new BinaryTree(14)
        tree3.left.left.left = new BinaryTree(1)
        tree3.left.left.right = new BinaryTree(3)
        tree3.left.right.left = new BinaryTree(5)
        tree3.left.right.right = new BinaryTree(7)

        expect(isBalance(tree3)).toBe(true)
    })
    it('return correct answer',()=>{
        const tree1 = new BinaryTree(1)
        tree1.right = new BinaryTree(3)
        tree1.right.left = new BinaryTree(4)

        expect(isBalance(tree1)).toBe(false)
    })
    it('return correct answer',()=>{
        const tree1 = new BinaryTree(1)
        tree1.right = new BinaryTree(2)
        tree1.right.right = new BinaryTree(3)
        tree1.right.right.right = new BinaryTree(4)

        expect(isBalance(tree1)).toBe(false)
    })
    it('return correct answer',()=>{
        const tree2 = new BinaryTree(10)
        tree2.left = new BinaryTree(5)
        tree2.left.left = new BinaryTree(2)
        tree2.left.left.left = new BinaryTree(1)
        tree2.right = new BinaryTree(15)

        expect(isBalance(tree2)).toBe(false)
    })
    it('return correct answer',()=>{
        const tree = new BinaryTree(1)
        tree.left = new BinaryTree(0)
        tree.left.left = new BinaryTree(-1)
        tree.left.left.left = new BinaryTree(-2)

        expect(isBalance(tree)).toBe(false)
    })
})