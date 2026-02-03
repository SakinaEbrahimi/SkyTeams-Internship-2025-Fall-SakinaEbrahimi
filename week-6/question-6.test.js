
    //َAuthor: Sakina Ebrahimi
    // Children Sum Parent 
    // Write a function that checks whether every non-leaf node’s value is equal to the sum of the values of its left and right children. 

const BinaryTree = require('./BinaryTree')
const chilSumParent = require('./question-6')

describe('Test function',()=>{
    it('return correct answer',()=>{
        const tree1 = new BinaryTree(5)
        tree1.left = new BinaryTree(2)
        tree1.right = new BinaryTree(3)

        expect(chilSumParent(tree1)).toBe(true)
    })
    it('return correct answer',()=>{
        const tree3 = new BinaryTree(7)
        tree3.left = new BinaryTree(7)
        tree3.right = null
        tree3.left.left = new BinaryTree(3)
        tree3.left.right = new BinaryTree(4)

        expect(chilSumParent(tree3)).toBe(true)
    })
    it('return correct answer',()=>{
        const tree2 = new BinaryTree(10)
        tree2.left = new BinaryTree(4)
        tree2.right = new BinaryTree(6)
        tree2.left.left = new BinaryTree(2)
        tree2.left.right = new BinaryTree(2)
        tree2.right.left = new BinaryTree(3)
        tree2.right.right = new BinaryTree(3)

        expect(chilSumParent(tree2)).toBe(true)
    })
    it('return correct answer',()=>{
        const tree1 = new BinaryTree(5)
        tree1.left = new BinaryTree(2)
        tree1.right = new BinaryTree(4)

        expect(chilSumParent(tree1)).toBe(false)
    })
    it('return correct answer',()=>{
        const tree = new BinaryTree(20)
        tree.left = new BinaryTree(8)
        tree.right = new BinaryTree(10)
        tree.left.left = new BinaryTree(3)
        tree.left.right = new BinaryTree(4)

        expect(chilSumParent(tree)).toBe(false)
    })
    
})