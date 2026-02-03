
    // Author: Sakina Ebrahimi
    // Height of Binary Tree 
    // Write a function that returns the number of levels in a binary tree. 
    // An empty tree has height 0, and a tree with only one node has height 1.

const height = require('./question-1')
const BinaryTree = require('./BinaryTree')

describe('Test Height function',()=>{
    it('return correct answer',()=>{
        const tree = new BinaryTree(1)
        tree.left = new BinaryTree(2)
        tree.right = new BinaryTree(3)
        tree.left.left = new BinaryTree(4)
        tree.left.right = new BinaryTree(6)

        expect(height(tree)).toBe(3)
    })
    it('return correct answer',()=>{
        const tree = new BinaryTree(1)
        tree.left = new BinaryTree(2)
        tree.left.left = new BinaryTree(4)
        tree.right = new BinaryTree(3)

        expect(height(tree)).toBe(3)
    })
    it('return correct answer',()=>{
        const tree = new BinaryTree(1)
        tree.left = new BinaryTree(2)
        tree.right = new BinaryTree(3)

        expect(height(tree)).toBe(2)
    })
    it('return correct answer',()=>{
        const tree = new BinaryTree()
        
        expect(height(tree)).toBe(0)
    })
    it('return correct answer',()=>{
        const tree = new BinaryTree(1)

        expect(height(tree)).toBe(1)
    })
    
})