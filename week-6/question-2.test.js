
    // Author: Sakina Ebrahimi
    // Determine if Two Trees Are Identical 
    // Write a function that checks whether two binary trees are identical in both structure and node values. 

const BinaryTree = require('./BinaryTree')
const isIdentical = require('./question-2')

describe('Test Identical function',()=>{
    it('return true',()=>{
        const tree1 = new BinaryTree(1)
        tree1.left = new BinaryTree(2)
        tree1.right = new BinaryTree(3)

        const tree2 = new BinaryTree(1)
        tree2.left = new BinaryTree(2)
        tree2.right = new BinaryTree(3)
        
        expect(isIdentical(tree1, tree2)).toBe(true)
    })
    it('return true',()=>{
        const tree1 = new BinaryTree(1)
        tree1.left = new BinaryTree(2)
        tree1.left.right = new BinaryTree(4)
        tree1.right = new BinaryTree(3)

        const tree2 = new BinaryTree(1)
        tree2.left = new BinaryTree(2)
        tree2.left.right = new BinaryTree(4)
        tree2.right = new BinaryTree(3)
        
        expect(isIdentical(tree1, tree2)).toBe(true)
    })
    it('return true',()=>{
        const tree1 = new BinaryTree(4)

        const tree2 = new BinaryTree(4)
      
        expect(isIdentical(tree1, tree2)).toBe(true)
    })
    it('return false',()=>{
        const tree1 = new BinaryTree(5)

        const tree2 = new BinaryTree(4)
      
        expect(isIdentical(tree1, tree2)).toBe(false)
    })
    it('return false',()=>{
        const tree1 = new BinaryTree(1)
        tree1.left = new BinaryTree(2)
        tree1.right = new BinaryTree(3)

        const tree2 = new BinaryTree(1)
        tree2.left = new BinaryTree(8)
        tree2.right = new BinaryTree(3)
        
        expect(isIdentical(tree1, tree2)).toBe(false)
    })
    it('return false',()=>{
        const tree1 = new BinaryTree(10)
        tree1.left = new BinaryTree(2)
        tree1.left.right = new BinaryTree(4)
        tree1.right = new BinaryTree(3)

        const tree2 = new BinaryTree(1)
        tree2.left = new BinaryTree(2)
        tree2.left.right = new BinaryTree(4)
        tree2.right = new BinaryTree(3)
        
        expect(isIdentical(tree1, tree2)).toBe(false)
    })
    it('return false',()=>{
        const tree = new BinaryTree(3)
        tree.left = new BinaryTree(1)
        tree.left.right = new BinaryTree(2)
        tree.right  = new BinaryTree(4)

        const tree2 = new BinaryTree(3)
        tree2.right = new BinaryTree(1)
        tree2.left  = new BinaryTree(4)
        tree2.left.right = new BinaryTree(2)
        
        expect(isIdentical(tree, tree2)).toBe(false)
    })
})
