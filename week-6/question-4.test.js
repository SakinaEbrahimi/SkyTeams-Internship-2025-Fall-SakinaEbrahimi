
    // Author: Sakina Ebrahimi
    // Symmetric Tree
    // Write a function that checks whether a binary tree is symmetric around its center. 
    // A tree is symmetric if the left subtree is a mirror image of the right subtree.
    
const BinaryTree = require('./BinaryTree')
const isSymmetric = require('./question-4')

describe('Test  function',()=>{
    it('return true',()=>{
        const tree1 = new BinaryTree(1)
        tree1.left = new BinaryTree(2)
        tree1.right = new BinaryTree(2)

        expect(isSymmetric(tree1)).toBe(true)
    })
    it('return true',()=>{
        const tree2 = new BinaryTree(1)
        tree2.left = new BinaryTree(2)
        tree2.right = new BinaryTree(2)

        tree2.left.left = new BinaryTree(3)
        tree2.left.right = new BinaryTree(4)

        tree2.right.left = new BinaryTree(4)
        tree2.right.right = new BinaryTree(3)

        expect(isSymmetric(tree2)).toBe(true)
    })
    it('return true',()=>{
        const tree5 = new BinaryTree(1)
        tree5.left = new BinaryTree(2)
        tree5.right = new BinaryTree(2)

        tree5.left.right = new BinaryTree(3)
        tree5.right.left = new BinaryTree(3)

        expect(isSymmetric(tree5)).toBe(true)
    })
    it('return false',()=>{
        const tree3 = new BinaryTree(1)
        tree3.left = new BinaryTree(2)
        tree3.right = new BinaryTree(2)
        tree3.left.right = new BinaryTree(2)

        expect(isSymmetric(tree3)).toBe(false)
    })
    it('return false',()=>{
        const tree4 = new BinaryTree(1)
        tree4.left = new BinaryTree(2)
        tree4.right = new BinaryTree(2)

        tree4.left.left = new BinaryTree(3)
        tree4.right.right = new BinaryTree(4)

        expect(isSymmetric(tree4)).toBe(false)
    })
})