
    //Author: Sakina Ebrahimi
    // Diameter of Tree 
    // Write a function that returns the number of nodes on the longest path between any two nodes in a binary tree. 

const BinaryTree = require('./BinaryTree')
const diameter = require('./question-11')

describe('Test function',()=>{
    it('return correct answer',()=>{
        const tree1 = new BinaryTree(1)
        tree1.left = new BinaryTree(2)
        tree1.right = new BinaryTree(3)

        expect(diameter(tree1)).toBe(3)
    })
    it('return correct answer',()=>{
        const tree2 = new BinaryTree(10)
        tree2.left = new BinaryTree(5)
        tree2.right = new BinaryTree(15)
        tree2.left.left = new BinaryTree(2)
        tree2.left.right = new BinaryTree(6)
        tree2.right.left = new BinaryTree(12)
        tree2.right.right = new BinaryTree(20)

        expect(diameter(tree2)).toBe(5)
    })
    it('return correct answer',()=>{
        const tree3 = new BinaryTree(1)
        tree3.right = new BinaryTree(2)
        tree3.right.right = new BinaryTree(3)
        tree3.right.right.right = new BinaryTree(4)

        expect(diameter(tree3)).toBe(4)
    })
   
    
})