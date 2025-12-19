
    // Author: Sakina Ebrahimi
    // Check if Subtree 
    // Given two binary trees, determine whether the second tree exists as a subtree within the first tree. 

const BinaryTree = require('./BinaryTree')
const isSubtree = require('./question-12')

describe('Test function',()=>{
    it('return correct answer',()=>{
        const tree = new BinaryTree(1)
        tree.left = new BinaryTree(2)
        tree.right = new BinaryTree(3)
        tree.right.left = new BinaryTree(4)
        tree.right.right = new BinaryTree(5)

        const subtree = new BinaryTree(3)
        subtree.left = new BinaryTree(4)
        subtree.right = new BinaryTree(5)
        expect(isSubtree(subtree, tree)).toBe(true)
    })
    it('return correct answer',()=>{
        const tree = new BinaryTree(7)
        tree.left = new BinaryTree(3)
        tree.right = new BinaryTree(9)
        tree.left.left = new BinaryTree(1)
        tree.left.right = new BinaryTree(5)

        const subtree = new BinaryTree(5)

        expect(isSubtree(subtree, tree)).toBe(true)
    })
    it('return correct answer',()=>{
        const tree = new BinaryTree(10)
        tree.left = new BinaryTree(5)
        tree.right = new BinaryTree(15)
        tree.left.left = new BinaryTree(2)
        tree.left.right = new BinaryTree(6)

        const subtree = new BinaryTree(5)
        subtree.left = new BinaryTree(2)
        subtree.right = new BinaryTree(7)  

        expect(isSubtree(subtree, tree)).toBe(false)
    })
    it('return correct answer',()=>{
        const tree = new BinaryTree(1)
        tree.left = new BinaryTree(2)
        tree.right = new BinaryTree(3)
        tree.right.left = new BinaryTree(4)
        
        const subtree = new BinaryTree(3)
        subtree.right = new BinaryTree(4) 

        expect(isSubtree(subtree, tree)).toBe(false)
    })
   
})