   
    // Author: Sakina Ebrahimi
    // Mirror Tree 
    // Modify a binary tree so that it becomes its mirror image by swapping the left and right child of every node. 

const BinaryTree = require('./BinaryTree')
const isMirror = require('./question-3')

describe('Test Mirror function',()=>{
    it('return true',()=>{
        const tree1 = new BinaryTree(1)
        tree1.left = new BinaryTree(2)
        tree1.right = new BinaryTree(3)
        tree1.right.left = new BinaryTree(4)

        const tree2 = new BinaryTree(1)
        tree2.right = new BinaryTree(2)
        tree2.left = new BinaryTree(3)
        tree2.left.right = new BinaryTree(4)

        expect(isMirror(tree1, tree2)).toBe(true)
    })

    it('return true',()=>{
        const tree1 = new BinaryTree(4)
        tree1.right = new BinaryTree(6)
        tree1.right.left = new BinaryTree(5)
        tree1.right.right = new BinaryTree(7)

        const tree2 = new BinaryTree(4)
        tree2.left = new BinaryTree(6)
        tree2.left.right = new BinaryTree(5)
        tree2.left.left = new BinaryTree(7)
        expect(isMirror(tree1, tree2)).toBe(true)
    })
    it('return true',()=>{
        const tree1 = new BinaryTree(3)
        tree1.left = new BinaryTree(2)

        const tree2 = new BinaryTree(3)
        tree2.right = new BinaryTree(2)

        expect(isMirror(tree1, tree2)).toBe(true)
    })
    it('return false',()=>{
        const tree1 = new BinaryTree(3)

        const tree2 = new BinaryTree(3)
        tree2.right = new BinaryTree(2)

        expect(isMirror(tree1, tree2)).toBe(false)
    })
    it('return false',()=>{
        const tree1 = new BinaryTree(4)
        tree1.right = new BinaryTree(6)
        tree1.right.left = new BinaryTree(5)
        tree1.right.right = new BinaryTree(3)

        const tree2 = new BinaryTree(4)
        tree2.left = new BinaryTree(6)
        tree2.left.right = new BinaryTree(5)
        tree2.left.left = new BinaryTree(7)

        expect(isMirror(tree1, tree2)).toBe(false)
    })
})
