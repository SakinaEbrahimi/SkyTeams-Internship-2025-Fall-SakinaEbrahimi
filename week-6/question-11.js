
    //Author: Sakina Ebrahimi
    // Diameter of Tree 
    // Write a function that returns the number of nodes on the longest path between any two nodes in a binary tree. 

const height = require('./question-1')
const BinaryTree = require('./BinaryTree')

function diameter(tree){
    if(tree === null) return 0

    let left_height = height(tree.left)
    let right_height = height(tree.right)

    return 1+(left_height+right_height)
}
// console.log(diameter(tree3))
module.exports = diameter